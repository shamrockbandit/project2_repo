d3.json('/get_data').then(function(data){

    console.log(data.poke_gen)

    var generation = [];

    for(var i = 0; i < data.length; i++){
        generation.push(data[i].poke_gen)
    }

    console.log(generation)
})