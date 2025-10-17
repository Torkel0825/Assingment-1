//
//
//
//

const btn = document.querySelector("#btn");
const primConn = document.querySelector(".primaryBox");
// const mouseEnter = btn.addEventListener("mouseenter");
// const mouseMove = btn.addEventListener("mousemove");
// const doubleClick = btn.addEventListener("dblclick");
// const mouseLeave = btn.addEventListener("mouseleave");

//
let placementMode = false;
let countTimer;
let btnGhost = null;
let originalText;

//
btn.addEventListener("mouseover", mouseEnterF());

function mouseEnterF() {
  btn.addEventListener("mouseover", () => {
    clearTimeout(countTimer);
    originalText = btn.textContent;

    btn.textContent = "Hello there!";
    console.log("Mouse detected on button.");
  });
  btn.addEventListener("mouseleave", mouseLeaveF());
}

function mouseLeaveF() {
  console.log("Mouse left the button.");
  btn.textContent =
    "Double-click to move with mouse, click once, then use arrow-keys:3";
  countTimer = setTimeout(() => {
    btn.textContent = originalText;
    console.log("Counter off.");
  }, 2000);
}
