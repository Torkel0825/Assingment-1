//
//
//
//

// const btn = document.querySelector("#btn");
// const primConn = document.querySelector(".primaryBox");
// const mouseEnter = btn.addEventListener("mouseenter");
// const mouseMove = btn.addEventListener("mousemove");
// const doubleClick = btn.addEventListener("dblclick");
// const mouseLeave = btn.addEventListener("mouseleave");

//
// let placementMode = false;
// let countTimer;
// let btnGhost = null;
// let originalText;

//
// btn.addEventListener("mouseover", mouseEnterF());

// function mouseEnterF() {
//   btn.addEventListener("mouseover", () => {
//     clearTimeout(countTimer);
//     originalText = btn.textContent;

//     btn.textContent = "Hello there!";
//     console.log("Mouse detected on button.");
//   });
//   btn.addEventListener("mouseleave", mouseLeaveF());
// }

// function mouseLeaveF() {
//   console.log("Mouse left the button.");
//   btn.textContent =
//     "Double-click to move with mouse, click once, then use arrow-keys:3";
//   countTimer = setTimeout(() => {
//     btn.textContent = originalText;
//     console.log("Counter off.");
//   }, 2000);
// }

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
