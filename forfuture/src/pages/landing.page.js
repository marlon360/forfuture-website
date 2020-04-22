import React from 'react';
import { Link } from "react-router-dom";
import { SlideLeft } from '../transitions/transitions';
import ArrowWhite from '../icons/arrow_white.svg';

function LandingPage() {
  return (
    <div>
        <div className="landing">
            <div className="landing-content">
                <h1>Cool, dass du dir einen Moment Zeit nimmst!</h1>
                <p>Du bist zwischen <span className="underline">15 und 19 Jahre</span> alt und ein generell interessierter Mensch? Dann ist <span className="underline">das hier</span> eine Umfrage an dich.</p>
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
                        Das ausfüllen dauert ungefähr zehn Minuten. Bitte beantworte alle Fragen ehrlich. Sie sind Teil einer Forschungsarbeit und sollen deswegen so wahrheitsgemäß wie möglich sein. Vor allem DEINE Meinung ist gefragt, es gibt also kein Richtig oder Falsch.<br/> 
                        <br/>
                        Alle deine Antworten sind anonym verschlüsselt. Du brauchst dir keine Sorge wegen der Speicherung oder weitergabe an Dritte machen.
                    </p>
                </div>
                <div className="bottom">
                    <p>Habe ich verstanden.</p>
                    <Link className="button" to={{
                        pathname: '/01',
                        state: {
                            transition: SlideLeft
                        }
                    }}>Los geht's!</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;