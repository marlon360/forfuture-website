import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { SlideRight } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';
import Arrow from '../icons/arrow.svg';
import HAW from '../images/haw.svg';

function ImpressPage() {

    const location = useLocation();

    const getBackLink = () => {
        if (location.state && location.state.backLink) {
            return location.state.backLink;
        } else {
            return "/workshop-info"
        }
    }

  return (
    <div>
        <div id="impress" className="landing2">
            <div className="landing2-content">
                <div className="top">
                    <Link className="backward" to={{
                        pathname: getBackLink(),
                        state: {
                            transition: SlideRight
                        }
                    }}>
                        <img className="left-arrow" src={Arrow} />
                    </Link>
                    <p>
                    <span className="underline">Impressum:</span><br/>
                    <br/>
                    »_forfuture»<br/>
                    ist eine Bachelorarbeit im Bereich Kommunikationsdesgin an der Hochschule für angewandte Wissenschaften, Hamburg.<br/>
                    <br/>
                    Referenzkontakt:
                    Hendrike Schmietendorf, 
                    Öffentlichkeitsarbeit Fakultät DMI
                    Webkalender & -Meldungen
                    Email: Hendrike.Schmietendorf@haw-hamburg.de
                    </p>
                    <img className="center" src={HAW} />
                    <p>
                    Inhaberin dieser Seite ist<br/>
                    Katrin Schulz<br/>
                    Email:  info@forfuture.studio <br/>
                    <br/>
                    Die Inhalte aller Seiten dieses Informations und Kontaktauftrittes  sind ur­he­ber­rechtlich geschützt.<br/>
                    Alle Bildrechte liegen bei »_forfuture» Katrin Schulz.<br/>
                    Eine Ver­wen­dung ohne ausdrückliche Zustimmung ist nicht gestattet. Alle Rechte der Vervielfältigung des In­halts oder Teilen daraus sind vorbehalten.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ImpressPage;