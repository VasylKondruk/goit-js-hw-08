import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);

const time = localStorage.getItem(LOCALSTORAGE_KEY);

if (time) {
  player.setCurrentTime(time);
}

function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
