const video = $('#video-html');
const playerContainer = $('.player');

let eventsInit = () => {
    $('.player__start').click(e => {
        e.preventDefault();

        if (playerContainer.hasClass('paused')) {
            video[0].pause();
            playerContainer.removeClass('active');
            playerContainer.removeClass('paused');
        } else {
            video[0].play();
            playerContainer.addClass('active');
            playerContainer.addClass('paused');
        }
    });

    $('.player__playback').click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (video[0].duration / 100) * newButtonPositionPercent;

        $('.player__playback-button').css({
            left: `${newButtonPositionPercent}%`,
            marginLeft: '-7px'
        });
        $('.player__playback-timeBar').css({
            width: `${newButtonPositionPercent}%`
        })

        video[0].currentTime = newPlaybackPositionSec; 
    });

    $('.player__splash').click(e => {
        video[0].play();
        playerContainer.addClass('active');
        playerContainer.addClass('paused');
    });
}

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime % 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes}:${seconds}`;
}

$( "document" ).ready(function() {
    const playerSize = $('.player-section__container');
    video[0].width = playerSize.width();
    video[0].height = playerSize.height();
});

video.ready(function() {
    let interval;
    const durationSec = video[0].duration;

    $('.player__duration-estimate').text(formatTime(durationSec));

    if (typeof interval != 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = video[0].currentTime;
        const completedPercent = (completedSec / durationSec) * 100;

        $('.player__playback-button').css({
            left: `${completedPercent}%`
        });
        $('.player__playback-timeBar').css({
            width: `${completedPercent}%`
        });
        $('.player__duration-completed').text(formatTime(completedSec));

        if (completedSec == durationSec) {
            video[0].load();
            playerContainer.removeClass('active');
            playerContainer.removeClass('paused');
        }

    }, 1000); 
});

eventsInit();