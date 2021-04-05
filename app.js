const drums = document.querySelectorAll('.drum');

const animate = (key) => {
  const selector = `.drum-${key}`;
  const drum = document.querySelector(selector);

  drum.classList.add('pressed');

  setTimeout(() => {
    drum.classList.remove('pressed');
  }, 300);
};

const handleDrumClick = (event) => {
  const key = event.target.innerHTML;

  animate(key);
};

drums.forEach((drum) => {
  drum.addEventListener('click', handleDrumClick);
});
