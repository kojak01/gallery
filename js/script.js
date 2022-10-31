const THUMBNAILS = document.querySelectorAll('.thumbnail img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMG = document.querySelector('.popup__img');
const ARROW_LEFT = document.querySelector('.popup__arrow--left');
const ARROW_RIGHT = document.querySelector('.popup__arrow--right');

let currentImgIndex;

const showNextImg = () => {
  if(currentImgIndex === THUMBNAILS.length - 1) { // we point to the last element of the array
    currentImgIndex = 0;
  } else {
    currentImgIndex = currentImgIndex + 1; // => currentImgIndex = currentImgIndex + 1;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const showPreviousImg = () => {
  if(currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length -1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closePopup = () => {
  POPUP.classList.add('hidden');
};

THUMBNAILS.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', (e) => {
    POPUP.classList.remove('hidden');
    POPUP_IMG.src = e.target.src;
    currentImgIndex = index;
    //alert(currentImgIndex);
  });
});

 POPUP_CLOSE.addEventListener('click', closePopup);

ARROW_RIGHT.addEventListener('click', showNextImg);
//   if(currentImgIndex === THUMBNAILS.length - 1) { // we point to the last element of the array
//     currentImgIndex = 0;
//   } else {
//     currentImgIndex = currentImgIndex + 1; // => currentImgIndex = currentImgIndex + 1;
//   }
//   POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
// });

ARROW_LEFT.addEventListener('click', showPreviousImg);
//   if(currentImgIndex === 0) {
//     currentImgIndex = THUMBNAILS.length -1;
//   } else {
//     currentImgIndex--;
//   }
//   POPUP_IMG.src = THUMBNAILS[currentImgIndex].src; // for the new element, we assign the appropriate src
// });

document.addEventListener('keydown', (e) => { // important (code and keycode)
  if(e.code === "ArrowRight" || e.keyCode === 39) {
    showNextImg();
  }
  if(e.code === "ArrowLeft" || e.keyCode === 37) {
    showPreviousImg();
  }
  if(e.code === "Escape" || e.keyCode === 27) {
    closePopup();
  }
  console.log(e);
});

