import React from 'react';

function SurveyFrame({number, question, children}) {

    return (
        <div className="survey">
            <div className="survey-content">
                <h3 className="number">{ number }</h3>
                <h2 className="question">{ question }</h2>
                <div className="survey-details">
                    { children }
                </div>
            </div>
            <div className="arrows">
                <a data-barba-prevent href="../index.html">
                    {/* <img className="left-arrow" src="../icons/arrow.svg" /> */}
                </a>
                <a className="forward" data-direction="forward" href="#">
                    {/* <img className="right-arrow" src="../icons/arrow.svg" /> */}
                </a>
            </div>
        </div>
    );
}

export default SurveyFrame;