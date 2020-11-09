const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const seconds = 720*3600;
function getTime() {
  

  seconds = seconds-1;
  
  clockTitle.innerText = `${seconds/3600 < 10 ? `0${seconds/3600}` : `${seconds/3600}`}:${
    seconds%3600/60 < 10 ? `0${seconds%3600/60}` : `${seconds%3600/60}`
  }:${seconds%3600%60 < 10 ? `0${seconds%3600%60}` : `${seconds%3600%60}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
