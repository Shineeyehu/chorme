# 网页金句导出插件 (Web Quotes to Image)

## 项目简介
这是一个 Chrome 浏览器扩展，可以将网页中的文字内容转换为精美的图片。用户可以将喜欢的句子制作成不同风格的图片，便于保存和分享。

## 功能需求

### 核心功能
1. **文本输入**
   - 提供文本输入框，支持粘贴网页中复制的文字
   - 支持手动输入和编辑文字内容
   - 最大字数限制：200字

2. **图片生成**
   - 默认生成竖版图片（宽度固定，高度自适应）
   - 默认图片尺寸：宽度 800px
   - 支持预览生成效果
   - 提供下载按钮，保存为 PNG 格式

3. **样式定制**
   - 提供 3 种预设主题风格：
     * 简约白（白底黑字）
     * 暗夜黑（黑底白字）
     * 温暖棕（米色底深棕字）
   - 字体选项：
     * 默认提供 3 种中文字体
     * 支持调整字号大小（16-36px）
   - 文本对齐方式：居左/居中
   - 图片内边距可调整（20-60px）

### 用户界面
1. **弹出窗口（Popup）**
   - 尺寸：400px × 600px
   - 响应式布局，支持不同屏幕分辨率
   - 界面元素：
     * 文本输入区
     * 样式选项区
     * 预览区
     * 下载按钮

### 使用流程
1. 在网页中选中并复制想要保存的文字
2. 点击 Chrome 工具栏中的插件图标
3. 将文字粘贴到输入框中
4. 选择喜欢的样式主题和字体
5. 预览效果
6. 点击下载按钮保存图片

## 技术要求
- 使用 Manifest V3 开发
- 使用现代 JavaScript (ES6+)
- 使用 HTML5 Canvas 进行图片生成
- 响应式设计，确保良好的用户体验

## 后续优化方向
1. 添加更多主题样式
2. 支持自定义背景颜色和字体颜色
3. 支持添加简单装饰元素
4. 支持直接选中网页文字生成图片
5. 支持横版图片布局
6. 支持导出更多图片格式（如 JPG、WebP）

## 注意事项
- 图片生成过程在本地完成，不涉及服务器
- 注重性能优化，确保图片生成过程流畅
- 确保生成的图片清晰度良好，适合分享