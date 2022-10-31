const thumbNails = document.querySelectorAll('.thumbnail img');
console.log(thumbNails);

thumbNails.forEach((thumbnail) =>{
  thumbnail.addEventListener('click', () => {
    console.log(thumbnail);
  });
});