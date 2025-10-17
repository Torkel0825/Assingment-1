//
//
//
//

const btn = document.querySelector("#btn");
const primConn = document.querySelector(".primaryBox");
let placementMode = false;
let countTimer;
let countTimer2;
let btnGhost = null;
let mooVe = false;
//

btn.addEventListener("mouseenter", () => {
  // When the mouse hovers over the button
  // Clear any timer that has started, so it doesn't "stack" when hovering over the button multiple times
  clearTimeout(countTimer);
  originalText = btn.textContent;

  btn.textContent = "HEY, KEEP YOUR FILTHY HAND OFF OF ME!";
  console.log("Mouse entered button, counter reset.");
});

btn.addEventListener("mouseleave", () => {
  // When the mouse moves away from the button after hovering over it
  // Sets a timer that changes the text to "USE..", then after 3000 milliseconds, reverts back to html code
  console.log("Mouse left the button, counter activated, 1.2s");
  btn.textContent = "CLICK ONCE, THEN USE ARROWKEYS!";
  //   console.log();
  countTimer = setTimeout(() => {
    btn.textContent = originalText;
    console.log("Counter off.");
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
//       btn.style.up = btn.style.offsetUp - 10 + "px";
//       break
//     case 39:
//       btn.style.Right = btn.style.offsetRight - 10 + "px";
//       break
//     case 40:
//       btn.style.Down = btn.style.offsetDown - 10 + "px";
//       break
//   }
// });

btn.addEventListener("keydown", (event) => {
  if (placementMode) {
    console.log("You have placementMode active, error");
    return;
  }
  // When the arrowkeys are pressed, the button is moved accordingly
  let key = event.key;
  if (event) {
    btn.textContent = "WEEEEEEEEE!!";
    countTimer2 = setTimeout(() => {
      btn.textContent = originalText;
    }, 2500);
  }
  switch (event.key) {
    case "ArrowLeft" || key === 37:
      btn.style.left = btn.offsetLeft - 10 + "px";
      console.log("ArrowKey: Left, pressed!");
      break;
    case "ArrowUp" || key === 38:
      btn.style.top = btn.offsetTop - 10 + "px";
      console.log("ArrowKey: Up, pressed!");
      break;
    case "ArrowRight" || key === 39:
      btn.style.left = btn.offsetLeft + 10 + "px";
      console.log("ArrowKey: Right, pressed!");
      break;
    case "ArrowDown" || key === 40:
      btn.style.top = btn.offsetTop + 10 + "px";
      console.log("ArrowKey: Down, pressed!");
      break;
  }
  countTimer = null;
  countTimer2 = null;
  // grrr...w. why is it left and top and not left,right,up,down. blegh
});
btn.addEventListener("dblclick", () => {
  // Enter placementMode, beep boop
  console.log("You've correctly activated placementMode after a Double Click.");
  placementMode = true;
  mooVe = true;

  btnGhost = btn.cloneNode(true);
  btnGhost.style.position = "absolute";
  btnGhost.style.pointerEvents = null;
  btnGhost.style.opacity = "0.5";
  btnGhost.style.backgroundColor = "grey";
  btnGhost.style.boxShadow = "0 0 15px 4xp #808080"; //shadow for placement
  btn.style.boxShadow = "0 0 10px 3px #808080"; // shadow for button when db-clicked
  btn.style.cursor = "crosshair"; // visual target for placement
  primConn.appendChild(btnGhost);
  //
});
//
//
// let btnDoubleClick = btn.addEventListener("dblclick");
// function btnDoubleClickF(btnDoubleClick) {
//   function btnDoubleClick(event) {
//     //
//     // Enter placementMode, beep boop
//     console.log(
//       "You've correctly activated placementMode after a Double Click."
//     );
//     placementMode = true;
//     btn.style.boxShadow = "0 0 10px 3px #808080"; // shadow for placement
//     btn.style.cursor = "crosshair"; // visual target for placement
//   }
//   btn.addEventListener("click", (event) => {
//     //
//     if (!placementMode) {
//       console.log("Error, placementMode is off!");
//       // exits the function if the placement mode is off
//       return;
//     }
//     // Acquire the position of the mouse
//     const positionM = primConn.getBoundingClientRect();
//     const xp = event.clientX - positionM - btn.offsetWidth / 2;
//     const yp = event.clientY - positionM - btn.offsetHeight / 2;

//     // Update the position of the button
//     btn.style.left = `${xp}px`;
//     btn.style.top = `${yp}px`;

//     // Exit placementMode, booooop
//     placementMode = false;
//     btn.style.boxShadow = ""; // remove placement shadow
//     btn.style.cursor = "default"; // update cursor
//     console.log("PlacementMode reset.");
//   });
// }
// //
//

primConn.addEventListener("mousemove", (event) => {
  //
  if (!placementMode || (!btnGhost && mooVe)) {
    console.log("Error, placementMode is off!");
    // exits the function if the placement mode is off
    return;
  }
  // Acquire the position of the mouse
  const positionM = primConn.getBoundingClientRect();
  const xp = event.clientX - positionM.left - btn.offsetWidth / 2;
  const yp = event.clientY - positionM.top - btn.offsetHeight / 2;
  //

  let cheese = Math.max(
    0,
    Math.min(xp, primConn.clientWidth - btnGhost.offsetWidth)
  );
  let cheese2 = Math.max(
    0,
    Math.min(yp, primConn.clientHeight - btnGhost.offsetHeight)
  );

  btnGhost.style.left = cheese + "px";
  btnGhost.style.top = cheese2 + "px";
});

primConn.addEventListener("click", (event) => {
  //
  if (!placementMode || !btnGhost) {
    console.log("Error, placementMode is off!");
    // exits the function if the placement mode is off
    return;
  }
  // Acquire the position of the mouse
  const positionM = primConn.getBoundingClientRect();
  const xp = event.clientX - positionM.left - btn.offsetWidth / 2;
  const yp = event.clientY - positionM.top - btn.offsetHeight / 2;

  // Update the position of the button
  btn.style.left = `${xp}px`;
  btn.style.top = `${yp}px`;

  // Exit placementMode, booooop
  placementMode = false;
  primConn.removeChild(btnGhost);
  btn.style.boxShadow = ""; // remove placement shadow
  btn.style.cursor = "default"; // update cursor
  console.log("PlacementMode reset.");
});
