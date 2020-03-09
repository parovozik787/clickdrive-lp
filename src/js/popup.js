function popup() {
   let button = document.querySelectorAll(".start-to-learn"),
       popup = document.querySelector('.popup-section'),
       popupBg = document.querySelector('.popup-bg');
   button.forEach(x => {
      x.addEventListener('click', () =>{
         popup.classList.add('popup-open');
      })
   });
   popupBg.addEventListener('click', () => {
      popup.classList.remove('popup-open')
   })
}