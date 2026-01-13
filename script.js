const papers = document.querySelectorAll('.paper');

let activePaper = null;
let offsetX = 0;
let offsetY = 0;
let zIndex = 1;

papers.forEach(paper => {
    paper.addEventListener('mousedown', (e) => {
        activePaper = paper;
        offsetX = e.clientX - paper.offsetLeft;
        offsetY = e.clientY - paper.offsetTop;
        paper.style.zIndex = ++zIndex;
    });
});

document.addEventListener('mousemove', (e) => {
    if (!activePaper) return;

    activePaper.style.left = e.clientX - offsetX + 'px';
    activePaper.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
    activePaper = null;
});
