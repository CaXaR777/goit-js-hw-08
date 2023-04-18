import Vimeo from "@vimeo/player";

// import  throttle from 'lodash';
const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);
import throttle from "lodash.throttle";

const currentTime = "videoplayer-current-time";

// player.on('timeupdate', function(data) {

// localStorage.setItem(currentTime, JSON.stringify(data));
//     // data is an object containing properties specific to that event
//     // console.log(data);

// });
player.on(
  "timeupdate",
  throttle((data) => {
    localStorage.setItem(currentTime, JSON.stringify(data));
    console.log(data);
  }, 1000)
);

function resumeVideoPlay() {
  if (JSON.parse(localStorage.getItem(currentTime)) === null) {
    return;
  }
  const videoStop = JSON.parse(localStorage.getItem(currentTime)).seconds;
  if (videoStop) {
    player
      .setCurrentTime(videoStop)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case "RangeError":
            break;

          default:
            break;
        }
      });
  }
}
resumeVideoPlay();
