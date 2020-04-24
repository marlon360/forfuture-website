import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import Dog from '../images/dog.gif';

function Survey06aPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="NOCH DA?" question="" prevPath="/06" nextPath="/07">
            <img className="gif" src={Dog}/>
        </SurveyFrame>
    );
}

export default Survey06aPage;