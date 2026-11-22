/* 兼容旧版 Android System WebView 的运行环境补丁 */
(function () {
  if (!globalThis) {
    try { window.globalThis = window; } catch (e) {}
  }
  function def(obj, name, fn) {
    try {
      Object.defineProperty(obj, name, { value: fn, writable: true, configurable: true });
    } catch (e) {
      try { obj[name] = fn; } catch (e2) {}
    }
  }
  var AP = Array.prototype;
  if (!AP.at) def(AP, 'at', function (n) { n = Math.trunc(n) || 0; if (n < 0) n += this.length; return this[n]; });
  if (!AP.findLast) def(AP, 'findLast', function (fn, t) { for (var i = this.length - 1; i >= 0; i--) { if (fn.call(t, this[i], i, this)) return this[i]; } return undefined; });
  if (!AP.findLastIndex) def(AP, 'findLastIndex', function (fn, t) { for (var i = this.length - 1; i >= 0; i--) { if (fn.call(t, this[i], i, this)) return i; } return -1; });
  if (!AP.flat) def(AP, 'flat', function (d) { var depth = d === undefined ? 1 : d; var out = []; (function walk(arr, dep) { for (var i = 0; i < arr.length; i++) { var v = arr[i]; if (Array.isArray(v) && dep > 0) walk(v, dep - 1); else out.push(v); } })(this, depth); return out; });
  if (!AP.flatMap) def(AP, 'flatMap', function (fn, t) { return this.map(fn, t).flat(1); });

  /* ES2023 数组不可变方法（Chrome 110 之前没有） */
  if (!AP.toReversed) def(AP, 'toReversed', function () { return this.slice().reverse(); });
  if (!AP.toSorted) def(AP, 'toSorted', function (fn) { return this.slice().sort(fn); });
  if (!AP.toSpliced) def(AP, 'toSpliced', function (start, del) {
    var copy = this.slice();
    var args = [start, del === undefined ? copy.length - start : del];
    for (var i = 2; i < arguments.length; i++) args.push(arguments[i]);
    copy.splice.apply(copy, args);
    return copy;
  });
  if (!AP.with) def(AP, 'with', function (index, value) {
    var copy = this.slice();
    var idx = Math.trunc(index) || 0;
    if (idx < 0) idx += copy.length;
    copy[idx] = value;
    return copy;
  });
  if (!AP.copyWithin) def(AP, 'copyWithin', function (t, s, e) {
    var o = this, len = o.length;
    t = t < 0 ? Math.max(len + t, 0) : Math.min(t, len);
    s = s < 0 ? Math.max(len + s, 0) : Math.min(s === undefined ? 0 : s, len);
    e = e === undefined ? len : (e < 0 ? Math.max(len + e, 0) : Math.min(e, len));
    var c = o.slice(s, e), n = Math.min(c.length, len - t);
    for (var i = 0; i < n; i++) o[t + i] = c[i];
    return o;
  });

  var SP = String.prototype;
  if (!SP.at) def(SP, 'at', function (n) { n = Math.trunc(n) || 0; if (n < 0) n += this.length; return n < 0 || n >= this.length ? undefined : this.charAt(n); });
  if (!SP.replaceAll) def(SP, 'replaceAll', function (s, r) {
    if (Object.prototype.toString.call(s) === '[object RegExp]') {
      var re = new RegExp(s.source, s.flags.indexOf('g') >= 0 ? s.flags : s.flags + 'g');
      return this.replace(re, r);
    }
    return this.split(String(s)).join(String(r));
  });
  if (!SP.trimStart) def(SP, 'trimStart', function () { return this.replace(/^\s+/, ''); });
  if (!SP.trimEnd) def(SP, 'trimEnd', function () { return this.replace(/\s+$/, ''); });
  if (!SP.padStart) def(SP, 'padStart', function (n, p) { var s = String(this); p = p === undefined ? ' ' : String(p); while (s.length < n) s = p + s; return s; });
  if (!SP.padEnd) def(SP, 'padEnd', function (n, p) { var s = String(this); p = p === undefined ? ' ' : String(p); while (s.length < n) s = s + p; return s; });
  if (!Object.hasOwn) def(Object, 'hasOwn', function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); });
  if (!Object.fromEntries) def(Object, 'fromEntries', function (it) { var o = {}; for (var i = 0; i < it.length; i++) { o[it[i][0]] = it[i][1]; } return o; });
  if (!Object.entries) def(Object, 'entries', function (o) { var r = Object.keys(o).map(function (k) { return [k, o[k]]; }); return r; });
  if (!Promise.allSettled) def(Promise, 'allSettled', function (list) {
    return Promise.all(list.map(function (p) {
      return Promise.resolve(p).then(function (v) { return { status: 'fulfilled', value: v }; }, function (e) { return { status: 'rejected', reason: e }; });
    }));
  });
  if (typeof window.structuredClone === 'undefined') {
    window.structuredClone = function (v) {
      try { return JSON.parse(JSON.stringify(v)); } catch (e) { return v; }
    };
  }
  try {
    if (window.crypto && !window.crypto.randomUUID) {
      def(window.crypto, 'randomUUID', function () {
        var b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        b[6] = (b[6] & 0x0f) | 0x40;
        b[8] = (b[8] & 0x3f) | 0x80;
        var s = '';
        for (var i = 0; i < 16; i++) {
          s += (b[i] < 16 ? '0' : '') + b[i].toString(16);
          if (i === 3 || i === 5 || i === 7 || i === 9) s += '-';
        }
        return s;
      });
    }
  } catch (e) {}
  try {
    if (window.CanvasRenderingContext2D && !CanvasRenderingContext2D.prototype.roundRect) {
      def(CanvasRenderingContext2D.prototype, 'roundRect', function (x, y, w, h, r) {
        var rr = Math.min(typeof r === 'number' ? r : (r && r[0]) || 0, Math.abs(w) / 2, Math.abs(h) / 2);
        this.moveTo(x + rr, y);
        this.lineTo(x + w - rr, y);
        this.quadraticCurveTo(x + w, y, x + w, y + rr);
        this.lineTo(x + w, y + h - rr);
        this.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
        this.lineTo(x + rr, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - rr);
        this.lineTo(x, y + rr);
        this.quadraticCurveTo(x, y, x + rr, y);
      });
    }
  } catch (e) {}

  /* 流式响应的兜底：旧 WebView 里 Response.body 可能为 null */
  try {
    if (window.Response && window.fetch) {
      var probe = new Response('x');
      var probeBody = null;
      try { probeBody = probe.body; } catch (e) {}
      if (!probeBody) {
        Object.defineProperty(Response.prototype, 'body', {
          configurable: true,
          get: function () {
            var res = this;
            var consumed = false;
            return {
              getReader: function () {
                return {
                  read: function () {
                    if (consumed) return Promise.resolve({ done: true, value: undefined });
                    consumed = true;
                    return res.arrayBuffer().then(function (ab) {
                      return { done: false, value: new Uint8Array(ab) };
                    });
                  },
                  cancel: function () { return Promise.resolve(); },
                  releaseLock: function () {},
                  closed: Promise.resolve()
                };
              }
            };
          }
        });
      }
    }
  } catch (e) {}

  /* OffscreenCanvas 兜底：用普通 canvas 代替 */
  try {
    if (typeof window.OffscreenCanvas === 'undefined') {
      window.OffscreenCanvas = function (w, h) {
        var c = document.createElement('canvas');
        c.width = w || 1;
        c.height = h || 1;
        c.convertToBlob = function () {
          var canvas = c;
          return new Promise(function (resolve) {
            if (canvas.toBlob) canvas.toBlob(resolve, 'image/png');
            else resolve(null);
          });
        };
        return c;
      };
    }
  } catch (e) {}

  try {
    if (window.ResizeObserver === undefined) {
      window.ResizeObserver = function (cb) {
        this.cb = cb;
        this.observe = function () {};
        this.disconnect = function () {};
        this.unobserve = function () {};
      };
    }
  } catch (e) {}
})();
