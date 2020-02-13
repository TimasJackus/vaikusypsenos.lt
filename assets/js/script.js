window.onscroll = function() {checkScroll()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function checkScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function scrollToElement(hash) {
    const el = document.getElementById(hash);
    if (el) {
        const offsetTop = el.offsetTop;
        window.scrollTo({
            top: offsetTop - 100,
            behavior: 'smooth',
        });
    }
}

if (window.location.href.includes('#')) {
    const hash = window.location.href.split('#')[1];
    scrollToElement(hash);
}

function toggleMenu(event) {
    const nav = document.getElementById('nav');
    console.log(nav.classList.contains('open'));
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
    }
}

function locationHashChanged() {
    toggleMenu();
}

window.onhashchange = locationHashChanged;