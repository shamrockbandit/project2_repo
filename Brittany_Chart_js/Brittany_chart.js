var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Gen I","Gen II","Gen III","Gen IV","Gen V","Gen VI","Gen VII"],
        datasets: [{
            label: 'Normal',
            backgroundColor: "#caf270",
            data: [22, 15, 18, 17, 17, 8, 12],
        }, {
            label: 'Engineer',
            backgroundColor: "#45c490",
            data: [12, 59, 5, 56, 58,12, 59, 85, 23],
        }, {
            label: 'Government',
            backgroundColor: "#008d93",
            data: [12, 59, 5, 56, 58,12, 59, 65, 51],
        }, {
            label: 'Political parties',
            backgroundColor: "#2e5468",
            data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
        }],
    },
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
    }
});