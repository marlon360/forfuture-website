import React, { useState } from 'react';

function SelectorComponent({items, onChange, size, value}) {

    // default
    size = size ? size : "medium";

    const [selected, setSelected] = useState(value != null ? value : -1);

    const select = (index) => {
        setSelected(index);
        if (onChange != null) {
            onChange({index, item: items[index]});
        }
    }

    return (
        <>
            {items.map((item, i) => {     
                return (<button className={`${size} ${selected === i ? "on" : ""}`} onClick={() => select(i)} key={i}>{ item }</button>) 
            })}
        </>
    );
}

export default SelectorComponent;