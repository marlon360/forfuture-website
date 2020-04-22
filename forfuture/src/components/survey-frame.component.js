import React from 'react';
import { Link } from "react-router-dom";

import Arrow from '../icons/arrow.svg';
import { SlideRight, SlideLeft } from '../transitions/transitions';

function SurveyFrame({number, question, children, prevPath, nextPath, nextPathInactive}) {

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
                <Link className="backward" to={{
                    pathname: prevPath,
                    state: {
                        transition: SlideRight
                    }
                }}>
                    <img className="left-arrow" src={Arrow} />
                </Link>
                <Link className={`backward ${nextPathInactive ? "inactive" : ""}`} to={{
                    pathname: nextPath,
                    state: {
                        transition: SlideLeft
                    }
                }}>
                    <img className="right-arrow" src={Arrow} />
                </Link>
            </div>
        </div>
    );
}

export default SurveyFrame;