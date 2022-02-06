const navList = document.querySelector('.nav__list');
const mobileTitles = document.querySelectorAll('.nav__mobile-item--title');
const mobileBoxes = document.querySelectorAll('.nav__mobile--content-box');
const mobileSvgs = document.querySelectorAll('.mobile__icon');
const mobileIcon = document.querySelector('.nav__mobile-icon');
const mobileWrapper = document.querySelector('.nav__mobile-wrapper');
const allArrows = document.querySelectorAll('.icon-arrow');

mobileWrapper.addEventListener('click', e => {
    if (!e.target.closest('.nav__mobile-item--title')) return;
    const target = e.target.closest('.nav__mobile-item--title')
    // Opening a corresponding List inside of a menu and closing other ones
    
    allArrows.forEach(arrow=>arrow.style.transform =  'rotate(0)');
    
    mobileBoxes.forEach((box, i) => {    
        if (+target.dataset.title === i) {
            if(box.classList.contains('display-none')) allArrows[i].style.transform =  'rotate(180deg)'
            
            else allArrows[i].style.transform =  'rotate(0)'
           
            box.classList.toggle('display-none');                      
        } else {
            box.classList.add('display-none');                        
        }
    });
});

// Opening and closing mobile menu
mobileIcon.addEventListener('click', function () {
    mobileBoxes.forEach(box=>box.classList.add('display-none'))
    allArrows.forEach(arrow=>arrow.style.transform =  'rotate(0)');

    // Not using arrow function in order to target mobileIcon with a keyword this
    this.classList.toggle('nav__mobile-icon--active');
    mobileWrapper.classList.toggle('mobile--hidden');
});

// Closing dropdown and mobile menu in case that user clicks outside of a menu
window.addEventListener('click', e => {      
    if (mobileWrapper.classList.contains('mobile--hidden') || e.target.closest('.nav__mobile-icon')) return;

    if (!e.target.closest('.nav__mobile-wrapper')) {
        mobileIcon.classList.toggle('nav__mobile-icon--active');
        mobileWrapper.classList.add('mobile--hidden');
        mobileBoxes.forEach(box=>box.classList.add('display-none'))
        allArrows.forEach(arrow=>arrow.style.transform =  'rotate(0)');
    }
});
