export function sliderSetup() {

    let slider = document.querySelector('input.slider');
    let output = document.querySelector('span.output');

    if (output != null && slider != null) {
        output.innerHTML = slider.value;
        slider.oninput = function () {
            output.innerHTML = this.value;
        }
    }
    
}
