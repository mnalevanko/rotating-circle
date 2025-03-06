document.addEventListener("DOMContentLoaded", () => {
  const circle = document.getElementById("circle");
  const leftBtn = document.querySelector(".btn-left");
  const rightBtn = document.querySelector(".btn-right");
  let rotation = 0; // current rotation angle in degrees

  function updateRotation(newRotation) {
    rotation = newRotation;
    // Rotate the circle
    circle.style.transform = `rotate(${rotation}deg)`;

    // Counter rotate the icons to keep them upright
    const icons = circle.querySelectorAll("i");
    icons.forEach((icon) => {
      icon.style.transform = `rotate(${-rotation}deg)`;
    });
  }

  // Rotate left: subtract 180 degrees
  leftBtn.addEventListener("click", () => {
    updateRotation(rotation - 180);
  });

  // Rotate right: add 180 degrees
  rightBtn.addEventListener("click", () => {
    updateRotation(rotation + 180);
  });
});
