const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (even) => {
  const creatEl = document.createElement("span");
  const xpos = even.offsetX;
  const ypos = even.offsetY;

  creatEl.style.top = ypos + "px";
  creatEl.style.left = xpos + "px";
  bodyEl.appendChild(creatEl);
  const size = Math.random() * 150;
  creatEl.style.width = size + "px";
  creatEl.style.height = size + "px";

  setTimeout(() => {
    creatEl.remove();
  }, 2500);
});
