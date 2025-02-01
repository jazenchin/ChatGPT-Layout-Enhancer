// 添加自定義樣式
const style = document.createElement("style");
style.textContent = "article > div > div { max-width: 100% !important; }";
document.head.appendChild(style);

// 調整編輯器區域寬度
function adjustComposerWidth() {
    const composerBg = document.querySelector("#composer-background");
    if (composerBg) {
        const form = composerBg.closest("form");
        if (form) {
            const parentDiv = form.parentElement;
            if (parentDiv && parentDiv.tagName === "DIV") {
                parentDiv.style.maxWidth = "100%";
                parentDiv.style.setProperty("max-width", "100%", "important");
            }
        }
    }
}

// 初始調整
adjustComposerWidth();

// 監聽 DOM 變化以處理動態加載的元素
const observer = new MutationObserver(() => {
    adjustComposerWidth();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
}); 