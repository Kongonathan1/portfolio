const btnToggle = document.querySelector('.toggle-btn')
const navbar = document.querySelector('.navbar')

btnToggle.addEventListener('click', () => {
    navbar.classList.toggle('open')
})

 const swiper = new Swiper(".slide-content", {
    slidesPerView: 0.75,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
    769: {
        slidesPerView: 3,
        slidesPerGroup: 0.5,
    },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperFlip = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const ratio = 0.25
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
}

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
})
