//   // global function declaration
// function _renderInnerGrid(pastVersions, cellRef, $cell) {
// 	cellRef.querySelector('zing-grid').setData(pastVersions);
//   }


  d3.json('/get_data').then(function(info){

  const data = info

  console.log(data);
  
  var tbody = d3.select("tbody");
    data.forEach((getData) => {
    var row = tbody.append("tr")
    })


  })
 