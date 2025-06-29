# 91Porn 视频播放控制脚本

## 项目简介

本项目为一款基于 Tampermonkey 的用户脚本，旨在为 [91Porn](https://www.91porn.com/) 网站的视频播放页面提供更便捷的键盘控制体验。通过本脚本，用户可使用键盘快捷键快速控制视频的播放进度、音量、静音、全屏等功能，提升观影效率。

## 功能说明

- **左右方向键**：
  - `←`（左箭头）：后退 10 秒
  - `→`（右箭头）：前进 10 秒
- **上下方向键**：
  - `↑`（上箭头）：音量增加 10%
  - `↓`（下箭头）：音量减少 10%
- **空格键**：
  - 暂停/播放视频
- **M 键**：
  - 静音/取消静音
- **F 键**：
  - 切换全屏/退出全屏

每次调整音量时，页面顶部会弹出音量提示。

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展。
2. 下载或复制本项目中的 `91porn_video_control.user.js` 文件内容。
3. 打开 Tampermonkey 仪表盘，点击"添加新脚本"，将代码粘贴进去并保存。
4. 确保脚本已启用，并访问 [91Porn](https://www.91porn.com/) 网站的视频页面。

## 使用说明

- 进入 91Porn 视频播放页面后，直接使用上述快捷键即可控制视频。
- 音量调整时会有顶部弹窗提示当前音量百分比。
- 支持主流浏览器（如 Chrome、Edge、Firefox）配合 Tampermonkey 使用。

## 注意事项与常见问题

- 本脚本仅在 [91Porn](https://www.91porn.com/) 网站生效。
- 若快捷键无效，请确认页面上有视频元素，且脚本已正确加载。
- 某些浏览器或扩展可能与 Tampermonkey 脚本存在兼容性问题，建议使用最新版 Chrome。
- 若遇到快捷键冲突，可自行修改脚本中的按键设置。
