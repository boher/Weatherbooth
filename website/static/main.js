var elms = document.querySelectorAll("#console-event");
var icon = document.querySelectorAll("#icon");  
var rainId = document.querySelectorAll("#rainID");
var rainV = document.querySelectorAll('#rainValue');
var wsId = document.querySelectorAll("#wsID");
var wsV = document.querySelectorAll("#wsValue");

  for(var i = 0; i < icon.length; i++) {
    icon[i].innerHTML = "<span>&#8451;</span>";
  }

  for(var i = 0; i < rainId.length; i++) {
    rainId[i].innerHTML = "mm";
  }

  for(var i = 0; i < wsId.length; i++) {
    wsId[i].innerHTML = "m/s";
  }
  
  $(function() {
    $('#change-units').change(function() {
      if ($(this).prop('checked') == true){
        for(var i = 0; i < elms.length; i++){
          var temp = elms[i].innerHTML;
          var f = Math.round((temp * 9/5) + 32);
          elms[i].innerHTML = f;
        }
        for(var i = 0; i < icon.length; i++) {
          icon[i].innerHTML = "<span>&#8457;</span>";
        }
        for(var i = 0; i < rainId.length; i++) {
          rainId[i].innerHTML = "inch";
        }
        for(var i = 0; i < rainV.length; i++) {
          var rain = rainV[i].innerHTML;
          var g = rain/25.4;
          rainV[i].innerHTML = g.toFixed(4);
        }
        for(var i = 0; i < wsV.length; i++) {
          var wind = wsV[i].innerHTML;
          var g = wind/2.237;
          wsV[i].innerHTML = g.toFixed(2);
        }
        for(var i = 0; i < wsId.length; i++) {
          wsId[i].innerHTML = "miles/h";
        }
        for(var i = 0; i < t.length; i++){
          t[i] = Math.round((t[i] * 9/5) + 32);
        }
        for(var i = 0; i < pe.length; i++){
          var rain = pe[i];
          var g = rain/25.4;
          pe[i] = g.toFixed(4);
        }
        for(var i = 0; i < w.length; i++){
          var rain = w[i];
          var g = rain/2.237;
          w[i] = g.toFixed(2);
        }

        tempChart.data.datasets[0].data = t;
        tempChart.data.datasets[0].label = 'Temp in F';
        tempChart.update();
        rainChart.data.datasets[0].data = pe;
        rainChart.data.datasets[0].label = 'Volume in inch';
        rainChart.update();
        windChart.data.datasets[0].data = w;
        windChart.data.datasets[0].label = 'WindSpeed miles/h';
        windChart.update();

      }else if ($(this).prop('checked') == false){
        for(var i = 0; i < elms.length; i++){
          var f = elms[i].innerHTML;
          var temp = Math.round((f - 32) * 5/9);
          elms[i].innerHTML = temp;
        }
        for(var i = 0; i < icon.length; i++) {
          icon[i].innerHTML = "<span>&#8451;</span>";
        }
        for(var i = 0; i < rainId.length; i++) {
          rainId[i].innerHTML = "mm";
        }
        for(var i = 0; i < rainV.length; i++) {
          var rain = rainV[i].innerHTML;
          var g = rain*25.4;
          rainV[i].innerHTML = g.toFixed(2);
        }
        for(var i = 0; i < wsV.length; i++) {
          var wind = wsV[i].innerHTML;
          var g = wind*2.237;
          wsV[i].innerHTML = g.toFixed(2);
        } 
        for(var i = 0; i < wsId.length; i++) {
          wsId[i].innerHTML = "m/s";
        }
        for(var i = 0; i < t.length; i++){
          t[i] = Math.round((t[i] - 32) * 5/9);
        }
        for(var i = 0; i < pe.length; i++){
          var rain = pe[i];
          var g = rain*25.4;
          pe[i] = g.toFixed(2);
        }
        for(var i = 0; i < w.length; i++){
          var rain = w[i];
          var g = rain*2.237;
          w[i] = g.toFixed(2);
        }

        tempChart.data.datasets[0].data = t;
        tempChart.data.datasets[0].label = 'Temp in C';
        tempChart.update();
        rainChart.data.datasets[0].data = pe;
        rainChart.data.datasets[0].label = 'Volume in mm';
        rainChart.update();
        windChart.data.datasets[0].data = w;
        windChart.data.datasets[0].label = 'WindSpeed m/s';
        windChart.update();
      }
    });
  })

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  };
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  };
  
  // function displayMsg() { 
  //   // document.getElementById('displayMsg').innerHTML = "Thank you for your feedback!! Please wait for the website to re-load.";
  //   // document.getElementById('displayMsg').style.fontWeight = 'bold';
  //   alert("Thank you for your feedback!!!");
  //   closeForm();
  // }

  // function htmlDecode(input) {
  //   let doc = new DOMParser().parseFromString(input, "text/html");
  //   return doc.documentElement.textContent;
  // }
  
  // $(document).on('submit', '#myForm', function (e, current, tfHour, sepDay) {
  //   console.log('hello');
  //   e.preventDefault();
  //   $.ajax({
  //     type: 'POST',
  //     url: "/feedback",
  //     data: {
  //       curhr: htmlDecode(current),
  //       twfhr: htmlDecode(tfHour),
  //       svndy: htmlDecode(sepDay),
  //     },
  //     success: function () {
  //       setTimeout(() => {
  //         closeForm();
  //       }, 2000);
  //     }
  //   })
  // });

  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  };

  function displayMsg(value, current, tfHour, sepDay) {
  
    alert("Thank you for your feedback!!!");
  
    if (value=='no') {
  
      $.ajax({
        type: 'POST',
        url: "/feedback",
        data: {
          curhr: htmlDecode(JSON.stringify(current)),
          twfhr: htmlDecode(JSON.stringify(tfHour)),
          svndy: htmlDecode(JSON.stringify(sepDay)),
        },
        success: function () {
          setTimeout(() => {
            closeForm();
          }, 2000);
        }
      })
    }
  };