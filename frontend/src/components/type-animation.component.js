import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypeAnimationComponent() {

    let typeEl = useRef(null);

    var options = {
        strings: [
            'Wie sieht die Welt aus?',
            'In 20 oder 30 Jahren?',
            'Mehr Plastik als Fische im Ozean?',
            '4 Grad wärmer?',
            'Alle Gletscher geschmolzen?',
            'Meeresspiegel gestiegen?',
            'Hamburg unter Wasser?',
            'Warte^200...^1000ist Trump noch Präsident?^400?^400?',
            'Ist das unsere Zukunft?',
            'wtfxyckjvfödfgkah?',
            'Was tust du ^200__forfuture?^3000'
        ],
        typeSpeed: 60,
        backSpeed: 50,
        backDelay: 880,
        showCursor: false,
        loop: true
    };

    useEffect(() => {
        const typed = new Typed(typeEl.current, options);
    })

    return (
        <div className="animation-container">
            <h2 className="animation-text" ref={typeEl}></h2>
        </div>
    );
}

export default TypeAnimationComponent;