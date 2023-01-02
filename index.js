const playButton = document.querySelector('.btn-secondary');
const video = document.querySelector('.background-video');
const preloader = document.querySelector('.preloader');

playButton.addEventListener('click', () => {
    const buttonIEl = document.querySelector('.fa-solid');
    if (playButton.classList.contains('pause')) {
        playButton.classList.remove('pause');
        video.play();
        buttonIEl.classList.remove('fa-play');
        buttonIEl.classList.add('fa-pause');
    } else {
        playButton.classList.add('pause');
        video.pause();
        buttonIEl.classList.remove('fa-pause');
        buttonIEl.classList.add('fa-play');
    }
});

window.addEventListener('load', () => {
    preloader.style.zIndex = '-2';
});