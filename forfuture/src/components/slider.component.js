import React, { useState } from 'react';

function SliderComponent({min, max, value, onChange}) {

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
            <input className="slider" onChange={change} value={sliderValue} type="range" min={min} max={max} step="1" />
        </div>
    );
}

export default SliderComponent;