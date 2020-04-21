export function sliderSetup() {

    let slider = document.querySelectorAll('input.slider');
    let output = document.querySelectorAll('span.output');

    for (let i = 0; i < slider.length; i++) {
        output[i].innerHTML = slider[i].value;
        slider[i].oninput = function () {
            output[i].innerHTML = this.value;
        }
    }

}
