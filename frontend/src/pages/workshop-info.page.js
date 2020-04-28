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

function WorkshopInfoPage() {

    const scrollDestinationRef = useRef();

  const [y, setY] = useSpring(() => ({
    reset: true,
    y: 0,
    onFrame: props => {
        document.querySelector(".page").scroll(0, props.y);
    },
    config: { duration: 500 }
  }));

 const [firstname, setFirstname] = useState();
 const onChangeFirstname = (evt) => {    
    setFirstname(evt.target.value);
 }
 
 const [lastname, setLastname] = useState();
 const onChangeLastname = (evt) => {    
    setLastname(evt.target.value);
 }
 
 const items = ["16", "17", "18", "19"];
 const [age, setAge] = useState();
 const onChangeAge = (evt) => {    
    setAge(evt.item);
 }

 const [email, setEmail] = useState();
 const onChangeEmail = (evt) => {    
    setEmail(evt.target.value);
 }

 const [message, setMessage] = useState();
 const onChangeMessage = (evt) => {    
    setMessage(evt.target.value);
 }

 const SignupClicked = () => {

    const data = {
        firstname, lastname, email, age, message
    }
    SignupService.Signup(data).then((data) => {
        alert("Deine Anmeldung wurde erfolgreich abgeschickt. Du erhälst in Kürze Rückmeldung von uns!");
    }).catch((error) => {
        alert("Fehler: " + error.message);
    })

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
                    <div style={{cursor: "pointer"}} onClick={() => { 
                        setY({ y: scrollDestinationRef.current.getBoundingClientRect().top, from: { y: document.querySelector(".page").scrollTop }, });
                        }}  className="bounce arrow-wrapper">
                        <img alt="down arrow" style={{margin: "auto", display: "block"}} className="arrow" src={Arrow}/>
                    </div>
                </div>
            </div>
        </div>
        <div id="workshop-info" ref={scrollDestinationRef} className="landing2">
            <div className="landing2-content">
                <div>
                    <h2>»_for future« sind strategische Workshops zum experimentieren, lernen & begreifen, wie wir schon heute unsere Zukunft schützten können!</h2>

                    <h3>Über mich</h3>
                    <p>Ich bin Katrin Schulz, Designstudentin im 9ten Semester an der HAW Hamburg (Hochschule für Angewandte Wissenschaften), 24 Jahre alt und liebe Sport, Musik, Kochen und vor allem Essen. Ich gehe gerne Raus und mache mir viele Gedanken, wie die Welt wohl so in 20, 30 Jahren aussehen wird…</p>
                    <img alt="profile picture" src={Profile}/>

                    <h3>Das Projekt</h3>
                    <p>
                        Das Projekt »_forfuture» ist meine Bachelorarbeit. Ich studiere, wie gesagt, Design und plane als Abschluss-Projekt mich ein wenig um meine Zukunft zu kümmern.<br/>
                        Das heißt, ich beschäftigt mich mit Umwelt und Nachhaltigkeit und speziell mit der Frage wo wir ansetzten können, um nachhaltiger in unserem Alltag zu sein.<br/>
                        <br/>
                        Vielleicht hast du ja das gleiche Problem wie ich und es fällt dir gar nicht so leicht 100% umweltfreundlich zu leben, obwohl es eigentlich so wichtig wäre. Oder vielleicht bist du auch Pionier*in auf dem Gebiet und kannst mir ein paar Tipps geben. <br/>
                        Jedenfalls denke ich, dass viele Menschen nicht wissen, wie sie eine umweltfreundliche Routine in ihren Alltag einbauen. Deswegen habe ich schließlich entschieden – unserer Zukunft zuliebe – mich damit zu beschäftigen. Ob am Ende eine Werbe-Kampagne oder einer App oder ähnliches entsteht, ist noch nicht klar. Das wird sich in unserer Zusammenarbeit herausstellen. Ich kann’s kaum erwarten!
                    </p>

                    <h3>Unsere Zusammenarbeit</h3>
                    <p>
                        Klar, ich könnte das »_forfuture» Projekt völlig allein machen! Seit ich mit meiner Recherche begonnen habe, stelle ich immer wieder fest, dass ich Unterstützung brauche. Das Team zu einer Zukunfts-Verändernden Frage wie dieser, muss agil sein, unkonventionell (also “anders”-denkend), engagiert und nicht Erwachsen! 
                        <br/><br/>
                        Unsere Gruppe wird nicht größer sein, als 8 Leute (mich eingeschlossen). Umweltspezialisten sowie Öko-Anfänger sind herzlich willkommen! Denn hinterher macht ein solches Projekt die vielseitigen Blicke auf das Thema stark. 
                        <br/><br/>
                        In unserer Zusammenarbeit wird es viel um kreative Methoden gehen, die ich aus dem Designbereich kenne, unteranderem dem Design-Thinking Porzess. Es geht’s schließlich darum unsere Zukunft zu “gestalten”. Am Endprodukt hast du genauso Mitspracherecht wie ich. Es ist unser gemeinsames Projekt! Das ist wichtig, denn das hier ist kein Schulunterricht, sondern eher eine Kooperation.
                        <br/><br/>
                        Wie gesagt: Die Workshop-Reihe ist Teil meiner Bachelorarbeit. Ich habe also Grund genug seriös mit Dir und dem hier geschriebenen Inhalt umzugehen. Ich nehm’ meine Sache ernst und würde mich riesig freuen, wenn du Lust darauf hast, dabei zu sein!
                    </p>

                    <h3>Durchführung während Corona</h3>
                    <p>
                        Das ideale Umfeld solcher Art Workshop ist normalerweise ein großer Tisch und viel Materialen, wie Zettel, Stift, Klebe, vielleicht Holz, knete, etc. In Corona-Zeiten müssen wir ein wenig umdisponieren und werden uns größtenteils auf digitalem Wege treffen – über das Internet. Dafür ist es wichtig, dass du ein Computer/Laptop mit Internetzugang hast. Gut dazu wäre auch noch ein Mikro und eine Kamera gut, damit wir uns hören und sehen können. Zumindest Laptops haben Mikros und Kameras eingebaut. 
                    </p>

                    <h3>Workshop-Termine</h3>
                    <p>
                        Di, 12.5. | ab 18 Uhr | 1-2h<br/>
                        Kennlerntermin <br/>
                        <br/>
                        So, 17.5. | ab 11 Uhr | 6h<br/>
                        Workshop “Verstehen und Beobachten” + “Standpunkt definieren” <br/>
                        <br/>
                        So, 24.5. | ab 11 Uhr | 4-6h<br/>
                        Workshop “Ideen entwickeln”<br/>
                        <br/>
                        Sa+So, 6.+7.6. | ab 11	Uhr | 3h jeweils<br/>
                        Workshop “Prototyp kreieren”<br/>
                        <br/>
                        Di, 16.6. | ab 18 Uhr | 1+2h<br/>
                        Workshop “Feedback Prototype”<br/>
                        <br/>
                        *alle Termine sind flexibel, so dass wir sicher einen Kompromiss finden können, falls du jetzt schon weißt, dass du mal nicht kannst.
                    </p>

                    <h3>Anmelden</h3>
                    <p>Du möchtest bei dem Projekt dabei sein? Dann trag dich gern ein!</p>
                    <input type="text" value={firstname} onChange={onChangeFirstname} placeholder="Vorname"></input>
                    <input type="text" value={lastname} onChange={onChangeLastname} placeholder="Nachname"></input>
                    <input type="email" value={email} onChange={onChangeEmail} placeholder="E-Mail Adresse"></input>
                    <div className="age-select">
                        <span>Alter:</span>
                        <SelectorComponent value={items.indexOf(age)} onChange={onChangeAge} items={items}></SelectorComponent>
                    </div>
                    <textarea value={message} onChange={onChangeMessage} placeholder="Nachricht (max 100 Zeichen)" rows="4"></textarea>
                    <button onClick={SignupClicked} style={{marginTop: "1.4em"}}>Anmeldung abschicken</button>
                    <p>Bis spätestens 4.5.2020 bekommst du Bescheid, ob du bei dem Projekt dabei bist. Ich freu mich auf dich!</p>

                    <h3>du bist jünger als 18?</h3>
                    <p>Sprich mit deinen Eltern! Zeig ihnen diese Seite und hole dir ihr “okay“, an diesem Projekt teilzunehmen. Nach der Anmeldung bekommst du in der Bestätigungsmail ein Einverständnis-Formular zu geschickt, dass deine Eltern ausfüllen und zurückschicken müssen. Andernfalls darf ich leider (rechtlich) nicht mit dir arbeiten und das wäre schade! </p>
                
                    <h3 id="policy">Datenschutz</h3>
                    <p>Mit deinen Daten soll gut umgegangen werden! Aus dem Grund sind auf dieser Seite keine Analyticks- oder Trackingfunktionen eingebaut und lediglich seriöse Drittanbieter eingebunden, die den Richtlinien der DSGVO folgen d.h. ihre Server in Deutschland haben, sodass keine Datenweitergabe statt findet! Möchtest du mehr erfahren? Dann lese in den Bestimmungen die Details nach:</p>
                    <Link className="button" to={{
                        pathname: "/policy-detail",
                        state: {
                            transition: SlideLeft,
                            backLink: "/workshop-info"
                        }
                    }}>Datenschutz</Link>
                    <Link className="button" to={{
                        pathname: "/impress",
                        state: {
                            transition: SlideLeft,
                            backLink: "/workshop-info"
                        }
                    }}>Impressum</Link>

                    <img alt="HAW Hamburg Logo" src={HAW} />

                    <p>
                        Eine Bachelorarbeit der Hochschule für Angewandte Wissenschaften Hamburg, Hendrike Schmietendorf, Hendrike.Schmietendorf@haw-hamburg.de
                    </p>

                    <p><br/>© Katrin Schulz, 2020</p>

                </div>
            </div>
        </div>
    </div>
  );
}

export default WorkshopInfoPage;