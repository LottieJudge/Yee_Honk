// using getBounding to understand where the duck is 

const hatElem = document.querySelector('#animate img');
const duckElem = document.getElementById('duck');

function getRect(elem) {
  return elem.getBoundingClientRect();
}

function collisionDetection(hat, duck) {
  const hatCenterX = hat.x + hat.width / 2;
  const hatCenterY = hat.y + hat.height / 2; 

  const headStart = duck.x + duck.width * 0.2;
  const headEnd = duck.x + duck.width * 0.4;

  return (
    hatCenterX >= headStart &&
    hatCenterX <= headEnd &&
    hatCenterY >= duck.y &&
    hatCenterY <= duck.y + duck.height
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
    yeeHaw.style.fontSize = '8em';
    yeeHaw.style.color = '#fff';
    yeeHaw.style.zIndex = '1000';
    document.body.appendChild(yeeHaw);
  }
}

function hideYeeHaw() {
  const yeeHaw = document.getElementById('yee-haw');
  if (yeeHaw) yeeHaw.remove();
}


