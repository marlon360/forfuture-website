import React from 'react';
import { Link } from "react-router-dom";

function LandingComponent() {
  return (
    <div>
        <div class="landing">
            <div class="landing-content">
                <h1>Cool, dass du dir einen Moment Zeit nimmst!</h1>
                <p>Du bist zwischen <span class="underline">15 und 19 Jahre</span> alt und ein generell interessierter Mensch? Dann ist <span class="underline">das hier</span> eine Umfrage an dich.</p>
            </div>
            <div class="bounce arrow-wrapper">
                <img class="arrow" src="icons/arrow_white.svg"/>
            </div>
        </div>
        <div class="landing2">
            <div class="landing2-content">
                <div class="top">
                    <span class="title">HEY!</span>
                    <p>
                        Das ausfüllen dauert ungefähr zehn Minuten. Bitte beantworte alle Fragen ehrlich. Sie sind Teil einer Forschungsarbeit und sollen deswegen so wahrheitsgemäß wie möglich sein. Vor allem DEINE Meinung ist gefragt, es gibt also kein Richtig oder Falsch.<br/> 
                        <br/>
                        Alle deine Antworten sind anonym verschlüsselt. Du brauchst dir keine Sorge wegen der Speicherung oder weitergabe an Dritte machen.
                    </p>
                </div>
                <div class="bottom">
                    <p>Habe ich verstanden.</p>
                    <Link class="button" to="/01">Los geht's!</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingComponent;