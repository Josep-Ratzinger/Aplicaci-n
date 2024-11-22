document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("cargoFijoChart").getContext("2d");

    const data = {
        labels: ["BT2", "BT3", "BT4", "BT5", "BT6"],
        datasets: [
            {
                label: "Cargo Fijo Mensual (S/)",
                data: [25.62, 24.51, 24.51, 30.00, 35.00],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
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






