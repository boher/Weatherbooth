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
        tempChart.data.datasets[0].data = t;
        tempChart.update();
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
        tempChart.data.datasets[0].data = t;
        tempChart.update();
      }
    });
  })

function openForm() {
  document.getElementById("myForm").style.display = "block";
};

function closeForm() {
  document.getElementById("myForm").style.display = "none";
};

function displayMsg() { 
  document.getElementById('displayMsg').innerHTML = "Thank you for your feedback! Have a good day!!";
  document.getElementById('displayMsg').style.fontWeight = 'bold';
}