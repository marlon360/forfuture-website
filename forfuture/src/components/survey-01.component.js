import React from 'react';

function Survey01Component() {
    return (
        <div class="survey" id="page-01">
            <div class="survey-content">
                <h3 class="number">01/12</h3>
                <h2 class="question">Wie alt bist du?</h2>
                <div class="survey-details">
                    <button data-state="age" value="-16" class="small">-16</button>
                    <button data-state="age" value="16" class="small">16</button>
                    <button data-state="age" value="17" class="small">17</button>
                    <button data-state="age" value="18" class="small">18</button>
                    <button data-state="age" value="19" class="small">19</button>
                    <button data-state="age" value="19+" class="small">19+</button>
                </div>
            </div>
            <div class="arrows">
                <a data-barba-prevent href="../index.html">
                    {/* <img class="left-arrow" src="../icons/arrow.svg" /> */}
                </a>
                <a class="forward" data-direction="forward" href="#">
                    {/* <img class="right-arrow" src="../icons/arrow.svg" /> */}
                </a>
            </div>
        </div>
    );
}

export default Survey01Component;