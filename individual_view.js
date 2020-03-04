d3.json('/get_data').then(function(data){
          
       
  console.log(data)
d3.select("#testButton").on("click", function() {
var myImg = document.getElementById('poke-image');
console.log(myImg);
var userPokename = d3.select("#p_name").node().value;
var filteredData = data.filter(row => row.poke_name === userPokename); 
document.querySelector("#hp-data").innerHTML = filteredData[0].hp
document.querySelector("#attack-data").innerHTML = filteredData[0].attack
document.querySelector("#defense-data").innerHTML = filteredData[0].defense
document.querySelector("#sp-atk-data").innerHTML = filteredData[0].sp_attack
document.querySelector("#sp-def-data").innerHTML = filteredData[0].sp_defense
document.querySelector("#speed-data").innerHTML = filteredData[0].speed
document.querySelector("#base-stat-data").innerHTML = filteredData[0].base_total
document.querySelector("#poke-name").innerHTML = filteredData[0].poke_name
document.querySelector("#ability1-data").innerHTML = filteredData[0].poke_ability1
document.querySelector("#ability2-data").innerHTML = filteredData[0].poke_ability2
document.querySelector("#type1").innerHTML = "[" + filteredData[0].poke_type1
document.querySelector("#type2").innerHTML = "/ " + filteredData[0].poke_type2 + "]"
myImg.src = filteredData[0].image;

})
})