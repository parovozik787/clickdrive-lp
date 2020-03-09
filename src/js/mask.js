
function maskInput() {
    let input = document.querySelector('#phone');
    let maskOptions = {
        mask: '+{38} (000) 000-00-00'
    };
    let mask = IMask(input, maskOptions);
}