import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import Dog from '../images/dog.gif';

function Survey06aPage() {

    const header = <span style={{"text-align": "center", "display": "block", "width": "100%"}}>NOCH DA?</span>;


    return (
        <SurveyFrame number={header} question="" prevPath="/06" nextPath="/07">
            <img className="gif" src={Dog}/>
        </SurveyFrame>
    );
}

export default Survey06aPage;