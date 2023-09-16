
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on ('timeupdate', throttle(timeChecker,5000));

function timeChecker (data){
    localStorage.setItem("videoplayer-current-time", data.seconds);};

    const videoCurrentTime = localStorage.getItem("videoplayer-current-time")||0;

    player.setCurrentTime(videoCurrentTime);