// --- task Header ---
//navigation
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPosition = window.scrollY;

    document.querySelectorAll('.singolo>div').forEach((el) => {

        if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
            document.querySelectorAll('#navi a').forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('class') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    })
}
// slider
let slide = document.querySelectorAll('.slider div');
let currentSlide = 0;

function slider() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.add('none-opacity');

    }
    slide[currentSlide].classList.remove('none-opacity');

    if (currentSlide + 1 == slide.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}
document.querySelector('.arrow-left').onclick = slider;
document.querySelector('.arrow-right').onclick = slider;

//screen vertical phone
const phoneVertical = document.getElementById('phone-vertical'),
    screenVertical = document.getElementById('off-vertical');

phoneVertical.addEventListener('click', () => {
    screenVertical.classList.toggle('switch');
});
//screen horizontal phone
const phoneHorizontal = document.getElementById('phone-horizontal'),
    screenHorizontal = document.getElementById('off-horizontal');

phoneHorizontal.addEventListener('click', () => {
    screenHorizontal.classList.toggle('switch');
});


// --- task Portfolio ---
//tab buttons
const portfolioNavi = document.getElementById('portfolio-buttons');

portfolioNavi.addEventListener('click', (event) => {
    portfolioNavi.querySelectorAll('a').forEach(el => el.classList.remove('active-button'));
    event.target.classList.add('active-button');
});
// border for pictures
const picturesArea = document.getElementById('colums');

picturesArea.addEventListener('click', (event) => {
    picturesArea.querySelectorAll('img').forEach(el => el.classList.remove('pictures-border'));
    event.target.classList.add('pictures-border');
});



// --- task Get a quote ---
const submitButton = document.getElementById('submit-btn'),
    closeButton = document.getElementById('close-btn');

submitButton.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    if (subject == '') {
        document.getElementById('subject-result').innerText = 'No subject';
    } else {
        document.getElementById('subject-result').innerText = 'Subject: ' + subject;
    }
    const description = document.getElementById('description').value.toString();
    if (description == '') {
        document.getElementById('description-result').innerText = 'No description';
    } else {
        document.getElementById('description-result').innerText = 'Description: ' + description;
    }
    document.getElementById('message-block').classList.remove('popup-hidden');
});

closeButton.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('description-result').innerText = '';
    let formArea = document.getElementsByTagName('form');
    formArea[0].reset();
    document.getElementById('message-block').classList.add('popup-hidden');

});



const burgerBtn = document.getElementById('burger-menu__button'),
    burgerNav = document.getElementsByClassName('wrap-nav'),
    overlay = document.getElementsByClassName('burger-menu__overlay');
burgerMenu = burgerNav[0];
overlayMenu = overlay[0];


function startBurger() {
    burgerBtn.classList.toggle('burger-menu__active');
    burgerMenu.classList.toggle('wrap-nav__active');
    overlayMenu.classList.toggle('overlay-active');
}

burgerBtn.onclick = startBurger;
overlayMenu.onclick = startBurger;