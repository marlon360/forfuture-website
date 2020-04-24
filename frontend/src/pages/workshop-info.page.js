import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SlideLeft, SlideOverFromBottom } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';

function WorkshopInfoPage() {

 const [checked, setChecked] = useLocalStorage("policy",false);

 const onChange = (evt) => {    
    setChecked(evt.target.checked);
 }

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
                    Vielleicht hast Lust bei meinem Projekt mit zu machen und das Morgen zu gestalten. Es geht hier nicht nur um deine Zukunft, sondern darum, mehr Menschen dazu zu animieren, zum Beispiel Plastik-freier, ökologischer, bewusster in ihrem Leben für Natur und Verbrauch zu werden.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WorkshopInfoPage;