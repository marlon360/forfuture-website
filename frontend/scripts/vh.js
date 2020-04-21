function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// set viewport height on start
setViewportHeight();

let width = window.width;

// set new viewport height on resize
window.addEventListener('resize', () => {
    if (window.width != width) {
        setViewportHeight();
        width = window.width;
    }
});