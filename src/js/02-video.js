import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player('vimeo-player');
player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds)
}
setCurrentTime()
function setCurrentTime(){
    if(!localStorage.getItem(CURRENT_TIME)){
        return
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME))
}


