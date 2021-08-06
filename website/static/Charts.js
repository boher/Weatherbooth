// Update chart based on console event triggered
function updateChart(chart, attrValues, labelTxt) {
  chart.data.datasets.forEach((dataset) => {
        dataset.data = attrValues;
    });
  chart.data.datasets[0].label = labelTxt;
  chart.update();
};

// Create line area charts with default configurations for all 6 attributes
function getChart(ctx, attrValues, labelTxt) {
  const hourly = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", 
                "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]

  var config = {
    type: 'line',
    data: {
        labels: hourly,
        fill: true,
        datasets: [{
            data: attrValues,
      label: labelTxt,
      borderColor: 'rgb(185, 241, 250)',
            backgroundColor: '#b9f1fa',
            fill: true,
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
  }

  var newChart = new Chart(ctx, config);
  return newChart
};