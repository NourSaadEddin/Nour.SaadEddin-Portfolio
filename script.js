
 AOS.init();


// Navbar
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY < 200) {
        header.classList.add('navbar');
    } else {
        header.classList.remove('navbar');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//hero// typing
const dynamicText = document.querySelector("h1 span");
const words = [ "Programer" , "Developer","UI UX designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

// Skills
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

// Portfolio
const list = document.querySelectorAll('.list');
const itemBox = document.querySelectorAll('.item-box');

list.forEach((elem) => {
    elem.addEventListener('click', function () {
        list.forEach((elem) => {
            elem.classList.remove('active');
        });
        this.classList.add('active');
        let value = this.getAttribute('data-filter');
        itemBox.forEach(element => {
            element.classList.add('hide');
            if (element.getAttribute('data-item') == value || value == "all") {
                element.classList.remove('hide');
            }
        });
    });
});






