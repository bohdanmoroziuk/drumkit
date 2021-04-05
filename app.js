const drums = document.querySelectorAll('.drum');

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

drums.forEach((drum) => {
  drum.addEventListener('click', handleDrumClick);
});
