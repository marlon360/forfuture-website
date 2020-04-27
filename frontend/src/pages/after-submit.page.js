import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SlideRight } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';
import Arrow from '../icons/arrow.svg';

function AfterSubmitPage() {

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = "https://forfuture.studio";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    const shareAvailable = () => {
        if (navigator.share) {
            return true;
        }
        return false;
    }

    const share = () => {
        if (navigator.share) {
            navigator.share({
              title: 'Forfuture Umfrage',
              url: 'https://forfuture.studio/'
            }).then(() => {
              console.log('Thanks for sharing!');
            })
            .catch(console.error);
          } else {
            // fallback
          }
    }

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
                    <button onClick={copyToClipboard}>Link kopieren</button>
                    <button className={shareAvailable() ? '': 'hidden'} onClick={share}>Link teilen</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AfterSubmitPage;