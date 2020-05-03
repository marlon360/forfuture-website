export function Submit() {
    return new Promise((resolve, reject) => {
        let saved = window.localStorage.getItem("for-future-state");
        if (saved) {
            let state = JSON.parse(saved);
            state = cleanState(state);
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state)
            };
            fetch('/api/submit/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                })
                .catch(error => reject(error))

        } else {
            reject("Du musst vorher alle Felder ausfüllen!");
        }
    });
}


function cleanState(state) {

    if (state.future == "Nein") {
        state.democracy = null;
        state.money = null;
        state.success = null;
        state.education = null;
        state.health = null;
        state.environment = null;
        state.family = null;
        state.futurelist = null;
        state.changefuture = null;
        state.climatechange = null;
    }

    if (state.sustainability == "Nein") {
        state.sustainabilityscale = null;
    }
    if (state.sustainability == "Ja") {
        state.nosustainability = null;
    }

    if (state.sustainabilityeveryday == "Nie") {
        state.sustainabilityactions = null;
        state.sustainabilitymotivation = null;
    } else {
        state.nosustainabilitymotivation = null;
    }

    return state;

}