import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypeAnimationComponent() {

    let typeEl = useRef(null);

    var options = {
        strings: [
            'Wie sieht die Welt aus?',
            '^500In 20 oder 30 Jahren?',
            '^400Mehr Plastik als Fische im Ozean?',
            '^400 4 Grad wärmer?',
            '^300Alle Gletscher geschmolzen?',
            '^300Meeresspiegel gestiegen?',
            '^200Hamburg unter Wasser?',
            '^300Warte^500...^1200ist Trump noch Präsident?^600?^500?',
            'Ist das unsere Zukunft?',
            'wt^100fycfö^50dfgah?',
            'Was tust du ^500_forfuture?^3000'
        ],
        typeSpeed: 55,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 800,
        showCursor: false,
        loop: true,
        onStop: (arrayPos, self) => {
            console.log("stop")
        }
    };

    useEffect(() => {
        const typed = new Typed(typeEl.current, options);
    })

    return (
        <div className="animation-container">
            <span className="animation-text" ref={typeEl}></span>
        </div>
    );
}

export default TypeAnimationComponent;