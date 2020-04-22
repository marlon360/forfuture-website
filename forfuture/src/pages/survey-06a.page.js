import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey06aPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="NOCH DA?" question="" prevPath="/06" nextPath="/07">
            <div>
                <iframe src="https://giphy.com/embed/X8lpsy3YBcIJW" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            <p><a href="https://giphy.com/gifs/X8lpsy3YBcIJW">via GIPHY</a></p>
        </SurveyFrame>
    );
}

export default Survey06aPage;