let display = document.querySelector(".display");
let decrease = document.querySelector('.btnDec');
let reset = document.querySelector('.btnReset');
let increase = document.querySelector('.btnInc');
let num = 0;

decrease.addEventListener('click', decreaseFunction)

function decreaseFunction(){
    num -= 1;
    display.innerHTML = num;
}

increase.addEventListener('click', increaseFunction)

function increaseFunction(){
    num += 1;
    display.innerHTML = num;
}
reset.addEventListener('click', resetFunction)

function resetFunction(){
    num = 0;
    display.textContent = num;
}