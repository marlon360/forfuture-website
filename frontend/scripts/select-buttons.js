export function buttonSetup() {
    let buttons = document.querySelectorAll(".survey-details button");

    for (let button of buttons) {
        button.addEventListener('click', () => {
            setAllOff(buttons);
            button.classList.add('on');
        })
    }

    function setAllOff(buttons) {
        for (let button of buttons) {
            button.classList.remove('on');
        }
    }
}