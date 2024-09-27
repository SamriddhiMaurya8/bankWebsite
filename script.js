

let currentSlide = 0;
const galleryItemsWrapper = document.querySelector('.gallery-items-wrapper');
const galleryItems = document.querySelectorAll('.gallery-item');
const totalSlides = Math.ceil(galleryItems.length / 4); 
const prevButton = document.querySelector('.navigation__nav-button--prev');
const nextButton = document.querySelector('.navigation__nav-button--next');


function updateButtonState() {
    prevButton.disabled = currentSlide === 0; 
    nextButton.disabled = currentSlide === totalSlides - 1; 
}


updateButtonState();

prevButton.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
        galleryItemsWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateButtonState(); // Update button state after changing slide
    }
});

nextButton.addEventListener('click', function() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        galleryItemsWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateButtonState(); 
    }
});




const galleryImages = document.querySelectorAll('.gallery-item__image');
const mainImage = document.querySelector('.contentSection__content--image-wrapper .image');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        mainImage.src = image.src;
        mainImage.alt = image.alt;
    });
});











// component 8 


// // Select elements
// const profiles = document.querySelectorAll('.profile');
// const mainProfile = document.querySelector('.main-profile');
// const navButtons = document.querySelectorAll('.nav-buttonn');

// let currentIndex = 0; // Current index for the profiles

// // Function to handle right navigation
// function shiftRight() {
//     // Get current main profile details
//     const mainImageSrc = mainProfile.querySelector('.profile-image').src;
//     const mainName = mainProfile.querySelector('.main-name').textContent;
//     const mainTitle = mainProfile.querySelector('.title').textContent;

//     // Update main profile with the next profile in the list
//     const nextProfile = profiles[currentIndex];
//     mainProfile.querySelector('.profile-image').src = nextProfile.querySelector('.profile-image').src;
//     mainProfile.querySelector('.main-name').textContent = nextProfile.querySelector('.name').textContent;
//     mainProfile.querySelector('.title').textContent = nextProfile.querySelector('.title').textContent;

//     // Update the profile to the left with the previous main profile content
//     nextProfile.querySelector('.profile-image').src = mainImageSrc;
//     nextProfile.querySelector('.name').textContent = mainName;
//     nextProfile.querySelector('.title').textContent = mainTitle;

//     // Update the index to shift the carousel
//     currentIndex = (currentIndex + 1) % profiles.length; // Cycle through profiles
// }

// // Add event listener to the right nav button
// navButtons[1].addEventListener('click', shiftRight);

// Select elements






const profiles = document.querySelectorAll('.profile');
const mainProfile = document.querySelector('.main-profile');
const navButtons = document.querySelectorAll('.nav-buttonn');

let currentIndex = 0;

function swapContent(profile1, profile2) {
    const profile1ImageSrc = profile1.querySelector('.profile-image').src;
    const profile1Name = profile1.querySelector('.main-name, .name').textContent;
    const profile1Title = profile1.querySelector('.title').textContent;

    profile1.querySelector('.profile-image').src = profile2.querySelector('.profile-image').src;
    profile1.querySelector('.main-name, .name').textContent = profile2.querySelector('.name').textContent;
    profile1.querySelector('.title').textContent = profile2.querySelector('.title').textContent;

    profile2.querySelector('.profile-image').src = profile1ImageSrc;
    profile2.querySelector('.name').textContent = profile1Name;
    profile2.querySelector('.title').textContent = profile1Title;
}

function shiftProfile(direction) {

    const nextIndex = (currentIndex + direction) % profiles.length;
    
   
    swapContent(mainProfile, profiles[nextIndex]);

    for (let i = 0; i < profiles.length; i++) {
        const profileToSwap = profiles[(nextIndex + i) % profiles.length];
        const nextProfile = profiles[(nextIndex + i + direction + profiles.length) % profiles.length];
        swapContent(profileToSwap, nextProfile);
    }


    currentIndex = nextIndex;
}

navButtons[1].addEventListener('click', () => shiftProfile(1));  
navButtons[0].addEventListener('click', () => shiftProfile(-1)); 














// main-carousel-component


let topSlide = 0;
const slides = document.querySelectorAll('.mainCarousel__slide');
const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');

function showSlide(n) {
    slides[topSlide].classList.remove('active');
    dots[topSlide].classList.remove('active');
    topSlide = (n + slides.length) % slides.length;
    slides[topSlide].classList.add('active');
    dots[topSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(topSlide + n);
}

function goToSlide(n) {
    showSlide(n);
}


setInterval(() => changeSlide(1), 5000);
