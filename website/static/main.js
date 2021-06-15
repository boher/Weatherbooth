var elms = document.querySelectorAll("#console-event");
var icon = document.querySelectorAll("#icon");  

  for(var i = 0; i < elms.length; i++) {
    var temp = elms[i].innerHTML;
    elms[i].innerHTML = temp;
  }

  for(var i = 0; i < icon.length; i++) {
    icon[i].innerHTML = "<span>&#8451;</span>";
  }
  
  $(function() {
    $('#change-temp').change(function() {
      if ($(this).prop('checked') == true){
        for(var i = 0; i < elms.length; i++){
          var temp = elms[i].innerHTML;
          var f = Math.round((temp * 9/5) + 32);
          elms[i].innerHTML = f;
        }
        for(var i = 0; i < icon.length; i++) {
          icon[i].innerHTML = "<span>&#8457;</span>";
        }
                for(var i = 0; i < t.length; i++){
                    t[i] = Math.round((t[i] * 9/5) + 32);
                }
      }else if ($(this).prop('checked') == false){
        for(var i = 0; i < elms.length; i++){
          var f = elms[i].innerHTML;
          var temp = Math.round((f - 32) * 5/9);
          elms[i].innerHTML = temp;
        }
        for(var i = 0; i < icon.length; i++) {
          icon[i].innerHTML = "<span>&#8451;</span>";
        }
                for(var i = 0; i < t.length; i++){
                    t[i] = Math.round((t[i] - 32) * 5/9);
                }
      }
    });
  })

function getConfig() {
  return {
    type: 'line',
    data: {
      datasets: []
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'hour'
          },
        }, ],
        yAxes: [{
          display: true,
          // type: 'logarithmic',
        }]
      },
      responsive: true
    }
  };
}

Array.prototype.convertData = function() {
  /// Function which convers X values to moment object
  for (i = 0; i < this.length; i++) {
    this[i] = {
      'x': moment(this[i].x),
      'y': this[i].y
    }
  }
  return this;
}

function create_chart(ctx, unit = 'hour') {

  config = getConfig()

  // Set unit
  config.options.scales.xAxes[0].time.unit = unit;

  // Assign endpoint from 'data-endpoint' attrib to config object
  config.endpoint = ctx.dataset.endpoint;

  return new Chart(ctx.getContext('2d'), config);
}

function load_data(chart, query = false) {

  var url = new URL("http://" + window.location.host + chart.config.endpoint),
    params = {
      'query': query
    }

  // If query is provided, add this to the URL
  if (query != false) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  }

  // Run the API call.
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((resp_data) => {

      // Push this data to the config object of this chart.
      resp_data.datasets.forEach((dataSet) => {
        chart.data.datasets.push({
          label: dataSet['title'],
          data: dataSet['data'].convertData(),
          fill: false,
          backgroundColor: '#b9f1fa',
        })
      });

      // Finally update that visual chart
      chart.update();

    });
};