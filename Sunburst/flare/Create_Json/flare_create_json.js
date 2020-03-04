d3.csv("pokedata_cleaned.csv", (d) => {

    return {

        name: d.name,
        generation: d.generation,
        type: d.type1
    };
}).then((data) => {

    console.log(data[0]);

});
