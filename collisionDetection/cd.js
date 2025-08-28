// using getBounding to understand where the duck is 

const hatElem = document.querySelector('#animate img');
const duckElem = document.getElementById('duck');

let yeeHawVisible = false;
let wompWompVisible = false;
let scoreCount = 0

function getRect(elem) {
  return elem.getBoundingClientRect();
}

function collisionDetection(hat, duck) {
  const hatCenterX = hat.x + hat.width / 2;
  const hatCenterY = hat.y + hat.height / 2; 

  const headStart = duck.x + duck.width * 0.19;
  const headEnd = duck.x + duck.width * 0.37;

  return (
    hatCenterX >= headStart &&
    hatCenterX <= headEnd &&
    hatCenterY >= duck.y &&
    hatCenterY <= duck.y + duck.height
  );
}


export function checkCollisionAndShow() {
  const hatRect = getRect(hatElem);
  const duckRect = getRect(duckElem);

  if (collisionDetection(hatRect, duckRect)) {
    if (!yeeHawVisible) showYeeHaw();
    if (wompWompVisible) hideWompWomp();
  } else {
    if (!wompWompVisible) showWompWomp();
    if (yeeHawVisible) hideYeeHaw();
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
    yeeHaw.style.color = '#ff13f0';
    yeeHaw.style.zIndex = '1000';
    document.body.appendChild(yeeHaw);
  }
  yeeHaw.onclick = hideYeeHaw;
  yeeHawVisible = true;
}

function showWompWomp() {
  let wompWomp = document.getElementById('womp-womp');
  if (!wompWomp) {
    wompWomp = document.createElement('div');
    wompWomp.id = 'womp-womp';
    wompWomp.textContent = 'WOMP WOMP';
    wompWomp.style.position = 'fixed';
    wompWomp.style.top = '50%';
    wompWomp.style.left = '50%';
    wompWomp.style.transform = 'translate(-50%, -50%)';
    wompWomp.style.fontSize = '8em';
    wompWomp.style.color = '#35ff00';
    wompWomp.style.zIndex = '1000';
    document.body.appendChild(wompWomp);
  }
  wompWomp.onclick = hideWompWomp;
  wompWompVisible = true;
}

function hideYeeHaw() {
  const yeeHaw = document.getElementById('yee-haw');
  if (yeeHaw) yeeHaw.remove();
  yeeHawVisible = false;
}

function hideWompWomp() {
  const wompWomp = document.getElementById('womp-womp');
  if (wompWomp) wompWomp.remove();
  wompWompVisible = false;
}

document.addEventListener('click', function () {
  if (yeeHawVisible) hideYeeHaw();
  if (wompWompVisible) hideWompWomp();
});

function theScore(){
  let score = document.getElementById('score')
    score = document.createElement('div');
    score.id = 'score';
    score.textContent = scoreCount
    score.style.position = 'fixed';
    score.style.top = '50%';
    score.style.left = '50%';
    score.style.transform = 'translate(-50%, -50%)';
    score.style.fontSize = '8em';
    score.style.color = '#ff13f0';
    score.style.zIndex = '1000';
    document.body.appendChild(score);
}