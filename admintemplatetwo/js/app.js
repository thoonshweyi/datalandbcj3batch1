$(document).ready(function(){

    // Start Left Side Bar
    $(".sidebarlinks").click(function(){
        $(".sidebarlinks").removeClass("currents");
        $(this).addClass("currents");
    });
    // End Left Side Bar
});

// Start Js Area

// Start Top Sidebar
// start notify & userlogout

// start dropdown
function dropbtn(e){
    console.log(e);

    e.target.parentElement.nextElementSibling.classList.toggle('show');
}
// end dropdown

// end notify & user logout
// End Top Sidebar

// Start Expense Area
  const ctx = document.getElementById('mypiechart');

  new Chart(ctx, {
    type: 'doughnut',

    data: {
      datasets: [{
        data: [12, 19, 3]
      }]
    },
    options: {
      responsive:false
    }
  });

// End Expense Area

// Start Earning Area
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Sale Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}


// End Earning Area
// End Js Area

