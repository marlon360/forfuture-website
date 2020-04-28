import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { SlideRight } from '../transitions/transitions';
import { useLocalStorage } from '../utils/localStorage';
import Arrow from '../icons/arrow.svg';

function PolicyDetailPage() {

    const location = useLocation();

    const getBackLink = () => {
        if (location.state && location.state.backLink) {
            return location.state.backLink;
        } else {
            return "/policy"
        }
    }

  return (
    <div>
        <div className="landing2">
            <div className="landing2-content">
                <div className="top">
                    <Link className="backward" to={{
                        pathname: getBackLink(),
                        state: {
                            transition: SlideRight
                        }
                    }}>
                        <img alt="left arrow" className="left-arrow" src={Arrow} />
                    </Link>
                    <p>
                    <span className="underline">Datenschutz:</span><br/>

                    Als Betreiber dieser Seiten nehme ich den Schutz Deiner persönlichen Daten sehr ernst. Ich behandele Deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

                    Die Nutzung meiner Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Deine ausdrückliche Zustimmung nicht an Dritte weitergegeben.


                    Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

                    Die Erhebung deiner Daten in der Umfrage, werden zu wissenschaftlichen Zwecken benutzt und nach 
                    </p>

                    <p>
                    <span className="underline">Verantwortlicher im Sinne des Datenschutzrechtes</span><br/>

                    gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (EU-DSGVO) ist Katrin Schulz, Lübeckerstraße 70b, 22087 Hamburg, katrin.suz@gmail.com 
                    </p>

                    <p>
                    <span className="underline">Cookies</span><br/>

                    Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.

                    Die von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. 

                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                    </p>

                    <p>
                    <span className="underline">Kontaktformular</span><br/>

                    Wenn Du mir per Kontaktformular Anfragen zukommen lässt, werden Deine Angaben aus dem Anfrageformular inklusive der von Dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Deine Einwilligung weiter.
                    </p>

                    <p>
                    <span className="underline">Server-Log- Files</span><br/>

                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Dein Browser automatisch an die Webseite übermittelt. Dies sind:

                    •	Browsertyp und Browserversion

                    •	verwendetes Betriebssystem

                    •	Referrer URL

                    •	Hostname des zugreifenden Rechners

                    •	Uhrzeit der Serveranfrage

                    Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Ich behalte mir vor, diese Daten nachträglich zu prüfen, wenn mir konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                    </p>

                    <p>
                    <span className="underline">SSL- Verschlüsselung</span><br/>

                    Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

                    Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>

                    <p>
                    <span className="underline">Recht auf Auskunft, Löschung, Sperrung</span><br/>

                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der oben genannten Mailadresse an uns wenden.
                    </p>

                    <p>
                    <span className="underline">Änderungen dieser Datenschutzerklärung</span><br/>

                    Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu verändern, so zum Beispiel bei Änderungen unseres Angebots oder um sie den aktuellen rechtlichen Anforderungen anzupassen. Für einen erneuten Besuch gilt dann die neue Datenschutzerklärung.
                    </p>
                    <p>
                    Katrin Schulz, April 2020
                    </p>

                </div>
            </div>
        </div>
    </div>
  );
}

export default PolicyDetailPage;