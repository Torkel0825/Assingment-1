//
//
//
//

const btn = document.querySelector("#btn");
const primConn = document.querySelector(".primaryBox");
// const mouseEnter = btn.addEventListener("mouseenter");
// const mouseMove = btn.addEventListener("mousemove");
// const doubleClick = btn.addEventListener("dblclick");

let placementMode = false;
let countTimer;
let btnGhost = null;

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
  // When the arrowKeys are pressed, the button is moved accordingly
  let key = event.key;

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
  // grrr...w. why is it left and top and not left,right,up,down. blegh
});

btn.addEventListener("dblclick", movingButton());

function movingButton() {
  // Enter placementMode, beep boop
  console.log("You've correctly activated placementMode after a Double Click.");
  placementMode = true;

  btnGhost = btn.cloneNode(true);
  btnGhost.style.position = "absolute";
  btnGhost.style.pointerEvents = "none";
  btnGhost.style.opacity = "0.5";
  btnGhost.style.backgroundColor = "grey";
  btnGhost.style.boxShadow = "0 0 15px 4px #808080"; //shadow for placement
  btn.style.boxShadow = "0 0 10px 3px #808080"; // shadow for button when db-clicked
  btn.style.cursor = "crosshair"; // visual target for placement
  document.addEventListener("mousemove", (e) => {
    const xp = e.clientX;
    const yp = e.clientY;

    btnGhost.style.left = xp;
    btnGhost.style.top = yp;
  });
  primConn.appendChild(btnGhost);

  //
  if (!placementMode || !btnGhost) {
    console.log("Error, placementMode is off!");
    // exits the function if the placement mode is off
    return;
  } else {
    console.log("MouseMove initialized.");
    primConn.addEventListener("mousemove", ghostButton());
  }
}
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
function ghostButton(event) {
  const positionM = primConn.getBoundingClientRect();
  const xp = event.clientX - positionM.left - btn.offsetWidth / 2;
  const yp = event.clientY - positionM.top - btn.offsetHeight / 2;
  //
  btnGhost.style.left =
    Math.max(0, Math.min(xp, primConn.clientWidth - btnGhost.offsetWidth)) +
    "px";
  btnGhost.style.top =
    Math.max(0, Math.min(yp, primConn.clientHeight - btnGhost.offsetHeight)) +
    "px";
}

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
  btn.style.boxShadow = ""; // remove placement shadow
  btn.style.cursor = "default"; // update cursor
  btnGhost.remove();
  btnGhost = null;
  console.log("PlacementMode reset.");
});
