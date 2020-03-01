
d3.json('/get_data').then(function(info){

    console.log(info)

    var data = info
    var tbody = d3.select("tbody")
    data.forEach((getData) => {
    tbody.append("tr")
    })  
  })