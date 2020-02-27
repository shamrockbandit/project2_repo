var svgWidth = 960;
var svgHeight = 660;

var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };
  
  // Define dimensions of the chart area
  var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
  var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;
  
  // Select body, append SVG area to it, and set the dimensions
  var svg = d3
    .select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

    var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("./pokedata_cleaned.csv").then(function(pokeData) {

    console.log(pokeData);
  
    // log a list of names
    var pokedex_number = pokeData.map(data => data.pokedex_number);
    console.log("number", pokedex_number);
    var base_total = pokeData.map(data => data.base_total);
    console.log("base_stat", base_total);
  
    var barSpacing = 1; // desired space between each bar
    var scaleY = 10; // 10x scale on rect height
  
    // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    var barWidth = 1;
  
    // @TODO
    // Create code to build the bar chart using the tvData.
    chartGroup.selectAll(".bar")
      .data(pokeData)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("width", d => barWidth)
      .attr("height", d => d.base_total * scaleY)
      .attr("x", (d, i) => i * (barWidth + barSpacing))
      .attr("y", d => d.base_total - 100)
      .on("click", function(d, i) {
        d3.select(this)
        .attr("fill", "red")
        alert(`This is ${pokedex_number[i]}`)
      });

  }).catch(function(error) {
    console.log(error);
  });