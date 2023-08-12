
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on ('timeupdate', throttle(timeChecker,1000));

function timeChecker (data){
    localStorage.setItem("KURRENT TIME", data.seconds);};

    const videoCurrentTime = localStorage.getItem("KURRENT TIME")||0;

    player.setCurrentTime(videoCurrentTime);