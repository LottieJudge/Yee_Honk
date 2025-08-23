// using getBounding to understand where the duck is 

const hatElem = document.querySelector('#animate img');
const duckElem = document.getElementById('duck');

function getRect(elem) {
  return elem.getBoundingClientRect();
}

function collisionDetection(hat, duck) {
  return (
    hat.x < duck.x + duck.width &&
    hat.x + hat.width > duck.x &&
    hat.y < duck.y + duck.height &&
    hat.y + hat.height > duck.y
  );
}   

export function checkCollisionAndShow() {
  console.log('Checking collision..')
  const hatRect = getRect(hatElem);
  const duckRect = getRect(duckElem);
  if (collisionDetection(hatRect, duckRect)) {
    showYeeHaw();
  } else {
    hideYeeHaw();
  }
}

function showYeeHaw() {
  let yeeHaw = document.getElementById('yee-haw');
  if (!yeeHaw) {
    yeeHaw = document.createElement('div');
    yeeHaw.id = 'yee-haw';
    yeeHaw.textContent = 'YEE HAW';
    yeeHaw.style.position = 'fixed';
    yeeHaw.style.top = '50%';
    yeeHaw.style.left = '50%';
    yeeHaw.style.transform = 'translate(-50%, -50%)';
    yeeHaw.style.fontSize = '4em';
    yeeHaw.style.color = '#fff';
    yeeHaw.style.background = '#ff9be1';
    yeeHaw.style.padding = '0.5em 1em';
    yeeHaw.style.borderRadius = '1em';
    yeeHaw.style.zIndex = '1000';
    document.body.appendChild(yeeHaw);
  }
}

function hideYeeHaw() {
  const yeeHaw = document.getElementById('yee-haw');
  if (yeeHaw) yeeHaw.remove();
}


