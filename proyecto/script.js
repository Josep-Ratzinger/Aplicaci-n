document.addEventListener("DOMContentLoaded", function () {
    const percentageEl = document.getElementById("percentage");
    const extraPagoFrame = document.getElementById("extraPagoFrame");
    const waveEl = document.querySelector(".wave");

    const maxWaveHeight = 280;
    let percentage = 200;

    function updateDisplay() {
        // Calculamos el porcentaje real basado en el tamaño total del círculo
        let calculatedPercentage = Math.min(Math.round((percentage / maxWaveHeight) * 100), 100);

        // Actualizamos el porcentaje visible en el círculo
        percentageEl.innerText = `${calculatedPercentage}%`;

        // Actualizamos la altura de la onda según el tamaño en píxeles
        let waveHeight = Math.min(percentage, maxWaveHeight);
        waveEl.style.height = `${waveHeight}%`;

        // Mostrar "Pago Extras" si el porcentaje es mayor a 100%
        if (calculatedPercentage > 100) {
            extraPagoFrame.style.display = "block";
        } else {
            extraPagoFrame.style.display = "none";
        }
    }


    setTimeout(() => {
        percentage = 50;
        updateDisplay();
    }, 6000);

    updateDisplay();
});


