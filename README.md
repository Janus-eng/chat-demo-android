# Chat Demo Android（WebView 壳）

基于开源项目 [deepseek-ai/chat-demo](https://github.com/deepseek-ai/chat-demo) v0.1.1 的静态产物打包的安卓 WebView 客户端，仅供技术学习交流。

## 简介

- 包名：`com.deepseek.chatdemo`
- minSdk 24（Android 7.0+），targetSdk 34
- 首次打开进入「设置」，自行填写 DeepSeek 开放平台 API Key 后即可对话
- 网页资源通过本地 `127.0.0.1` 静态服务加载，数据存于 App 私有 WebView 存储（localStorage / IndexedDB）

## 功能

沿用上游 chat-demo 的能力：

- 多会话、自动标题、重命名与删除；编辑提问、重新生成、切换消息分支
- 流式回答、深度思考、智能搜索、链接阅读与来源引用；可停止、继续生成
- 附件上传（拍照 / 相册 / 文件）、粘贴与拖拽，语音输入与回复朗读
- Markdown、代码高亮、KaTeX 公式、Mermaid 图表
- 中英文、浅色 / 深色主题、移动端布局、历史对话导入导出（ZIP）

## 使用前提（重要）

- 本客户端**不内置、不提供任何 API Key**，需要你自行前往 DeepSeek 开放平台申请。
- **API 额度与官方 C 端 APP 相互独立**，按 API 用量计费；本项目不绕过官方 APP 限额，也不提供免费额度。
- 发送对话、上传附件、使用语音功能时，相应内容会提交到你配置的 API 服务。

## 目录结构

```
├── AndroidManifest.xml          # 清单文件（权限、Activity）
├── src/com/deepseek/chatdemo/  # WebView 壳 Java 源码
├── assets/web/                 # 上游静态产物（index.html / js / css / 字体）
├── res/                        # 图标、布局、图标资源
└── README.md
```

## 重新构建

使用 Android SDK 命令行工具（aapt2 + javac + d8 + apksigner）打包：

1. `aapt2 compile` 编译 `res/`，`aapt2 link` 生成基础 APK；
2. `javac` 编译 `src/` 下 Java 源码，`d8` 转 dex；
3. 把 `assets/`、dex、资源合并进 APK，`zipalign` 对齐；
4. `apksigner` 签名后安装。

> 签名密钥（keystore）属于本地敏感文件，不要提交到仓库。

## 数据与隐私

- API Key、设置保存在 WebView localStorage；会话与附件原件保存在 IndexedDB，按站点源隔离。
- 历史导出包含会话与本地可用图片原件，**不包含 API Key、设置或非图片附件原件**。
- 仓库内不含任何个人手机号、微信号、聊天记录、IP、端口或密钥。

## 免责声明

本项目仅用于安卓 WebView 封装与开源技术学习交流。上游 chat-demo 遵循 MIT 许可证；本项目的壳代码同样按 MIT 发布。

使用本客户端产生的账号、计费与合规风险由使用者自行承担；请勿用于违规自动化、批量消息等用途。

## 许可证

上游版权归 DeepSeek 所有，原始许可证见 [assets/web/LICENSE](assets/web/LICENSE)。
