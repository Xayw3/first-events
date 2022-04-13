/* eslint-disable no-prototype-builtins */
/* eslint-disable no-cond-assign */

// Task 1

const yellowButton = document.querySelector<HTMLButtonElement>('.js-yellow-btn');
const yellowBox = document.querySelector<HTMLDivElement>('.js-box-yellow');

yellowButton.addEventListener('click', () => {
    yellowBox.style.backgroundColor = 'yellow';
});

// Task 2

const successButton = document.querySelector<HTMLButtonElement>('.js-success-btn');
const successBox = document.querySelector<HTMLDivElement>('.js-success-box');

successButton.addEventListener('click', () => {
    successBox.innerText = 'success';
});

// Task 3

const hiddenButton = document.querySelector<HTMLButtonElement>('.js-hidden-btn');
const hiddenBox = document.querySelector<HTMLDivElement>('.js-hidden-box');

hiddenButton.addEventListener('click', () => {
    hiddenBox.classList.add('hidden');
});

// Task 4

const toggleButton = document.querySelector<HTMLButtonElement>('.js-hidden-button--toggle');
const toggleBox = document.querySelector<HTMLDivElement>('.js-hidden-box--toggle');

toggleButton.addEventListener('click', () => {
    toggleBox.classList.toggle('hidden');
});

// Task 5

const randomButton = document.querySelector<HTMLButtonElement>('.js-random-button');
const randomBox = document.querySelector<HTMLDivElement>('.js-random-box');

const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
const randomColor = Math.floor(Math.random() * (colors.length));
console.log(randomColor);

randomButton.addEventListener('click', () => {
    const takeRandom = () => {
        randomBox.classList.add(colors[Math.floor(Math.random() * (colors.length))]);
    };
    if (randomBox.classList.contains('color-1')) {
        randomBox.classList.remove('color-1');
        takeRandom();
    } else if (randomBox.classList.contains('color-2')) {
        randomBox.classList.remove('color-2');
        takeRandom();
    } else if (randomBox.classList.contains('color-3')) {
        randomBox.classList.remove('color-3');
        takeRandom();
    } else if (randomBox.classList.contains('color-4')) {
        randomBox.classList.remove('color-4');
        takeRandom();
    } else if (randomBox.classList.contains('color-5')) {
        randomBox.classList.remove('color-5');
        takeRandom();
    } else {
        takeRandom();
    }
});

// Task 6

const timerButton = document.querySelector<HTMLButtonElement>('.js-timer-button');
const timerBox = document.querySelector<HTMLDivElement>('.js-timer-box');

timerButton.addEventListener('click', () => {
    let number = 0;
    const interval = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        number++;
        timerBox.innerText = number.toString();
        if (number === 10) {
            clearInterval(interval);
        }
    }, 3000);
});

// Task 7

const colorsButton = document.querySelector<HTMLButtonElement>('.js-button-colors');
const allBoxes = document.querySelectorAll<HTMLDivElement>('.box');
const bodyEl = document.querySelector<HTMLBodyElement>('body');

colorsButton.addEventListener('click', () => {
    allBoxes.forEach((boxEl: HTMLDivElement) => {
        boxEl.style.backgroundColor = '#18D5E1';
    });
    bodyEl.style.backgroundColor = '#000000';
});

// Task 8

yellowBox.addEventListener('mouseenter', () => {
    yellowBox.classList.add('color-5');
});

yellowBox.addEventListener('mouseleave', () => {
    yellowBox.classList.remove('color-5');
});
