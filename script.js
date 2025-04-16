let currentRotation = 0;
const room = document.getElementById("room");
const walls = document.querySelectorAll('.wall');  // Select all walls

function updateRotation() {
  // Rotate the room
  room.style.transform = `translate(-50%, -50%) rotateY(${currentRotation}deg)`;

  // Reset visibility for all walls
  walls.forEach(wall => {
    wall.style.visibility = 'visible';
  });

  // Determine which wall should be hidden based on rotation
  const rotation = currentRotation % 360;

  if (rotation === 0) {
    // North wall is in front, hide it
    document.querySelector('.n').style.visibility = 'hidden';
  } else if (rotation === 90) {
    // East wall is in front, hide it
    document.querySelector('.w').style.visibility = 'hidden';
  } else if (rotation === 180) {
    // South wall is in front, hide it
    document.querySelector('.s').style.visibility = 'hidden';
  } else if (rotation === 270) {
    // West wall is in front, hide it
    document.querySelector('.e').style.visibility = 'hidden';
  }

  // Handle the visibility of the back wall
  switch (rotation) {
    case 0:
      // When rotation is at 0, hide the North wall (nearest)
      document.querySelector('.n').style.visibility = 'hidden';
      break;
    case 90:
      // When rotation is at 90, hide the East wall (nearest)
      document.querySelector('.w').style.visibility = 'hidden';
      break;
    case 180:
      // When rotation is at 180, hide the South wall (nearest)
      document.querySelector('.s').style.visibility = 'hidden';
      break;
    case 270:
      // When rotation is at 270, hide the West wall (nearest)
      document.querySelector('.e').style.visibility = 'hidden';
      break;
  }
}

document.getElementById("rotateLeft").addEventListener("click", () => {
  currentRotation -= 90;
  updateRotation();
});

document.getElementById("rotateRight").addEventListener("click", () => {
  currentRotation += 90;
  updateRotation();
});
