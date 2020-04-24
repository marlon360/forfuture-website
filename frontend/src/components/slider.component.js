import React, { useState } from 'react';

function SliderComponent({min, max, value, onChange, title}) {

    const [sliderValue, setSliderValue] = useState(value != null ? value : min);

    const change = (e) => {
        const value = parseInt(e.target.value)
        setSliderValue(value);
        if (onChange != null) {
            onChange({value});
        }
    }

    return (
        <div className="slider-container">
            <span className="output">{ sliderValue }</span>
            <div style={{width: '100%'}}>
                <span>{ title ? title : "Slider" }</span>
                <input className="slider" onChange={change} value={sliderValue} type="range" min={min} max={max} step="1" />
            </div>
        </div>
    );
}

export default SliderComponent;