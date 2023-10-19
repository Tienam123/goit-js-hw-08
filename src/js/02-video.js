import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_CURRENT_TIME = 'videoplayer-current-time';

console.log();

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
if (localStorage.getItem(KEY_CURRENT_TIME)) {
  const { seconds } = JSON.parse(localStorage.getItem(KEY_CURRENT_TIME))
  player.setCurrentTime(seconds)
}
const onPlay = function(data) {
  localStorage.setItem(KEY_CURRENT_TIME, JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

