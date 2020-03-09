$(function() {
  // slick();
    burger();
    popup();
    // search();
        const menuBtn = document.querySelector('.nav__btn');
        menuBtn.remove();
        if ( $(window).width() < 993) {
            document.querySelector('.nav__menu').appendChild(menuBtn);
        }else {
            document.querySelector('.nav').appendChild(menuBtn);
        }


    let select = document.querySelector('.select'),
        outputPrice = document.querySelectorAll('.main-price'),
        countLessons,
        monthlyPrice,
        outputLessonPrice = document.querySelector('.lesson-price'),
        outputDescription = document.querySelector('.price-block__for');




    select.addEventListener('change', () => {
        if(select.value === '1'){
            countLessons = 15;
            monthlyPrice = 4500;
            outputPrice.forEach(x => x.innerText = monthlyPrice);
            outputLessonPrice.innerText = monthlyPrice / countLessons;
            outputDescription.innerText = 'Подходит тем, кто умеет управлять автомобилем или мотоциклом';

        }
        if(select.value === '2'){
            countLessons = 20;
            monthlyPrice = 5000;
            outputPrice.forEach(x => x.innerText = monthlyPrice);
            outputLessonPrice.innerText = monthlyPrice / countLessons;
            outputDescription.innerText = 'Подойдет тем, кто быстро обучается новому.';

        } if(select.value === '3'){
            countLessons = 30;
            monthlyPrice = 6000;
            outputPrice.forEach(x => x.innerText = monthlyPrice);
            outputLessonPrice.innerText = monthlyPrice / countLessons;
            outputDescription.innerText = 'Подойдет тем, у кого нет опыта вождения автомобиля.';


        }
        let selectItem = document.querySelectorAll('.select-item');
        selectItem.forEach(x => {
            x.classList.remove('select-item--active');
            if(x.innerText === String(countLessons)){
                x.classList.add('select-item--active');
            }
        })
    });
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});

function maskInput() {
    let input = document.querySelector('#phone');
    let maskOptions = {
        mask: '+{38} (000) 000-00-00'
    };
    let mask = IMask(input, maskOptions);
}
maskInput();
