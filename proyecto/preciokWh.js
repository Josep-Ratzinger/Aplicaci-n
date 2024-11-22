document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("preciokWhChart").getContext("2d");

    const data = {
        labels: ["BT2", "BT3", "BT4", "BT5", "BT6"],
        datasets: [
            {
                label: "Precio por kWh (S/)",
                data: [0.15, 0.30, 0.50, 0.70, 1.00],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
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



