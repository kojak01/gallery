let activeSlideNumber = 1;

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

let activeElementHidden = () => {
  let activeElement = document.querySelector('.active');
  activeElement.classList.remove('active');
};

let showElement = (slideNumber) => {
  activeElementHidden();
  document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
  if(activeSlideNumber === 3) {
    activeSlideNumber = 1;
  } else {
    activeSlideNumber = activeSlideNumber + 1;
  }
  showElement(activeSlideNumber);
};

let showPreviousSlide = () => {
  if(activeSlideNumber === 1) {
    activeSlideNumber = 3;
  } else {
    activeSlideNumber = activeSlideNumber - 1;
  }
  showElement(activeSlideNumber);
};

for(let i = 1; i <= 3; i++) {
  let showSlideI = () => {
    activeSlideNumber = i;
    showElement(i);
  };
  document.querySelector('#dot'+i).addEventListener('click', showSlideI);
}


arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);