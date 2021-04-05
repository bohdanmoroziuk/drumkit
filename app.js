let audioVolume = 0.6;

let autoMusicIntervalId = null;
let autoMusicOn = false;

const drums = document.querySelectorAll('.drum');

const volumeSlider = document.querySelector('#volume');

const startAutoMusicButton = document.querySelector('#start-auto-music');

const keys = Array.from(drums).map((drum) => drum.innerHTML);

const handleVolumeSliderInput = (event) => {
  audioVolume = event.target.value / 100;
};

const animate = (key) => {
  const selector = `.drum-${key}`;
  const drum = document.querySelector(selector);

  drum.classList.add('pressed');

  setTimeout(() => {
    drum.classList.remove('pressed');
  }, 300);
};

const playMusic = (path) => {
  const audio = new Audio(path);
  
  audio.volume = audioVolume;
  audio.play();
};

const makeSound = (key) => {
  const soundFilePath = `sounds/${key}.mp3`;

  playMusic(soundFilePath);
};

const handleDrumClick = (event) => {
  const key = event.target.innerHTML;

  animate(key);
  makeSound(key);
};

const startAutoMusic = () => {
  autoMusicIntervalId = setInterval(() => {
    const key = keys[Math.floor(Math.random() * keys.length)];

    animate(key);
    makeSound(key);
  }, 300);
};

const handleStartAutoMusicButtonClick = () => {
  if (autoMusicOn) {
    clearInterval(autoMusicIntervalId);
    startAutoMusicButton.innerHTML = 'Start Auto Music';
    startAutoMusicButton.classList.remove('pressed');
    autoMusicOn = false;
    return;
  }

  startAutoMusicButton.innerHTML = 'Stop Auto Music';
  startAutoMusicButton.classList.add('pressed');
  autoMusicOn = true;
  startAutoMusic();
}; 

drums.forEach((drum) => {
  drum.addEventListener('click', handleDrumClick);
});

volumeSlider.addEventListener('input', handleVolumeSliderInput);

startAutoMusicButton.addEventListener('click', handleStartAutoMusicButtonClick);
