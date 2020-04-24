import { useState } from 'react';

export function useLocalStorage(key, initial) {

    const getState = () => {
        let state = null;
        let saved = window.localStorage.getItem("for-future-state");
        if (saved) {
            state = JSON.parse(saved);
        }
        return state;
    }

    const [storedValue, setStoredValue] = useState(() => {
        let state = getState();
        if (!state) {
            window.localStorage.setItem("for-future-state", JSON.stringify({}));
            state = {};
        }
        if (initial != null && state[key] == null) {
            state[key] = initial;
            window.localStorage.setItem("for-future-state", JSON.stringify(state));
        }
        // Parse stored json or if none return initialValue
        return state[key];
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        let state = getState();
        if (!state) {
            state = {};
        }
        state[key] = valueToStore;
        // Save to local storage
        window.localStorage.setItem("for-future-state", JSON.stringify(state));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }