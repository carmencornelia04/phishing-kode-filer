'use strict';

function fadeInSection(section) {
    section.classList.remove('fade-in'); 
    void section.offsetWidth; 
    section.classList.add('fade-in');
}

const startButton = document.getElementById('start');
const frontPage = document.getElementById('front-page');
const content1 = document.getElementById('content-1');

const nextButton = document.getElementById('next');
const content2 = document.getElementById('content-2');

startButton.addEventListener('click', function() {
    frontPage.classList.add('hidden');
    content1.classList.remove('hidden');
    fadeInSection(content1);
});

nextButton.addEventListener('click', function() {
    content1.classList.add('hidden');
    content2.classList.remove('hidden');
    fadeInSection(content2);
});

const buttonA = document.getElementById('A');
const buttonB = document.getElementById('B');
const buttonC = document.getElementById('C');

const endA = document.getElementById('end-A');
const endB = document.getElementById('end-B');
const endC = document.getElementById('end-C');

buttonA.addEventListener('click', function() {
    localStorage.setItem('userChoice', 'A');
    content2.classList.add('hidden');
    endA.classList.remove('hidden'); 
    fadeInSection(endA);
});

buttonB.addEventListener('click', function() {
    localStorage.setItem('userChoice', 'B');
    content2.classList.add('hidden');
    endB.classList.remove('hidden'); 
    fadeInSection(endB);
});

buttonC.addEventListener('click', function() {
    localStorage.setItem('userChoice', 'C');
    content2.classList.add('hidden');
    endC.classList.remove('hidden');
    fadeInSection(endC);
});

const nextEndA = document.getElementById('next-end-continued-A');
const nextEndB = document.getElementById('next-end-continued-B');
const nextEndC = document.getElementById('next-end-continued-C');

const endContinuedA = document.getElementById('end-continued-A');
const endContinuedB = document.getElementById('end-continued-B');
const endContinuedC = document.getElementById('end-continued-C');

nextEndA.addEventListener('click', function() {
    endA.classList.add('hidden');
    endContinuedA.classList.remove('hidden');
    fadeInSection(endContinuedA);
});

nextEndB.addEventListener('click', function() {
    endB.classList.add('hidden');
    endContinuedB.classList.remove('hidden');
    fadeInSection(endContinuedB);
});

nextEndC.addEventListener('click', function() {
    endC.classList.add('hidden');
    endContinuedC.classList.remove('hidden');
    fadeInSection(endContinuedC);
});

const startOverButtons = document.querySelectorAll('.start-over');

startOverButtons.forEach(button => {
    button.addEventListener('click', function() {
        endContinuedA.classList.add('hidden');
        endContinuedB.classList.add('hidden');
        endContinuedC.classList.add('hidden');

        frontPage.classList.remove('hidden');
        fadeInSection(frontPage);
    });
});