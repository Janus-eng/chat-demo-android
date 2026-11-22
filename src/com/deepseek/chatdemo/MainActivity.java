package com.deepseek.chatdemo;

import android.Manifest;
import android.app.Activity;
import android.app.Dialog;
import android.content.ContentUris;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.database.Cursor;
import android.provider.MediaStore;
import android.provider.MediaStore.Images.Thumbnails;
import android.util.Size;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.HorizontalScrollView;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class MainActivity extends Activity {

    private static final int REQ_FILE = 1001;
    private static final int REQ_STORAGE = 1003;
    private static final int REQ_CAPTURE = 1004;
    private static final int REQ_MEDIA = 1005;
    private static final int REQ_AUDIO = 1002;

    private WebView web;
    private TextView tip;
    private FrameLayout root;
    private LocalServer server;
    private int port = 0;

    private ValueCallback<Uri[]> fileCallback;
    private Uri pendingCaptureUri;
    private WebChromeClient.FileChooserParams fileParams;
    private Dialog attachSheet;
    private View attachSheetContent;
    private PermissionRequest pendingAudioRequest;

    private static final Map<String, String> MIME = new HashMap<String, String>();

    static {
        MIME.put("html", "text/html; charset=utf-8");
        MIME.put("htm", "text/html; charset=utf-8");
        MIME.put("js", "application/javascript; charset=utf-8");
        MIME.put("mjs", "application/javascript; charset=utf-8");
        MIME.put("css", "text/css; charset=utf-8");
        MIME.put("json", "application/json; charset=utf-8");
        MIME.put("svg", "image/svg+xml");
        MIME.put("png", "image/png");
        MIME.put("jpg", "image/jpeg");
        MIME.put("jpeg", "image/jpeg");
        MIME.put("gif", "image/gif");
        MIME.put("webp", "image/webp");
        MIME.put("ico", "image/x-icon");
        MIME.put("woff", "font/woff");
        MIME.put("woff2", "font/woff2");
        MIME.put("ttf", "font/ttf");
        MIME.put("otf", "font/otf");
        MIME.put("wasm", "application/wasm");
        MIME.put("txt", "text/plain; charset=utf-8");
        MIME.put("map", "application/json; charset=utf-8");
        MIME.put("mp3", "audio/mpeg");
        MIME.put("wav", "audio/wav");
        MIME.put("mp4", "video/mp4");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        root = new FrameLayout(this);
        web = new WebView(this);
        root.addView(web, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        tip = new TextView(this);
        tip.setTextColor(Color.parseColor("#333333"));
        tip.setTextSize(13);
        tip.setGravity(Gravity.CENTER);
        tip.setPadding(36, 220, 36, 36);
        tip.setVisibility(View.GONE);
        tip.setBackgroundColor(Color.parseColor("#FFFDF5"));
        root.addView(tip, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        setContentView(root);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setSupportZoom(false);
        s.setTextZoom(100);
        s.setJavaScriptCanOpenWindowsAutomatically(true);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                String scheme = u == null ? null : u.getScheme();
                if (u != null && "http".equals(scheme) && u.getHost() != null
                        && u.getHost().startsWith("127.0.0.1")) {
                    return false;
                }
                if ("about".equals(scheme)) {
                    return false;
                }
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception ignored) {
                }
                return true;
            }

            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                if (failingUrl != null && failingUrl.contains("favicon")) {
                    return;
                }
                showTip("加载失败（" + errorCode + "）：" + description);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                view.evaluateJavascript(
                        "(function(){try{if(window.__bound)return 'ok';window.__bound=1;window.__log=[];" +
                        "window.addEventListener('error',function(e){try{var t=e.target;if(t&&(t.src||t.href)){window.__log.push('LOAD FAIL: '+(t.src||t.href));}else{window.__log.push('ERROR: '+(e.message||'')+' @'+(e.filename||'')+':'+(e.lineno||''));}}catch(x){}},true);" +
                        "window.addEventListener('unhandledrejection',function(e){try{var r=e.reason;window.__log.push('REJECT: '+((r&&r.message)||String(r)));}catch(x){}});" +
                        "var ce=console.error;console.error=function(){try{window.__log.push('CONSOLE: '+Array.prototype.slice.call(arguments).join(' '));}catch(x){}ce.apply(console,arguments)};" +
                        "return 'ok'}catch(e){return 'hookfail'}})()", null);
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                boolean audio = false;
                for (String r : request.getResources()) {
                    if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(r)) {
                        audio = true;
                    }
                }
                if (audio && checkSelfPermission(Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
                    pendingAudioRequest = request;
                    requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQ_AUDIO);
                    return;
                }
                request.grant(request.getResources());
            }

            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback,
                                             FileChooserParams params) {
                if (fileCallback != null) {
                    fileCallback.onReceiveValue(null);
                }
                fileCallback = callback;
                fileParams = params;
                showAttachSheet();
                return true;
            }

        });

        String url;
        try {
            server = new LocalServer();
            port = server.start();
            url = "http://127.0.0.1:" + port + "/index.html";
        } catch (Throwable e) {
            url = "file:///android_asset/web/index.html";
        }
        web.loadUrl(url);
    }

    private static String truncate(String s, int max) {
        if (s == null) {
            return "";
        }
        return s.length() <= max ? s : s.substring(0, max) + "…";
    }

    private void toast(final String text) {
        runOnUiThread(() -> android.widget.Toast.makeText(this, text, android.widget.Toast.LENGTH_SHORT).show());
    }

    private void showTip(final String text) {        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (tip != null) {
                    tip.setText(text);
                    tip.setVisibility(View.VISIBLE);
                }
            }
        });
    }

    /** 点回形针先弹「拍照 / 相册 / 文件」三选一 */
    /** 官方样式的底部面板：最近照片 + 拍照/相册/文件 三块圆角按钮 */
    private void showAttachSheet() {
        if (attachSheet != null && attachSheet.isShowing()) {
            return;
        }
        final Dialog dialog = new Dialog(this);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        View content = getLayoutInflater().inflate(R.layout.sheet_attach, null);
        dialog.setContentView(content);
        Window window = dialog.getWindow();
        if (window != null) {
            window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            window.setLayout(ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.WRAP_CONTENT);
            window.setGravity(Gravity.BOTTOM);
            window.addFlags(WindowManager.LayoutParams.FLAG_DIM_BEHIND);
            WindowManager.LayoutParams lp = window.getAttributes();
            lp.dimAmount = 0.25f;
            window.setAttributes(lp);
        }
        content.findViewById(R.id.tile_camera).setOnClickListener(v -> {
            dialog.dismiss();
            startCapture();
        });
        content.findViewById(R.id.tile_gallery).setOnClickListener(v -> {
            dialog.dismiss();
            startGallery();
        });
        content.findViewById(R.id.tile_files).setOnClickListener(v -> {
            dialog.dismiss();
            startFiles();
        });
        dialog.setOnCancelListener(d -> cancelFileChooser());
        attachSheet = dialog;
        attachSheetContent = content;
        dialog.show();
        // 显示之后再定一次尺寸，避免系统把弹窗收窄
        Window shown = dialog.getWindow();
        if (shown != null) {
            shown.setLayout(ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.WRAP_CONTENT);
        }
        loadRecentThumbs(content);
    }

    /** 查询最近的照片，做成顶部可横向滑动的小图 */
    private void loadRecentThumbs(View content) {
        final HorizontalScrollView scroll = content.findViewById(R.id.thumbs_scroll);
        final LinearLayout row = content.findViewById(R.id.thumbs_row);
        if (scroll == null || row == null) {
            return;
        }
        if (!hasMediaPermission()) {
            requestMediaPermission();
            return;
        }
        new Thread(() -> {
            List<Uri> uris = new ArrayList<>();
            List<Bitmap> thumbs = new ArrayList<>();
            try (Cursor cursor = getContentResolver().query(
                    MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                    new String[]{MediaStore.Images.Media._ID},
                    null, null,
                    MediaStore.Images.Media.DATE_ADDED + " DESC")) {
                if (cursor != null) {
                    while (cursor.moveToNext() && uris.size() < 12) {
                        long id = cursor.getLong(0);
                        Uri uri = ContentUris.withAppendedId(
                                MediaStore.Images.Media.EXTERNAL_CONTENT_URI, id);
                        Bitmap bitmap = loadThumb(uri, id);
                        if (bitmap != null) {
                            uris.add(uri);
                            thumbs.add(bitmap);
                        }
                    }
                }
            } catch (Exception ignored) {
            }
            final List<Uri> resultUris = uris;
            final List<Bitmap> resultThumbs = thumbs;
            runOnUiThread(() -> {
                if (attachSheetContent != content) {
                    return;
                }
                if (resultThumbs.isEmpty()) {
                    scroll.setVisibility(View.GONE);
                    return;
                }
                row.removeAllViews();
                int size = (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,
                        68, getResources().getDisplayMetrics());
                int gap = (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,
                        8, getResources().getDisplayMetrics());
                for (int i = 0; i < resultThumbs.size(); i++) {
                    ImageView iv = new ImageView(this);
                    LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(size, size);
                    lp.rightMargin = gap;
                    iv.setLayoutParams(lp);
                    iv.setScaleType(ImageView.ScaleType.CENTER_CROP);
                    iv.setBackgroundResource(R.drawable.bg_thumb);
                    iv.setImageBitmap(resultThumbs.get(i));
                    final Uri picked = resultUris.get(i);
                    iv.setOnClickListener(v -> {
                        if (attachSheet != null) {
                            attachSheet.dismiss();
                        }
                        if (fileCallback != null) {
                            fileCallback.onReceiveValue(new Uri[]{picked});
                            fileCallback = null;
                        }
                        fileParams = null;
                    });
                    row.addView(iv);
                }
                scroll.setVisibility(View.VISIBLE);
            });
        }).start();
    }

    private Bitmap loadThumb(Uri uri, long id) {
        try {
            if (Build.VERSION.SDK_INT >= 29) {
                return getContentResolver().loadThumbnail(uri, new Size(220, 220), null);
            }
            return Thumbnails.getThumbnail(getContentResolver(), id,
                    Thumbnails.MINI_KIND, null);
        } catch (Exception e) {
            return null;
        }
    }

    private boolean hasMediaPermission() {
        String permission = Build.VERSION.SDK_INT >= 33
                ? "android.permission.READ_MEDIA_IMAGES"
                : Manifest.permission.READ_EXTERNAL_STORAGE;
        return checkSelfPermission(permission) == PackageManager.PERMISSION_GRANTED;
    }

    private void requestMediaPermission() {
        String permission = Build.VERSION.SDK_INT >= 33
                ? "android.permission.READ_MEDIA_IMAGES"
                : Manifest.permission.READ_EXTERNAL_STORAGE;
        try {
            requestPermissions(new String[]{permission}, REQ_MEDIA);
        } catch (Exception ignored) {
        }
    }

    private void startCapture() {
        if (Build.VERSION.SDK_INT <= 28
                && checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    REQ_STORAGE);
            return;
        }
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (intent.resolveActivity(getPackageManager()) == null) {
            toast("未找到相机应用");
            cancelFileChooser();
            return;
        }
        try {
            ContentValues values = new ContentValues();
            values.put(MediaStore.Images.Media.DISPLAY_NAME,
                    "IMG_" + System.currentTimeMillis() + ".jpg");
            values.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
            pendingCaptureUri = getContentResolver()
                    .insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
            if (pendingCaptureUri == null) {
                toast("无法创建照片文件");
                cancelFileChooser();
                return;
            }
            intent.putExtra(MediaStore.EXTRA_OUTPUT, pendingCaptureUri);
            intent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION
                    | Intent.FLAG_GRANT_READ_URI_PERMISSION);
            startActivityForResult(intent, REQ_CAPTURE);
        } catch (Exception e) {
            toast("无法打开相机：" + e.getMessage());
            cancelFileChooser();
        }
    }

    private void startGallery() {
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType("image/*");
        intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        try {
            startActivityForResult(intent, REQ_FILE);
        } catch (Exception e) {
            toast("未找到可用的相册");
            cancelFileChooser();
        }
    }

    private void startFiles() {
        Intent intent = null;
        try {
            intent = fileParams == null ? null : fileParams.createIntent();
        } catch (Exception ignored) {
        }
        if (intent == null) {
            intent = new Intent(Intent.ACTION_GET_CONTENT);
            intent.addCategory(Intent.CATEGORY_OPENABLE);
        }
        intent.setType("*/*");
        intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        try {
            startActivityForResult(intent, REQ_FILE);
        } catch (Exception e) {
            try {
                Intent pick = new Intent(Intent.ACTION_PICK);
                pick.setType("*/*");
                pick.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivityForResult(pick, REQ_FILE);
            } catch (Exception e2) {
                toast("未找到可用的文件选择器");
                cancelFileChooser();
            }
        }
    }

    private void cancelFileChooser() {
        attachSheet = null;
        attachSheetContent = null;
        if (fileCallback != null) {
            fileCallback.onReceiveValue(null);
            fileCallback = null;
        }
        fileParams = null;
        pendingCaptureUri = null;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQ_CAPTURE) {
            Uri result = resultCode == RESULT_OK ? pendingCaptureUri : null;
            if (result == null && pendingCaptureUri != null) {
                try {
                    getContentResolver().delete(pendingCaptureUri, null, null);
                } catch (Exception ignored) {
                }
            }
            deliver(result == null ? null : new Uri[]{result});
            pendingCaptureUri = null;
            fileParams = null;
            return;
        }
        if (requestCode == REQ_FILE) {
            deliver(WebChromeClient.FileChooserParams.parseResult(resultCode, data));
            fileParams = null;
            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    private void deliver(Uri[] uris) {
        if (fileCallback != null) {
            fileCallback.onReceiveValue(uris);
            fileCallback = null;
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == REQ_MEDIA) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                if (attachSheetContent != null) {
                    loadRecentThumbs(attachSheetContent);
                }
            }
            super.onRequestPermissionsResult(requestCode, permissions, grantResults);
            return;
        }
        if (requestCode == REQ_STORAGE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                startCapture();
            } else {
                toast("需要存储权限才能拍照");
                cancelFileChooser();
            }
            super.onRequestPermissionsResult(requestCode, permissions, grantResults);
            return;
        }
        if (requestCode == REQ_AUDIO && pendingAudioRequest != null) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                pendingAudioRequest.grant(pendingAudioRequest.getResources());
            } else {
                pendingAudioRequest.deny();
            }
            pendingAudioRequest = null;
        }
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && web != null && web.canGoBack()) {
            web.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onDestroy() {
        if (server != null) {
            server.stop();
            server = null;
        }
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }

    /** 本地静态服务，把 assets/web 下的文件通过 http://127.0.0.1 提供出去 */
    private class LocalServer {

        private ServerSocket socket;
        private volatile boolean running = true;

        int start() throws IOException {
            IOException last = null;
            for (int p = 8931; p <= 8945; p++) {
                try {
                    socket = new ServerSocket(p, 32, InetAddress.getByName("127.0.0.1"));
                    Thread t = new Thread(new Runnable() {
                        @Override
                        public void run() {
                            acceptLoop();
                        }
                    }, "local-assets-server");
                    t.setDaemon(true);
                    t.start();
                    return p;
                } catch (IOException e) {
                    last = e;
                    socket = null;
                }
            }
            throw last != null ? last : new IOException("no port");
        }

        void stop() {
            running = false;
            try {
                if (socket != null) {
                    socket.close();
                }
            } catch (Exception ignored) {
            }
        }

        private void acceptLoop() {
            while (running) {
                try {
                    final Socket client = socket.accept();
                    Thread t = new Thread(new Runnable() {
                        @Override
                        public void run() {
                            try {
                                handle(client);
                            } catch (Exception ignored) {
                            } finally {
                                try {
                                    client.close();
                                } catch (Exception ignored) {
                                }
                            }
                        }
                    });
                    t.setDaemon(true);
                    t.start();
                } catch (Exception e) {
                    // ignore
                }
            }
        }

        private void handle(Socket client) throws IOException {
            InputStream in = client.getInputStream();
            String line = readLine(in);
            if (line == null) {
                return;
            }
            String[] parts = line.split(" ");
            String path = parts.length > 1 ? parts[1] : "/";
            int q = path.indexOf('?');
            if (q >= 0) {
                path = path.substring(0, q);
            }
            path = Uri.decode(path);
            String rel = path.length() <= 1 ? "index.html" : path.substring(1);
            if (rel.endsWith("/")) {
                rel += "index.html";
            }

            byte[] body;
            try {
                body = readAsset("web/" + rel);
            } catch (IOException e) {
                body = null;
            }

            OutputStream out = client.getOutputStream();
            if (body == null) {
                byte[] msg = "Not Found".getBytes("UTF-8");
                out.write(("HTTP/1.1 404 Not Found\r\nContent-Type: text/plain; charset=utf-8\r\n" +
                        "Content-Length: " + msg.length + "\r\nConnection: close\r\n\r\n").getBytes("UTF-8"));
                out.write(msg);
            } else {
                String ext = "";
                int dot = rel.lastIndexOf('.');
                if (dot >= 0) {
                    ext = rel.substring(dot + 1).toLowerCase(Locale.US);
                }
                String mime = MIME.get(ext);
                if (mime == null) {
                    mime = "application/octet-stream";
                }
                out.write(("HTTP/1.1 200 OK\r\nContent-Type: " + mime + "\r\n" +
                        "Content-Length: " + body.length + "\r\n" +
                        "Cache-Control: no-cache\r\n" +
                        "Access-Control-Allow-Origin: *\r\n" +
                        "Connection: close\r\n\r\n").getBytes("UTF-8"));
                out.write(body);
            }
            out.flush();
        }

        private String readLine(InputStream in) throws IOException {
            StringBuilder sb = new StringBuilder();
            int c;
            while ((c = in.read()) != -1) {
                if (c == '\n') {
                    break;
                }
                if (c != '\r') {
                    sb.append((char) c);
                }
                if (sb.length() > 2048) {
                    break;
                }
            }
            return sb.length() == 0 ? null : sb.toString();
        }

        private byte[] readAsset(String name) throws IOException {
            InputStream is = getAssets().open(name);
            try {
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                byte[] buf = new byte[4096];
                int n;
                while ((n = is.read(buf)) > 0) {
                    bos.write(buf, 0, n);
                }
                return bos.toByteArray();
            } finally {
                try {
                    is.close();
                } catch (Exception ignored) {
                }
            }
        }
    }
}
