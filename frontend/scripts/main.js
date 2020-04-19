import './vh';
import barba from '@barba/core';
import anime from 'animejs';

document.addEventListener("DOMContentLoaded", function(){
    
barba.init({
    transitions: [{
      sync: true, // sync the transitions up so they occur concurrently
      leave({ // leaving the current page
        current,
      }) {
        const targets = current.container; // target current page
        const a = anime({ // new animation
          targets, // current page
          translateX: [0, "100%"], // fade out from 1 to 0 opacity
          duration: 800, //time in ms
          easing: 'easeInOutExpo'
        });
  
        return a.finished;
      },
      enter({ // entering the next page
        next,
      }) {
        const targets = next.container; // target the container of the next page
        targets.style.position = "fixed";
        targets.style.top = targets.style.bottom = targets.style.left = targets.style.right = 0;
        const a = anime({ // new animation
          targets, // next page
          translateX: ["-100%", 0], // fade in from 0 to 1 opacity
          duration: 800, // time in ms
          easing: 'easeInOutExpo'
        });
  
        return a.finished.then(() => {
          targets.style.position = "relative";
        });
      },
    }],
  });
  });

