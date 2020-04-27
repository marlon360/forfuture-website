export function Submit() {
    return new Promise((resolve, reject) => {
        let saved = window.localStorage.getItem("for-future-state");
        if (saved) {
            let state = JSON.parse(saved);
            
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