d3.json("/get_data", function(data){})
console.log(data);

var svgWidth = 960;
var svgHeight = 660;

var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };

  var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
  var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;


var svg = d3
    .select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

var baseBox = svg.append("rect")
    .attr("width", svgWidth - 30)
    .attr("height", 350)
    .attr("x", chartMargin.left)
    .attr("stroke", "black")
    .attr("stroke-width", "20")
    .attr("fill", "#0055cc");

d3.csv("./pokedata_cleaned.csv").then(function(pokeData) {

    // console.log(pokeData);
    // var pokedex_number = pokeData.map(data => data.pokedex_number);
    // console.log("number", pokedex_number);
    // var name = pokeData.map(data => data.name);
    // console.log("name", name);
    // var base_total = pokeData.map(data => data.base_total);
    // console.log("base_stat", base_total);

    pokeData.forEach(function(i) {
        svg.append("rect")
        .attr("width", base_total[i])
        .attr("height", 10)
        .attr("x", chartMargin.left + 500)
        .attr("y", chartMargin.top + 50)
        .attr("fill", "red")

      });

  }).catch(function(error) {
    console.log(error);
  });
