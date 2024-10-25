document.addEventListener("DOMContentLoaded", function () {
    const mesSelect = document.getElementById('mes');

    // Seleccionar los elementos de los valores de pago
    const pagoFijoEl = document.getElementById('pagoFijo');
    const pagoTotalEl = document.getElementById('pagoTotal');
    const pagoExtrasEl = document.getElementById('pagoExtras');

    // Simular cambio de información según el mes seleccionado
    mesSelect.addEventListener('change', function () {
        const selectedMes = mesSelect.value;
        let pagoFijo, pagoTotal, pagoExtras;

        switch (selectedMes) {
            case 'enero':
                pagoFijo = "S/300.00";
                pagoTotal = "S/500.00";
                pagoExtras = "S/100.00";
                break;
            case 'febrero':
                pagoFijo = "S/320.00";
                pagoTotal = "S/540.00";
                pagoExtras = "S/120.00";
                break;
            case 'marzo':
                pagoFijo = "S/310.00";
                pagoTotal = "S/520.00";
                pagoExtras = "S/110.00";
                break;
            case 'abril':
                pagoFijo = "S/330.00";
                pagoTotal = "S/560.00";
                pagoExtras = "S/130.00";
                break;
            case 'mayo':
                pagoFijo = "S/320.00";
                pagoTotal = "S/540.00";
                pagoExtras = "S/120.00";
                break;
            case 'junio':
                pagoFijo = "S/350.00";
                pagoTotal = "S/600.00";
                pagoExtras = "S/150.00";
                break;
            case 'julio':
                pagoFijo = "S/320.00";
                pagoTotal = "S/540.00";
                pagoExtras = "S/120.00";
                break;
            case 'agosto':
                pagoFijo = "S/310.00";
                pagoTotal = "S/510.00";
                pagoExtras = "S/110.00";
                break;
            case 'setiembre':
                pagoFijo = "S/340.00";
                pagoTotal = "S/580.00";
                pagoExtras = "S/140.00";
                break;
            case 'octubre':
                pagoFijo = "S/370.00";
                pagoTotal = "S/640.00";
                pagoExtras = "S/170.00";
                break;
            case 'noviembre':
                pagoFijo = "S/330.00";
                pagoTotal = "S/560.00";
                pagoExtras = "S/130.00";
                break;
            case 'diciembre':
                pagoFijo = "S/390.00";
                pagoTotal = "S/680.00";
                pagoExtras = "S/190.00";
                break;
            default:
                pagoFijo = "S/300.00";
                pagoTotal = "S/500.00";
                pagoExtras = "S/100.00";
        }

        // Actualiza solo los valores de pago, no las etiquetas
        pagoFijoEl.textContent = pagoFijo;
        pagoTotalEl.textContent = pagoTotal;
        pagoExtrasEl.textContent = pagoExtras;
    });
});
