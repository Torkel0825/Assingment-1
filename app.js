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
  console.log("Mouse entered button, counter reset.");
});

btn.addEventListener("mouseleave", () => {
  // When the mouse moves away from the button after hovering over it
  // Sets a timer that changes the text to "USE..", then afer 3000 miliseconds, reverts back to html code
  console.log("Mouse left the button, counter activated, 1.2s");
  btn.textContent = "CLICK ONCE, THEN USE ARROWKEYS!";
  //   console.log();
  countTimerr = setTimeout(() => {
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
  if (placementMode) {
    console.log("You have placementMode active, error");
    return;
  }
  // When the arrowkeys are pressed, the button is moved accordingly
  let key = event.key;

  switch (event.key) {
    case "ArrowLeft" || key === 37:
      btn.style.left = btn.offsetLeft - 10 + "px";
      console.log("Arrowkey: Left, pressed!");
      break;
    case "ArrowUp" || key === 38:
      btn.style.top = btn.offsetTop - 10 + "px";
      console.log("Arrowkey: Up, pressed!");
      break;
    case "ArrowRight" || key === 39:
      btn.style.left = btn.offsetLeft + 10 + "px";
      console.log("Arrowkey: Right, pressed!");
      break;
    case "ArrowDown" || key === 40:
      btn.style.top = btn.offsetTop + 10 + "px";
      console.log("Arrowkey: Down, pressed!");
      break;
  }
  // grrr...w. why is it left and top and not left,right,up,down. blegh
});
// btn.addEventListener("dblclick", () => {
//   // Enter placementmode, beep boop
//   console.log("You've correctly activated placementMode after a Double Click.");
//   placementMode = true;
//   btn.style.boxShadow = "0 0 10px 3px #808080"; // shadow for placement
//   btn.style.cursor = "crosshair"; // visual target for placement
//
//
// });
// primConn.addEventListener("click", (event) => {
//   //
//   if (!placementMode) {
//     console.log("Error, placementMode is off!");
//     // exits the function if the placement mode is off
//     return;
//   }
//   // Aquire the position of the mouse
//   const positionM = primConn.getBoundingClientRect();
//   const xp = event.clientX - positionM.left - btn.offsetWidth / 2;
//   const yp = event.clientY - positionM.top - btn.offsetHeight / 2;

//   // Update the position of the button
//   btn.style.left = `${xp}px`;
//   btn.style.top = `${yp}px`;

//   // Exit placementmode, booooop
//   placementMode = false;
//   btn.style.boxShadow = ""; // remove placement shadow
//   btn.style.cursor = "default"; // update cursor
//   console.log("PlacementMode reset.");
// });

let btnDoubleClick = btn.addEventListener("dblclick");
function btnDoubleClickF(btnDoubleClick) {
  function btnDoubleClick(event) {
    //
    // Enter placementmode, beep boop
    console.log(
      "You've correctly activated placementMode after a Double Click."
    );
    placementMode = true;
    btn.style.boxShadow = "0 0 10px 3px #808080"; // shadow for placement
    btn.style.cursor = "crosshair"; // visual target for placement
  }
  primConn.addEventListener("click", (event) => {
    //
    if (!placementMode) {
      console.log("Error, placementMode is off!");
      // exits the function if the placement mode is off
      return;
    }
    // Aquire the position of the mouse
    const positionM = primConn.getBoundingClientRect();
    const xp = event.clientX - positionM.left - btn.offsetWidth / 2;
    const yp = event.clientY - positionM.top - btn.offsetHeight / 2;

    // Update the position of the button
    btn.style.left = `${xp}px`;
    btn.style.top = `${yp}px`;

    // Exit placementmode, booooop
    placementMode = false;
    btn.style.boxShadow = ""; // remove placement shadow
    btn.style.cursor = "default"; // update cursor
    console.log("PlacementMode reset.");
  });
}
