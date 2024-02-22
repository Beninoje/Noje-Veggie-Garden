// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//!=========Time Line==============//
dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);

    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        element.querySelector(".seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    })
}
activateCountdown(document.querySelector(".days-until-container"), "2024-12-31");

const swiperCards = new Swiper(".main", {
    grabCursor: false,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1270: {
            slidesPerView: 1,
        },
    },
});
const testimonial = new Swiper(".testimonial-container", {
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    initialSlide: 0,
});

const featured_veggis = new Swiper(".featured-content", {
    grabCursor: false,
    loop: true,
    breakpoints: {
        1670: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2,
        },

    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
//!============Featured Tabs===============//
const tabs = document.querySelectorAll(".tab-btn");
const content_tabs = document.querySelectorAll(".featured-content-wrapper");

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove("tab-active");
        });
        tab.classList.add("tab-active");
        content_tabs.forEach(content => {
            content.classList.remove("tab-active");
        });
        content_tabs[index].classList.add("tab-active");
    });
});
//!===================Mobile Nav=======================/
const mobileNavButtonOpen = document.querySelector(".open-nav");
const mobileNavButtonClose = document.querySelector(".close-nav");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButtonOpen.addEventListener("click", function () {
    mobileNavButtonOpen.classList.toggle("mobile-active");
    mobileNav.classList.toggle("mobile-active");
});

mobileNavButtonClose.addEventListener("click", function () {
    mobileNavButtonOpen.classList.remove("mobile-active");
    mobileNav.classList.remove("mobile-active");
});

document.addEventListener("click", function (event) {
    if (!mobileNav.contains(event.target) && !mobileNavButtonOpen.contains(event.target)) {
        mobileNavButtonOpen.classList.remove("mobile-active");
        mobileNav.classList.remove("mobile-active");
    }
});
//!============Gallery Pop up===============//
document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-img img');
    const overlay = document.getElementById('overlay');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const closeBtn = document.getElementById('close-btn');

    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            fullscreenImg.src = this.src;
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});











