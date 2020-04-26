import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SlideLeft, SlideOverFromBottom } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';

function PolicyPage() {

 const [checked, setChecked] = useLocalStorage("policy",false);

 const onChange = (evt) => {    
    setChecked(evt.target.checked);
 }

  return (
    <div>
        <div className="landing2">
            <div className="landing2-content">
                <div className="top">
                    <span className="title">DATENSCHUTZ</span>
                    <p>
                    Bevor wir starten, musst du noch folgendes wissen: Deine Antworten sind <span className="underline">anonymisiert</span> und werden ausschließlich im Rahmen des Projektes ausgewertet . Nach Beenden der Bachelorarbeit, werden diese wieder gelöscht. Weitere Infos zum Datenschutz findest du <Link className="backward" to={{
                        pathname: "/policy-detail",
                        state: {
                            transition: SlideLeft,
                            backLink: "/policy"
                        }
                    }}>hier</Link>. 
                    </p>
                    <p>
                        Außerdem werden Cookies benutzt, allerdings NICHT um deine Daten zu tracken, sondern, um dir innerhalb dieser Umfrage einen angenehmeren Umgang zu schaffen (Datenschutz). 
                    </p>
                    <div className="checbox-wrapper">
                        <input checked={checked} onChange={onChange} type="checkbox"></input>
                        <span>Ich habe alles gelesen und bin mit allem einverstanden.</span>
                    </div>
                </div>
                <div className="bottom">
                    <Link className={`button ${checked ? "" : "inactive"}`} to={checked ? {
                        pathname: '/01',
                        state: {
                            transition: SlideLeft
                        }
                    } : {}}>Jetzt aber!</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PolicyPage;