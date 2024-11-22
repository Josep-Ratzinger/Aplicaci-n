document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("maximoConsumoChart").getContext("2d");

    const data = {
        labels: ["BT2", "BT3", "BT4", "BT5", "BT6"],
        datasets: [
            {
                label: "Máximo Consumo (kWh)",
                data: [30, 140, 240, 350, 500],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "white"
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "white"
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)"
                }
            },
            y: {
                ticks: {
                    color: "white"
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)"
                }
            }
        }
    };

    new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});

