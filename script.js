const papers = document.querySelectorAll(".paper");

papers.forEach(paper => {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  function start(x, y) {
    dragging = true;
    offsetX = x - paper.offsetLeft;
    offsetY = y - paper.offsetTop;
  }

  function move(x, y) {
    if (!dragging) return;
    paper.style.left = x - offsetX + "px";
    paper.style.top = y - offsetY + "px";
  }

  function stop() {
    dragging = false;
  }

  // Desktop
  paper.addEventListener("mousedown", e => {
    start(e.clientX, e.clientY);
  });

  document.addEventListener("mousemove", e => {
    move(e.clientX, e.clientY);
  });

  document.addEventListener("mouseup", stop);

  // Mobile
  paper.addEventListener("touchstart", e => {
    const t = e.touches[0];
    start(t.clientX, t.clientY);
  }, { passive: true });

  document.addEventListener("touchmove", e => {
    const t = e.touches[0];
    move(t.clientX, t.clientY);
  }, { passive: true });

  document.addEventListener("touchend", stop);
});

            

