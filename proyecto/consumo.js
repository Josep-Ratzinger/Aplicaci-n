const ctx = document.getElementById('consumoChart').getContext('2d');

const consumoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'kWh Consumidos',
            data: [120, 135, 100, 160, 140, 180, 175, 200, 190, 210, 220, 205],
            backgroundColor: [
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)',
                'rgba(0, 255, 255, 0.7)'
            ],
            borderColor: [
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 255, 255, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    }
});
