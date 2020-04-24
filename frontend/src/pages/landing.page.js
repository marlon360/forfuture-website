import React from 'react';
import { Link } from "react-router-dom";
import { SlideLeft, SlideOverFromBottom } from '../transitions/transitions';
import ArrowWhite from '../icons/arrow_white.svg';

function LandingPage() {
  return (
    <div>
        <div className="landing">
            <div className="landing-content">
                <h1>Cool, dass du dir einen Moment Zeit nimmst!</h1>
                <p>Du bist zwischen <span className="underline">16 und 19 Jahre</span> alt und ein generell interessierter Mensch? Dann ist das hier eine Umfrage an dich.</p>
            </div>
            <div className="bounce arrow-wrapper">
                <img className="arrow" src={ArrowWhite}/>
            </div>
        </div>
        <div className="landing2">
            <div className="landing2-content">
                <div className="top">
                    <span className="title">HEY!</span>
                    <p>
                    Das Ausfüllen dauert ungefähr <span className="underline">zehn Minuten</span>. Bitte beantworte die Fragen ehrlich! Sie sind wissenschaftliche Grundlage einer Bachelorarbeit namens »_forfuture». Vor allem DEINE Meinung ist gefragt, es gibt also <span className="underline">kein</span> Richtig oder Falsch. 
                    </p>
                </div>
                <div className="bottom">
                    <p>Habe ich verstanden.</p>
                    <Link className="button" to={{
                        pathname: '/policy',
                        state: {
                            transition: SlideOverFromBottom
                        }
                    }}>Los geht's!</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;