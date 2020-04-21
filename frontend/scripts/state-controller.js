export function stateSetup() {
    const buttons = document.querySelectorAll("button[data-state]");

    for (let button of buttons) {
        const key = button.dataset.state;
        const storedKey = window.state[key];

        button.classList.remove('on');
        if (storedKey != null) {
            if (button.value == storedKey) {
                button.classList.add('on');
            }
        }
        button.addEventListener('click',() => {
            window.state[key] = button.value;            
            window.setState();
        });
    }

    const sliders = document.querySelectorAll("input.slider[data-state]");

    for (let slider of sliders) {
        const key = slider.dataset.state;
        const storedKey = window.state[key];

        if (storedKey != null) {
            slider.value = storedKey;
        }
        slider.addEventListener('change',() => {
            window.state[key] = slider.value;            
            window.setState();
        });
    }

    const textareas = document.querySelectorAll("textarea[data-state]");

    for (let textarea of textareas) {
        const key = textarea.dataset.state;
        const storedKey = window.state[key];

        if (storedKey != null) {
            textarea.value = storedKey;
        }
        textarea.addEventListener('input',() => {
            window.state[key] = textarea.value;            
            window.setState();
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    stateSetup();
})