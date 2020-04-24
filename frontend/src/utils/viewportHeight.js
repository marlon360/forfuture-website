function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.body.style.setProperty('--vh', `${vh}px`);
}

// set viewport height on start
setViewportHeight();

var width = window.innerWidth;

// set new viewport height on resize
window.addEventListener('resize', () => {
    
    if (window.innerWidth !== width) {
        setViewportHeight();
        width = window.innerWidth;
    }
});
