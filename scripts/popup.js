// 获取DOM元素
const textInput = document.getElementById('textInput');
const charCount = document.querySelector('.char-count');
const themeButtons = document.querySelectorAll('.theme-btn');
const fontFamilySelect = document.getElementById('fontFamily');
const fontSizeInput = document.getElementById('fontSize');
const fontSizeValue = document.querySelector('.font-size-value');
const alignButtons = document.querySelectorAll('.align-btn');
const paddingInput = document.getElementById('padding');
const paddingValue = document.querySelector('.padding-value');
const previewCanvas = document.getElementById('previewCanvas');
const downloadBtn = document.getElementById('downloadBtn');

// 当前样式配置
let currentStyle = {
    theme: 'simple',
    fontFamily: 'Microsoft YaHei',
    fontSize: 24,
    textAlign: 'left',
    padding: 40
};

// 主题配置
const themes = {
    simple: { background: '#ffffff', color: '#000000' },
    dark: { background: '#000000', color: '#ffffff' },
    warm: { background: '#f5e6d3', color: '#4a3c31' }
};

// 监听文本输入
textInput.addEventListener('input', () => {
    const length = textInput.value.length;
    charCount.textContent = `${length}/200`;
    generatePreview();
});

// 主题切换
themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStyle.theme = btn.dataset.theme;
        generatePreview();
    });
});

// 字体选择
fontFamilySelect.addEventListener('change', () => {
    currentStyle.fontFamily = fontFamilySelect.value;
    generatePreview();
});

// 字体大小调整
fontSizeInput.addEventListener('input', () => {
    const size = fontSizeInput.value;
    fontSizeValue.textContent = `${size}px`;
    currentStyle.fontSize = parseInt(size);
    generatePreview();
});

// 对齐方式切换
alignButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alignButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStyle.textAlign = btn.dataset.align;
        generatePreview();
    });
});

// 内边距调整
paddingInput.addEventListener('input', () => {
    const padding = paddingInput.value;
    paddingValue.textContent = `${padding}px`;
    currentStyle.padding = parseInt(padding);
    generatePreview();
});

// 生成预览图片
function generatePreview() {
    const text = textInput.value;
    if (!text) return;

    const canvas = previewCanvas;
    const ctx = canvas.getContext('2d');
    const theme = themes[currentStyle.theme];

    // 设置画布尺寸
    const width = 800;
    const maxWidth = width - (currentStyle.padding * 2);
    ctx.font = `${currentStyle.fontSize}px ${currentStyle.fontFamily}`;

    // 计算文本换行
    const lines = [];
    let line = '';
    const words = text.split('');

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
            lines.push(line);
            line = words[i];
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    // 计算画布高度
    const lineHeight = currentStyle.fontSize * 1.5;
    const height = (lines.length * lineHeight) + (currentStyle.padding * 2);
    canvas.width = width;
    canvas.height = height;

    // 绘制背景
    ctx.fillStyle = theme.background;
    ctx.fillRect(0, 0, width, height);

    // 绘制文本
    ctx.fillStyle = theme.color;
    ctx.font = `${currentStyle.fontSize}px ${currentStyle.fontFamily}`;
    ctx.textBaseline = 'top';

    lines.forEach((line, index) => {
        let x = currentStyle.padding;
        if (currentStyle.textAlign === 'center') {
            ctx.textAlign = 'center';
            x = width / 2;
        } else {
            ctx.textAlign = 'left';
        }
        ctx.fillText(line, x, currentStyle.padding + (index * lineHeight));
    });
}

// 下载图片
downloadBtn.addEventListener('click', () => {
    if (!textInput.value) return;

    const link = document.createElement('a');
    link.download = '金句图片.png';
    link.href = previewCanvas.toDataURL('image/png');
    link.click();
});

// 初始化预览
textInput.value = '';
charCount.textContent = '0/200';
generatePreview();