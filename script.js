//
//
//
//

const btn = document.querySelector("#btn");
const primConn = document.querySelector(".primaryBox");
let placementMode = false;
let countTimerr;

btn.addEventListener("mouseenter", () => {
  // When the mouse hovers over the button
  // Clear any timer that has started, so it doesn't "stack" when hovering over the button multible times
  clearTimeout(countTimerr);
  originalText = btn.textContent;

  btn.textContent = "HEY, KEEP YOUR FILTHY HAND OFF OF ME!";
});

btn.addEventListener("mouseleave", () => {
  // When the mouse moves away from the button after hovering over it
  // Sets a timer that changes the text to "USE..", then afer 3000 miliseconds, reverts back to html code
  btn.textContent = "CLICK ONCE, THEN USE ARROWKEYS!";
  countTimerr = setTimeout(() => {
    btn.textContent = originalText;
  }, 1200);
});

// btn("onkeydown", (event) => {
//   if (event.key === "ArrowRight") {
//     btn.style.right = btn.offsetRight - 10 + "px";
//   }
// });

// btn.addEventListener("keydown", (event) => {
//   switch (event.keyCode) {
//     case 37:
//       btn.style.left = btn.style.offsetLeft + 10 + "px";
//       break
//     case 38:
//       btn.style.up = btn.style.offsetup - 10 + "px";
//       break
//     case 39:
//       btn.style.Right = btn.style.offsetright - 10 + "px";
//       break
//     case 40:
//       btn.style.Down = btn.style.offsetdown - 10 + "px";
//       break
//   }
// });

btn.addEventListener("keydown", (event) => {
  if (placementMode) return;
  // When the arrowkeys are pressed, the button is moved accordingly
  let key = event.key;

  switch (event.key) {
    case "ArrowLeft" || key === 37:
      btn.style.left = btn.offsetLeft - 10 + "px";
      break;
    case "ArrowUp" || key === 38:
      btn.style.top = btn.offsetTop - 10 + "px";
      break;
    case "ArrowRight" || key === 39:
      btn.style.left = btn.offsetLeft + 10 + "px";
      break;
    case "ArrowDown" || key === 40:
      btn.style.top = btn.offsetTop + 10 + "px";
      break;
  }
  // grrr...w. why is it left and top and not left,right,up,down. blegh
});

btn.addEventListener("dblClick", () => {
  // Enter placementmode, beep boop
  placementMode = true;
  btn.style.boxShadow = "0 0 10px 3px #808080"; // shadow for placement
  btn.style.cursor = "crosshair"; // visual target for placement

  //
});

btn.addEventListener("click", (event) => {
  //
  if (!placementMode)
    // exits the function if the placement mode is off
    return;

  // Aquire the position of the mouse
  const positionM = primConn.getBoundingClientRect();
  const xp = event.clientX - positionM - btn.offsetWidth / 2;
  const yp = event.clientY - positionM - btn.offsetHeight / 2;

  // Update the position of the button
  btn.style.left = `${xp}px`;
  btn.style.top = `${yp}px`;

  // Exit placementmode, booooop
  placementMode = false;
  btn.style.boxShadow = ""; // remove placement shadow
  btn.style.cursor = "default"; // update cursor
});
