import barba from '@barba/core';
import anime from 'animejs';
import { buttonSetup } from './select-buttons';
import { sliderSetup } from './slider';

document.addEventListener("DOMContentLoaded", function () {
    barba.init({
        views: [{
            namespace: 'survey',
            afterEnter() {
              buttonSetup();
              sliderSetup();
            }
        },{
            namespace: 'survey-8',
            afterEnter() {  
                buttonSetup();                 
                let anchor = document.querySelector('.forward');
                anchor.addEventListener('click', (event) => {
                    event.preventDefault();
                    let button = document.querySelector("button.on");
                    if (button != null) {
                        if (button.value == "yes") {                        
                            barba.go("09.html");
                        } else {
                            barba.go("09b.html");
                        }
                    }
                })
            }
        }],
        transitions: [{
            sync: true,
            leave({ current, trigger }) {

                let translateX = [0, "-100%"];
                if (trigger.dataset?.direction == "forward") {
                    translateX = [0, "-100%"];
                } else if (trigger.dataset?.direction == "backward") {
                    translateX = [0, "100%"];
                }

                const targets = current.container;
                const a = anime({
                    targets,
                    translateX,
                    duration: 800,
                    easing: 'easeInOutExpo'
                });

                return a.finished;
            },
            enter({ next, trigger }) {

                let translateX = ["100%", 0];
                if (trigger.dataset?.direction == "forward") {
                    translateX = ["100%", 0];
                } else if (trigger.dataset?.direction == "backward") {
                    translateX = ["-100%", 0];
                }

                const targets = next.container;
                targets.style.position = "fixed";
                targets.style.top = targets.style.bottom = targets.style.left = targets.style.right = 0;
                const a = anime({
                    targets,
                    translateX,
                    duration: 800,
                    easing: 'easeInOutExpo'
                });

                return a.finished.then(() => {
                    targets.style.position = "relative";
                });
            },
        }],
    });
});