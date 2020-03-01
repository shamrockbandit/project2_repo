// Call the dataTables jQuery plugin
$(document).ready(function() {
  d3.json('/get_data').then(function(info){
     $('#dataTable').DataTable();
  });
});

oTable = $('#myTable').DataTable();   //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said
$('#myInputTextField').keyup(function(){
      oTable.search($(this).val()).draw() ;
})


