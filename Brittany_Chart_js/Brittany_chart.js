var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Gen I","Gen II","Gen III","Gen IV","Gen V","Gen VI","Gen VII"],
        datasets: [{
            label: 'Normal',
            backgroundColor: "#a8a77a",
            data: [22, 15, 18, 17, 17, 8, 12],
        }, {
            label: 'Water',
            backgroundColor: "#6390f0",
            data: [32, 18, 29, 15, 17, 9, 13],
        }, {
            label: 'Grass',
            backgroundColor: "#008d93",
            data: [14, 10, 17, 15, 20, 9, 13],
        }, {
            label: 'Fire',
            backgroundColor: "#2e5468",
            data: [13, 10, 8, 6, 15, 8, 8],
        }, {
            label: 'Electric',
            backgroundColor: "#2e5468",
            data: [12, 8, 4, 7, 11, 3, 7],
        }, {
            label: 'Ice',
            backgroundColor: "#2e5468",
            data: [9, 5, 7, 7, 7, 4, 1],
        }, {
            label: 'Ground',
            backgroundColor: "#2e5468",
            data: [14, 10, 13, 11, 11, 2, 4],
        }, {
            label: 'Flying',
            backgroundColor: "#2e5468",
            data: [20, 19, 12, 16, 18, 8, 8],
        }, {
            label: 'Poison',
            backgroundColor: "#2e5468",
            data: [33, 4, 5, 8, 7, 2, 7],
        }, {
            label: 'Fighting',
            backgroundColor: "#2e5468",
            data: [9, 3, 7, 8, 16, 4, 9],
        }, {
            label: 'Dark',
            backgroundColor: "#2e5468",
            data: [7, 6, 10, 7, 16, 6, 2],
        }, {
            label: 'Psychic',
            backgroundColor: "#2e5468",
            data: [15, 10, 20, 9, 16, 6, 9],
        }, {
            label: 'Bug',
            backgroundColor: "#2e5468",
            data: [12, 10, 14, 9, 18, 3, 11],
        }, {
            label: 'Rock',
            backgroundColor: "#2e5468",
            data: [11, 7, 12, 7, 10, 8, 5],
        }, {
            label: 'Steel',
            backgroundColor: "#2e5468",
            data: [6, 4, 9, 11, 12, 4, 7],
        }, {
            label: 'Dragon',
            backgroundColor: "#2e5468",
            data: [5, 2, 10, 6, 10, 9, 8],
        }, {
            label: 'Fairy',
            backgroundColor: "#2e5468",
            data: [6, 8, 6, 2, 3, 13, 12],
        }, {
            label: 'Ghost',
            backgroundColor: "#2e5468",
            data: [4, 1, 6, 8, 9, 8, 10],
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