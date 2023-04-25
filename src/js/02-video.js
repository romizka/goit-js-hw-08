import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);

const saveTimeDelay = throttle(saveTime, 1000);

const getCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(getCurrentTime);
player.on('timeupdate', saveTimeDelay);
