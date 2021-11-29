let catPosition = 0;
let isCatMovingForwards = true;

// Stored the Node
const dancingCat = document.querySelector("img.dancing-cat");
// set position to absolute
dancingCat.style.position = "absolute";
// Moved the cat to the left
dancingCat.style.left = "0px";

// function catWalk() {
//   if (catPosition >= window.innerWidth - dancingCat.clientWidth) {
//     catPosition = 0;
//   } else {
//     // add 10 to cat position
//     catPosition += 10;
//   }
//   // changes the amount in dancingCat.style.left based on the cats position
//   dancingCat.style.left = `${catPosition}px`;
//   //   console.log(dancingCat.clientWidth);
// }

// Length of the cat
// console.log(dancingCat.clientWidth);

const moveCat = () => {
  if (isCatMovingForwards === true) {
    catPosition += 10;
  } else {
    catPosition -= 10;
  }
  // changes the amount in dancingCat.style.left based on the cats position
  dancingCat.style.left = `${catPosition}px`;
};

const setCatDirection = () => {
  if (catPosition >= window.innerWidth - dancingCat.clientWidth) {
    //   Setting isCatMovingForwards to false when it gets to the right edge of the screen
    isCatMovingForwards = false;
  } else if (catPosition === 0) {
    //   when we hit the left edge of the screen go forwards
    isCatMovingForwards = true;
  }
};

const setCatImageOrientation = () => {
  if (isCatMovingForwards === false) {
    //   Flips cat backwards
    dancingCat.style.transform = "scaleX(-1)";
  } else {
    //   Flip cat forwards
    dancingCat.style.transform = "scaleX(1)";
  }
};

const catWalk = () => {
  setCatDirection();
  setCatImageOrientation();
  moveCat();
};

// Every 50ms call catWlak
setInterval(catWalk, 50);
