import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import HAW from '../images/haw.svg';
import Profile from '../images/profile.png';
import { SlideLeft } from '../transitions/transitions';
import { SignupService } from '../services/signup.service';
import SelectorComponent from './selector.component';
import TypeAnimationComponent from './type-animation.component';
import { useSpring } from 'react-spring';

function WorkshopInfo({backLink}) {

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

    const [y, setY] = useSpring(() => ({
        reset: true,
        y: 0,
        onFrame: props => {
            document.querySelector(".page").scroll(0, props.y);
        },
        config: { duration: 500 }
      }));
      const scrollDestinationRef = useRef();
   
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
        <div id="workshop-info" className="landing2">
            <div className="landing2-content">
                <div>
                    <TypeAnimationComponent />

                    <a onClick={() => { 
                        setY({ y: scrollDestinationRef.current.getBoundingClientRect().top - 20, from: { y: document.querySelector(".page").scrollTop }, });
                        }} className="button signup-button">Anmelden</a>

                    <h2>»_forfuture« sind strategische <span className="underline">Workshops</span> zum experimentieren, lernen & begreifen, wie wir schon heute <span className="underline">unsere Zukunft gestalten</span> können!</h2>

                    <h3>Über mich</h3>
                    <p>Ich bin Katrin Schulz, Designstudentin im neunten Semester an der HAW Hamburg (Hochschule für Angewandte Wissenschaften), 24 Jahre alt und liebe Sport, Musik, Kochen und vor allem Essen. Ich gehe gerne raus und mache mir viele Gedanken, wie die Welt wohl so in 20, 30 Jahren aussehen wird…</p>
                    <img alt="profile picture" src={Profile}/>

                    <h3>Das Projekt</h3>
                    <p>
                    Das Projekt »_forfuture» ist meine Bachelorarbeit, in der ich mich mit Social Design beschäftige. <br />
                    <br />
                    Social Design klingt erstmal hochgestochen, ist im Grunde aber “Designen <span className="underline">mit</span> und <span className="underline">für</span> Gesellschaft”. <br />
                    In vielen Social Design Projekten geht es darum, nicht unbedingt kommerziell zu sein (also etwas verkaufen zu wollen), sondern <span className="underline">kreative Lösungen</span> für <span className="underline">verzwickte Probleme</span> zu finden. <br />
                    <br />
                    Der <span className="underline">Prozess</span> ist das, worum es geht, und somit der Schwerpunkt unserer Arbeit. Aber natürlich soll das Produkt am Ende nicht zu kurz kommen. Deswegen gibt es gewisse Methoden und kreative Aufgaben, um hinterher mindestens einen Prototyp in der Hand zu halten. Dieser kann dann für zukünftige Workshops, mit der gleichen oder ähnlichen Frage, als Grundlage dienen.<br />
                    <br />
                    Wie dieser <span className="underline">Prototyp</span> am Ende aussieht – ob es eine Werbe-Kampagne oder eine App oder etwas komplett anderes wird – ist zu diesem Zeitpunkt noch unklar, weil wir noch nicht wissen, wo genau unser Problem steckt. Aufregend, oder? :)<br />
                    <br />
                    Die Frage, meiner »_forfuture» Workshop-Reihe lautet: <span className="underline">»Wie kann ich Nachhaltigkeit intensiver in meinen Alltag einbauen?»</span> Am besten mit so wenig Aufwand wie möglich, denn – seien wir ehrlich – es gibt auch noch andere Dinge, die ebenfalls Zeit und Energie kosten. <br />
                    <br />
                    Vielleicht geht es dir ja ähnlich und es fällt dir gar nicht so leicht 100% umweltfreundlich zu leben, obwohl es eigentlich so wichtig wäre. <br />
                    <span className="underline">Wie können wir da besser werden und vielleicht eine Antwort finden?</span> Und möglicherweise hilft unsere Arbeit am Ende nicht nur uns, sondern mehr Menschen, denen es ähnlich geht. <br />    
                    </p>

                    <h3>Unsere Zusammenarbeit</h3>
                    <p>
                        Das Team zu einer Zukunfts-Verändernden Frage wie dieser (siehe Oben), muss agil sein, unkonventionell (also “anders denkend“), engagiert und nicht erwachsen! Unsere Gruppe wird nicht größer sein, als <span className="underline">acht Leute</span> (mich eingeschlossen). Hinterher macht die vielseitigen Blickewinkel ein solches Projekt stark. Das heißt Nachhaltigkeits-Profis sowie “Just-Starter” sind herzlich willkommen! <br />
                        <br />
                        In unserer Zusammenarbeit wird es viel um kreative Methoden gehen, die ich aus dem Designbereich kenne, unter anderem dem Design-Thinking Prozess. Es geht schließlich darum unsere Zukunft zu “gestalten”. Und, es ist kein Schulunterricht, wir bestimmen gemeinsam in der Gruppe, wohin sich unser Prozess entwickelt. Das heißt, auch am Endprodukt bist du natürlich beteiligt!<br />
                        <br />
                        Wie gesagt: Die Workshop-Reihe ist Teil meiner Bachelorarbeit. Ich habe also Grund genug seriös mit dir und dem hier geschriebenen Inhalt umzugehen. Ich nehme meine Sache ernst und würde mich riesig freuen, wenn du Lust darauf hast, dabei zu sein!<br />
                        <br />
                    </p>

                    <h3>Durchführung während Corona</h3>
                    <p>
                        Das ideale Umfeld solcher Art Workshop ist normalerweise ein großer Tisch und vielen Materialen, wie Zettel, Stift, Klebe, vielleicht Holz, knete, etc. In Corona-Zeiten müssen wir ein wenig umdisponieren und werden uns größtenteils auf digitalem Wege treffen – über das Internet. Dafür ist es wichtig, dass du einen Computer oder Laptop mit Internetzugang hast. Dazu wäre auch noch ein Mikro und eine Kamera gut, damit wir uns hören und sehen können. Zumindest Laptops haben Mikros und Kameras eingebaut. 
                    </p>

                    <h3>Workshop-Termine</h3>
                    <p>
                        Mo, 1.6. bis Fr, 5.6.2020 (inklusive)<br />
                        immer 14 bis 18 Uhr <br />
                        Workshops: <br />
                        »Verstehen & Beobachten»<br />
                        »Standpunkt finden» <br />
                        »Ideen entwickeln»<br />
                        »Prototyp kreieren»<br />
                        »Testen» und »Feedback»<br />
                        <br />
                        *alle Termine sind flexibel, so dass wir sicher einen Kompromiss finden können, falls du jetzt schon weißt, dass du mal nicht kannst.
                    </p>

                    <h3 ref={scrollDestinationRef}>Anmelden</h3>
                    <p>
                        Du möchtest bei dem Projekt dabei sein? Dann trag dich gern ein!
                        Bei fragen, schreib mir einfach ne Mail an: info@forfuture.studio
                    </p>
                    <input type="text" value={firstname} onChange={onChangeFirstname} placeholder="Vorname"></input>
                    <input type="text" value={lastname} onChange={onChangeLastname} placeholder="Nachname"></input>
                    <input type="email" value={email} onChange={onChangeEmail} placeholder="E-Mail Adresse"></input>
                    <div className="age-select">
                        <span>Alter:</span>
                        <SelectorComponent value={items.indexOf(age)} onChange={onChangeAge} items={items}></SelectorComponent>
                    </div>
                    <textarea value={message} onChange={onChangeMessage} placeholder="Nachricht (max 100 Zeichen)" maxLength="100" rows="4"></textarea>
                    <button onClick={SignupClicked} style={{marginTop: "1.4em"}}>Anmeldung abschicken</button>
                    <p>Bis spätestens <span className="underline">25.5.2020</span> bekommst du Bescheid, ob du bei dem Projekt dabei bist. Ich freu mich auf dich!</p>

                    <h3>du bist jünger als 18?</h3>
                    <p>Sprich mit deinen Eltern! Zeig ihnen diese Seite und hole dir ihr “okay“, an diesem Projekt teilzunehmen. Nach der Anmeldung bekommst du in der Bestätigungsmail ein Einverständnis-Formular zugeschickt, das deine Eltern ausfüllen und zurückschicken müssen. Andernfalls darf ich leider (rechtlich) nicht mit dir arbeiten und das wäre schade! </p>
                
                    <h3 id="policy">Datenschutz</h3>
                    <p>Mit deinen Daten soll gut umgegangen werden! Aus dem Grund sind auf dieser Seite keine Analyticks- oder Trackingfunktionen eingebaut und lediglich <span className="underline">seriöse</span> Drittanbieter eingebunden, die den <span className="underline">Richtlinien der DSGVO</span> folgen d.h. ihre Server in Deutschland haben, sodass keine Datenweitergabe statt findet! Möchtest du mehr erfahren? Dann lies in den Bestimmungen die Details nach:</p>
                    <Link className="button" to={{
                        pathname: "/policy-detail",
                        state: {
                            transition: SlideLeft,
                            backLink: backLink
                        }
                    }}>Datenschutz</Link>
                    <Link className="button" to={{
                        pathname: "/impress",
                        state: {
                            transition: SlideLeft,
                            backLink: backLink
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
    );
}

export default WorkshopInfo;