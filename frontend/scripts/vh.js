function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// set viewport height on start
setViewportHeight();

// set new viewport height on resize
window.addEventListener('resize', () => {
    setViewportHeight();
});