import barba from '@barba/core';
import anime from 'animejs';
import { buttonSetup } from './select-buttons';
import { sliderSetup } from './slider';
import { stateSetup } from './state-controller';

document.addEventListener("DOMContentLoaded", function () {
    barba.init({
        views: [{
            namespace: 'survey',
            beforeEnter() {
                stateSetup();
                buttonSetup();
                sliderSetup();
            }
        },{
            namespace: 'survey-8',
            beforeEnter() {  
                stateSetup();               
                buttonSetup();  
                sliderSetup();
                let anchors = document.querySelectorAll('.forward');
                anchors.forEach((anchor) =>{
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (window.state["sustainability"] != null) {                        
                            if (window.state.sustainability == "yes") {                        
                                barba.go("09.html");
                            } else {
                                barba.go("09b.html");
                            }
                        }
                    })
                })
            }
        },{
            namespace: 'survey-1',
            beforeEnter() {  
                stateSetup();               
                buttonSetup();  
                sliderSetup();
                let anchors = document.querySelectorAll('.forward');
                anchors.forEach((anchor) =>{
                    anchor.addEventListener('click', (event) => {                        
                        event.preventDefault();
                        if (window.state["age"] != null) {
                            if (window.state.age == "-16" || window.state.age == "19+") {
                                barba.go("sorry.html");
                            } else {
                                barba.go("02.html");
                            }
                        }
                    })
                })
            }
        },{
            namespace: 'survey-3',
            beforeEnter() {  
                stateSetup();               
                buttonSetup();  
                sliderSetup();
                let anchors = document.querySelectorAll('.forward');
                anchors.forEach((anchor) =>{
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (window.state["future"] != null) {
                            if (window.state.future == "no") {
                                barba.go("sorry.html");
                            } else {
                                barba.go("04.html");
                            }
                        }
                    })
                })
            }
        },{
            namespace: 'survey-12',
            beforeEnter() {  
                stateSetup();               
                buttonSetup();  
                sliderSetup();
                let anchors = document.querySelectorAll('.backward');
                anchors.forEach((anchor) =>{
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (window.state["sustainability"] != null) {
                            if (window.state.sustainability == "no") {
                                barba.go("ueberflieger.html");
                            } else {
                                barba.go("11.html");
                            }
                        }
                    })
                });
            }
        },{
            namespace: 'survey-2',
            beforeEnter() {  
                stateSetup();               
                buttonSetup();  
                sliderSetup();
                let anchors = document.querySelectorAll('.forward');
                anchors.forEach((anchor) =>{
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (window.state["sex"] != null) {
                            barba.go("03.html");
                        }
                    })
                });
            }
        },{
            namespace: 'survey-source',
            beforeEnter() {  
                stateSetup();               
                buttonSetup();  
                sliderSetup();
                let anchors = document.querySelectorAll('.forward');
                anchors.forEach((anchor) =>{
                    anchor.addEventListener('click', (event) => {
                        event.preventDefault();
                        if (window.state["source"] != null) {
                            barba.go("finished.html");
                        }
                    })
                });
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