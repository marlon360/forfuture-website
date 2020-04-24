export function Submit() {
    return new Promise((resolve, reject) => {
        let saved = window.localStorage.getItem("for-future-state");
        if (saved) {
            let state = JSON.parse(saved);
            console.log(state);
            resolve();
        } else {
            reject("Du musst vorher alle Felder ausfüllen!");
        }
    });
}