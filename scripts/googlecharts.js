google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Sofás', 33],
    ['Camas', 18],
    ['Escritorios', 27],
    ['Mesas', 13],
  ]);

  var options = {
    title: 'Top muebles escaneados en VR con inHomeAR',
    backgroundColor: '#e6e2df',
    titleTextStyle: { color: 'black', fontName: 'Montserrat', fontSize: 22 },
    legend: { textStyle: { color: 'black', fontName: 'Montserrat', fontSize: 16 } },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
