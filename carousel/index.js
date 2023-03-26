const img = document.querySelector('.image-wraper');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

const imgs = document.querySelectorAll('.image');

let current = 0;

let interval = setInterval(start, 2000);

function start (){
    current++

    change ();
}

function change(){
    if (current > imgs.length -1){
        current = 0;
    }
    else if (current < 0) {
        current = imgs.length -1;
    }
    img.style.transform = `translateX(${-current*500}px)`;
}

function stopInterval (){
    clearInterval(interval);
    interval = setInterval(start, 2000);
}

rightBtn.addEventListener('click', ()=>{
    current++;

    change();
    stopInterval();
})

leftBtn.addEventListener('click', ()=>{
    current--;

    change();
    stopInterval();
})

img.addEventListener('mouseenter',()=> clearInterval(interval));
img.addEventListener('mouseleave', ()=> stopInterval());




