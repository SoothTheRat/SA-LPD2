
function calcular() {
    let celsius = document.getElementById("temperatura").value;
    let inputFarenheit = document.getElementById("Farenheit")
    let farenheit = (celsius * 9/5) + 32;
    inputFarenheit.value = farenheit;

    
    let inputKelvin = document.getElementById("Kelvin")
    let kelvin = (parseFloat(celsius) + parseFloat(273.15));
    inputKelvin.value = kelvin;
}