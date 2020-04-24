import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SlideRight } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';
import Arrow from '../icons/arrow.svg';

function AfterSubmitPage() {

  return (
    <div>
        <div className="landing2">
            <div className="landing2-content">
                <div className="top">
                    <p>
                    Teile gern diese Umfrage weiter an andere. Je mehr davon wissen, desto besser. Und ich würd mich freuen!<br/>
                    <br/>
                    Ansonsten ein riesen Dankeschön für deine Zeit! 
                    </p>
                </div>
                <div style={{"text-align": "left", "max-width": "100%"}} className="bottom">
                    <p>
                    Grüße,<br/>
                    Katrin Schulz
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AfterSubmitPage;