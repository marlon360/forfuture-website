import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { SlideLeft, SlideOverFromBottom } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';
import Arrow from '../icons/arrow.svg';
import HAW from '../images/haw.svg';
import Profile from '../images/profile.png';
import SelectorComponent from '../components/selector.component';
import { SignupService } from '../services/signup.service';
import { useSpring } from 'react-spring';
import WorkshopInfo from '../components/workshop-info.component';

function AfterSubmitWorkshopPage() {

    const scrollDestinationRef = useRef();

  const [y, setY] = useSpring(() => ({
    reset: true,
    y: 0,
    onFrame: props => {
        document.querySelector(".page").scroll(0, props.y);
    },
    config: { duration: 500 }
  }));

  return (
    <div>
        <div className="landing2">
            <div className="landing2-content">
                <div className="top">
                    <p>
                    Eine Umfrage kann die Zukunft nicht ändern. 
                    </p>
                </div>
                <div style={{"text-align": "left", "max-width": "100%"}} className="bottom">
                    <p>
                    Vielleicht hast du Lust bei <span className="underline">meinem Projekt mitzumachen</span> und das Morgen zu gestalten. Vielleicht schaffen wir es, Nachhatligkeit leichter in unseren Alltag zu integrieren und darüber hinaus <span className="underline">mehr Menschen</span> dazu zu animieren, ökologischer und bewusster in ihrem Leben für Natur und Verbrauch zu werden. 
                    </p>
                    <div style={{cursor: "pointer"}} onClick={() => { 
                        setY({ y: scrollDestinationRef.current.getBoundingClientRect().top, from: { y: document.querySelector(".page").scrollTop }, });
                        }}  className="bounce arrow-wrapper">
                        <img alt="down arrow" style={{margin: "auto", display: "block"}} className="arrow" src={Arrow}/>
                    </div>
                </div>
            </div>
        </div>
        <div ref={scrollDestinationRef}>
            <WorkshopInfo backLink="/after-submit-workshop" />
        </div>
    </div>
  );
}

export default AfterSubmitWorkshopPage;