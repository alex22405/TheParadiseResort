// Effet scroll nav
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
}
)

// Responsive menu toggle
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const sr = ScrollReveal();

sr.reveal('.logo', {
    origin: 'top',
    distance: '50px',
    duration: 2000,
});
sr.reveal('.navigation', {
    origin: 'top',
    distance: '50px',
    duration: 3000,
});
sr.reveal('.main_welcome', {
    origin: 'top',
    distance: '50px',
    duration: 3000,
});

sr.reveal('.main_title', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
    delay: 400,
});


sr.reveal('.main_description', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
    delay: 500,
});

sr.reveal('.col50_title', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
});

sr.reveal('.col50_text', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
});

sr.reveal('.img_col50', {
    origin: 'right',
    distance: '50px',
    duration: 3000,
});

sr.reveal('span', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
});

sr.reveal('.acco_title', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
});



sr.reveal('.grid', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
    delay: 300
});

sr.reveal('.col_1', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
    delay: 300
});

sr.reveal('.col_2', {
    origin: 'right',
    distance: '50px',
    duration: 3000,
    delay: 300
});

sr.reveal('.footer_box', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
    delay: 300
});

sr.reveal('.col_30', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
});

sr.reveal('.footer_description', {
    origin: 'left',
    distance: '50px',
    duration: 3000,
});

sr.reveal('.developed_by', {
    origin: 'bottom',
    distance: '100px',
    duration: 4000,
});