// BRITANY - Changed data source to flash api
d3.json('/get_data').then((data) =>{
   
    // Data check to ensure all data is coming through
    console.log(data);


    // Chart.js accepts simple arrays of data
    // Data needs to be broken down into Count of Pokemon per Generation Per Type

    // Variable for original pokemon data
    var pokedata = data

    // Arrays to hold data for chart
    var Normal = []
    var Water = []
    var Grass = []
    var Fire = []
    var Electric = []
    var Ice = []
    var Ground = []
    var Flying = []
    var Poison = []
    var Fighting = []
    var Dark = []
    var Psychic = []
    var Bug = []
    var Rock = []
    var Steel = []
    var Dragon = []
    var Fairy = []
    var Ghost = []


    // Loops through Generations 1 through 8
    for (i = 1; i < 8; i++){

        // Data filtered by generation
        var gen = pokedata.filter((gen) => gen.generation == i)

            // Data filtered by pokemon type
            var gen_norm = gen.filter((type) => type.type1 == 'normal')
            var gen_water = gen.filter((type) => type.type1 == 'water');
            var gen_grass = gen.filter((type) => type.type1 == 'grass');
            var gen_fire = gen.filter((type) => type.type1 == 'fire');
            var gen_elec = gen.filter((type) => type.type1 == 'electric');
            var gen_ice = gen.filter((type) => type.type1 == 'ice');
            var gen_ground = gen.filter((type) => type.type1 == 'ground');
            var gen_flying = gen.filter((type) => type.type1 == 'flying');
            var gen_poi = gen.filter((type) => type.type1 == 'poison');
            var gen_fight = gen.filter((type) => type.type1 == 'fighting');
            var gen_dark = gen.filter((type) => type.type1 == 'dark');
            var gen_psy = gen.filter((type) => type.type1 == 'psychic');
            var gen_bug = gen.filter((type) => type.type1 == 'bug');
            var gen_rock = gen.filter((type) => type.type1 == 'rock');
            var gen_steel = gen.filter((type) => type.type1 == 'steel');
            var gen_drag = gen.filter((type) => type.type1 == 'dragon');
            var gen_fair = gen.filter((type) => type.type1 == 'fairy');
            var gen_gho = gen.filter((type) => type.type1 == 'ghost');

            // Used push function to append COUNT of pokemon per type into appropriate array
            // This provides counts of each type as the generations loop
            Normal.push(Object.keys(gen_norm).length)
            Water.push(Object.keys(gen_water).length)
            Grass.push(Object.keys(gen_grass).length)
            Fire.push(Object.keys(gen_fire).length)
            Electric.push(Object.keys(gen_elec).length)
            Ice.push(Object.keys(gen_ice).length)
            Ground.push(Object.keys(gen_ground).length)
            Flying.push(Object.keys(gen_flying).length)
            Poison.push(Object.keys(gen_poi).length)
            Fighting.push(Object.keys(gen_fight).length)
            Dark.push(Object.keys(gen_dark).length)
            Psychic.push(Object.keys(gen_psy).length)
            Bug.push(Object.keys(gen_bug).length)
            Rock.push(Object.keys(gen_rock).length)
            Steel.push(Object.keys(gen_steel).length)
            Dragon.push(Object.keys(gen_drag).length)
            Fairy.push(Object.keys(gen_fair).length)
            Ghost.push(Object.keys(gen_gho).length)
        };

        
        // Chart Labels and Title
        var gen_labels = ["Gen I","Gen II","Gen III","Gen IV","Gen V","Gen VI","Gen VII"]
        var chart_title = "Count of Pokemon Type by Generation"


        // Chart.js script
        var ctx = document.getElementById("chart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: gen_labels,
                datasets: [{
                    label: 'Normal',
                    backgroundColor: "#a8a77a",
                    data: Normal,
                }, {
                    label: 'Water',
                    backgroundColor: "#6390f0",
                    data: Water,
                }, {
                    label: 'Grass',
                    backgroundColor: "#7ac74c",
                    data: Grass,
                }, {
                    label: 'Fire',
                    backgroundColor: "#ee8130",
                    data: Fire,
                }, {
                    label: 'Electric',
                    backgroundColor: "#f7d02c",
                    data: Electric,
                }, {
                    label: 'Ice',
                    backgroundColor: "#96d9d6",
                    data: Ice,
                }, {
                    label: 'Ground',
                    backgroundColor: "#e2bf65",
                    data: Ground,
                }, {
                    label: 'Flying',
                    backgroundColor: "#a98ff3",
                    data: Flying,
                }, {
                    label: 'Poison',
                    backgroundColor: "#a33ea1",
                    data: Poison,
                }, {
                    label: 'Fighting',
                    backgroundColor: "#c22e28",
                    data: Fighting,
                }, {
                    label: 'Dark',
                    backgroundColor: "#705746",
                    data: Dark,
                }, {
                    label: 'Psychic',
                    backgroundColor: "#f95587",
                    data: Psychic,
                }, {
                    label: 'Bug',
                    backgroundColor: "#a6b91a",
                    data: Bug,
                }, {
                    label: 'Rock',
                    backgroundColor: "#b6a136",
                    data: Rock,
                }, {
                    label: 'Steel',
                    backgroundColor: "#b7b7ce",
                    data: Steel,
                }, {
                    label: 'Dragon',
                    backgroundColor: "#6f35fc",
                    data: Dragon,
                }, {
                    label: 'Fairy',
                    backgroundColor: "#d685ad",
                    data: Fairy,
                }, {
                    label: 'Ghost',
                    backgroundColor: "#735797",
                    data: Ghost,
                }],
            },
        options: {
            title:{
                display: true,
                text: chart_title
            },
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
                display: true,
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
});