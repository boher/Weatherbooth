var elms = document.querySelectorAll("#console-event");
	var icon = document.querySelectorAll("#icon");

    var t = {{weather.t}};
    var h = {{weather.h}};
    var pe = {{weather.pe}};
    var a = {{weather.a}};
    var w = {{weather.w}};
    var c = {{weather.c}};
    var hourly = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", 
                    "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]

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

  var ctx = document.getElementById('tempChart').getContext('2d');
  ctx.width = 400;
  ctx.height = 400;
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hourly,
          datasets: [{
              data: t,
			  label: "Temp",
			  borderColor: 'rgb(185, 241, 250)',
              backgroundColor: '#b9f1fa',
              fill: true,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  var ctx = document.getElementById('humChart').getContext('2d');
  ctx.width = 400;
  ctx.height = 400;
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hourly,
          datasets: [{
              data: h,
			  label: "Humidity %",
			  borderColor: 'rgb(185, 241, 250)',
              backgroundColor: '#b9f1fa',
              fill: true,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  }); 

  var ctx = document.getElementById('peChart').getContext('2d');
  ctx.width = 400;
  ctx.height = 400;
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hourly,
          datasets: [{
              data: pe,
			  label: "Volume mm",
			  borderColor: 'rgb(185, 241, 250)',
              backgroundColor: '#b9f1fa',
              fill: true,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  var ctx = document.getElementById('aChart').getContext('2d');
  ctx.width = 400;
  ctx.height = 400;
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hourly,
          datasets: [{
              data: a,
			  label: "Air pressure pHa",
			  borderColor: 'rgb(185, 241, 250)',
              backgroundColor: '#b9f1fa',
              fill: true,
              borderWidth: 1,
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: false
              }
          }
      }
  });

  var ctx = document.getElementById('wChart').getContext('2d');
  ctx.width = 400;
  ctx.height = 400;
  var myChart = new Chart(ctx, {
      type: 'line',
      fill: true,
      data: {
          labels: hourly,
          datasets: [{
              data: w,
			  label: "Windspeed m/s",
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
  });

  var ctx = document.getElementById('cChart').getContext('2d');
  ctx.width = 400;
  ctx.height = 400;
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: hourly,
          fill: true,
          datasets: [{
              data: c,
			  label: "Clouds %",
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
  });