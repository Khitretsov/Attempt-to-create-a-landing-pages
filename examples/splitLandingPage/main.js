const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

/*  Переменная ниже возьмёт значение первого встреченного
элемента, имеющего в названии слово "split" */ /*
const split = document.querySelector('.split'); 
console.log(split);
*/

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});
