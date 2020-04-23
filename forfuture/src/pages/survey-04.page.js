import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import SliderComponent from '../components/slider.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey04Page() {

    const [success, setSuccess] = useLocalStorage("success", 3);
    const [education, setEducation] = useLocalStorage("education", 3);
    const [health, setHealth] = useLocalStorage("health", 3);
    const [environment, setEnvironment] = useLocalStorage("environment", 3);
    const [family, setFamily] = useLocalStorage("family", 3);

    const onChangeSuccess = (evt) => {
        setSuccess(evt.value);
    }
    const onChangeEducation = (evt) => {
        setEducation(evt.value);
    }
    const onChangeHealth = (evt) => {
        setHealth(evt.value);
    }
    const onChangeEnvironment = (evt) => {
        setEnvironment(evt.value);
    }
    const onChangeFamily = (evt) => {
        setFamily(evt.value);
    }

    return (
        <SurveyFrame number="04/12" question="Wie wichtig sind diese Dinge für deine persönliche Zukunft" prevPath="/03" nextPath="/05">
            <p>Bewerte: 1 = kaum, 5 = sehr wichtig!</p>
            <SliderComponent title="Erfolg" onChange={onChangeSuccess} min={1} max={5} value={success}></SliderComponent>
            <SliderComponent title="Bildung" onChange={onChangeEducation} min={1} max={5} value={education}></SliderComponent>
            <SliderComponent title="Gesundheit" onChange={onChangeHealth} min={1} max={5} value={health}></SliderComponent>
            <SliderComponent title="Umwelt" onChange={onChangeEnvironment} min={1} max={5} value={environment}></SliderComponent>
            <SliderComponent title="Freunde/Famile" onChange={onChangeFamily} min={1} max={5} value={family}></SliderComponent>
        </SurveyFrame>
    );
}

export default Survey04Page;