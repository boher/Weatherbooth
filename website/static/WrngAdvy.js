// UVI scale from green, yellow, orange, red and purple in increasing intensity
function uviWrng(uvi) {
  if (uvi < 3) {
      document.getElementById('uv_main').innerHTML = 'UVI: ' + "&#x1F7E2;";
      document.getElementById('uv').innerHTML = 'Description:' + "</br>" + "Low risk of skin burn and unlikely" + "</br>" + "Minimal danger for the average person" + 
      "</br>" + "Cautionary measures:" + '</br>' + "Apply sunscreen";
  } else if ((uvi >= 3) && (uvi < 5)) {
      document.getElementById('uv_main').innerHTML ='UVI: ' + "&#128993;";
      document.getElementById('uv').innerHTML = 'Description:' + "</br>" + "Low risk of skin burn but possible" + "</br>" + "Exposure for 20 mins may lead to skin burns" + 
      "</br>" + "Cautionary measures:" + "</br>" + "Apply broad spectrum sunscreen with SPF30" + "</br>" + 'Wear hats and sunglasses' + 
      "</br>" + 'Wear long sleeved shirts when outdoors';
  } else if ((uvi >= 5) && (uvi < 8)) {
      document.getElementById('uv_main').innerHTML ='UVI: ' + "&#128992;";
      document.getElementById('uv').innerHTML = 'Description:' + "</br>" + "Moderate risk of skin burn" + "</br>" + "Exposure for 20 mins may lead to skin burns" + 
      "</br>" + "Cautionary measures:" + "</br>" + "Apply broad spectrum sunscreen with SPF30" + "</br>" + "Use lip balm or lip cream containing sunscreen" + 
      "</br>" + 'Wear hats and sunglasses' + "</br>" + 'Wear long sleeved shirts when outdoors';
  } else if ((uvi >= 8) && (uvi <= 10)) {
      document.getElementById('uv_main').innerHTML ='UVI: ' + "&#128308;";
      document.getElementById('uv').innerHTML = 'Description:' + "</br>" + "High risk of skin burn" + "</br>" + "Exposure for 10 mins may lead to skin burns" + 
      "</br>" + "Cautionary measures:" + "</br>" + "Apply broad spectrum sunscreen with SPF30" + "</br>" + "Use lip balm or lip cream containing sunscreen" + 
      "</br>" + 'Wear hats and sunglasses' + "</br>" + 'Wear long sleeved shirts when outdoors' + "</br>" + "Seek shade and avoid being in the sun as much as possible";
  } else {
      document.getElementById('uv_main').innerHTML ='UVI: ' + "&#128995;";
      document.getElementById('uv').innerHTML = 'Description:' + "</br>" + "Very high risk of skin burn" + "</br>" + "Exposure for 5 mins may lead to skin burns" + 
      "</br>" + "Occupational outdoor workers are at high risk" + "</br>" + "Cautionary measures:" + "</br>" + "Apply broad spectrum sunscreen with SPF30" + 
      "</br>" + "Use lip balm or lip cream containing sunscreen" + "</br>" + 'Wear hats and sunglasses' + "</br>" + 'Wear long sleeved shirts when outdoors' + 
      "</br>" + "Seek shade and avoid being in the sun as much as possible";
  }
};
      
// Wet bulb globe temperature scale from green, yellow, red and purple in increasing intensity
function heatWrng(wbgt) {
  if (wbgt < 18) {
      document.getElementById('wbgt_main').innerHTML = 'Heat Stress: ' + "&#x1F7E2;";
      document.getElementById('wbgt').innerHTML = 'Description:' + "</br>" + "Low risk of heat injury but possible " + 
      "</br>" + "Cautionary measures:" + '</br>' + "Hydrate yourself every 45 minutes" + '</br>' + "Seek shade and rest for at least 15 minutes";
  } else if ((wbgt >= 18) && (wbgt < 23)) {
      document.getElementById('wbgt_main').innerHTML = 'Heat Stress: ' + "&#128993;";
      document.getElementById('wbgt').innerHTML = 'Description:' + "</br>" + "Moderate risk of heat injury" + 
      "</br>" + "Cautionary measures:" + '</br>' + "Hydrate yourself every 30 minutes" + '</br>' + "Seek shade and rest for at least 15 minutes";
  } else if ((wbgt >= 23) && (wbgt < 28)) {
      document.getElementById('wbgt_main').innerHTML = 'Heat Stress: ' + "&#128308;";
      document.getElementById('wbgt').innerHTML = 'Description:' + "</br>" + "High risk of heat injury" + 
      "</br>" + "Cautionary measures:" + '</br>' + "Hydrate yourself every 30 minutes" + '</br>' + "Seek shade and rest for at least 30 minutes";
  } else {
      document.getElementById('wbgt_main').innerHTML = 'Heat Stress: ' + "&#128995;";
      document.getElementById('wbgt').innerHTML = 'Description:' + "</br>" + "Very high risk of heat injury" + 
      "</br>" + "Cautionary measures:" + '</br>' + "Hydrate yourself every 15 minutes" + '</br>' + "Seek shade and rest for at least 30 minutes";
  }
};

// Mosquito activity based on high wet bulb globe temperature and above average humidity
function mozzyWrng(wbgt, humd) {
  if ((wbgt >= 30) && (humd >= 42)) {
      document.getElementById("mozzy_main").innerHTML = 'Mosquito Activity: ' + "&#128993;";
      document.getElementById("mozzy").innerHTML = 'Description:' + "</br>" + "Mosquitoes are active" + "</br>" + "Cautionary measures:" + 
      '</br>' + "Wear light-coloured clothing" + '</br>' + "Equip yourself with mosquito repellents";
  } else {
      document.getElementById("mozzy_main").innerHTML = 'Mosquito Activity: ' + "&#128994;";
      document.getElementById("mozzy").innerHTML = 'Description:' + "</br>" + "Mosquitoes are less active";
  }
  
};

// Precipitation volume scale from yellow, orange and red in increasing intensity
function floodWrng(rainVol) {
  document.getElementById('flood_style').style.display = 'none';
  if (rainVol > 7) {
      if ((rainVol >= 7.5)&& (rainVol < 15)) {
          document.getElementById('flood_style').style.display = 'flex';
          document.getElementById('flood_main').innerHTML ='Flash Flood: ' + "&#128993;";
          document.getElementById('flood').innerHTML = 'Description:' + "</br>" + "Low risk of flooding in low lying locations and river channels" + 
          "</br>" + "Cautionary measures:" + '</br>' + "Stay indoors";
      } else if ((rainVol >= 15)&& (rainVol < 30)) {
          document.getElementById('flood_style').style.display = 'flex';
          document.getElementById('flood_main').innerHTML = 'Flash Flood: ' + "&#128992;";
          document.getElementById('flood').innerHTML = 'Description:' + "</br>" + "Moderate risk of flooding in low lying locations and river channels" + 
          "</br>" + "Cautionary measures:" + '</br>' + "Stay indoors" + '</br>' + "Avoid commuting" + '</br>' + "Move to higher grounds";
      } else if (rainVol >= 30) {
          document.getElementById('flood_style').style.display = 'flex';
          document.getElementById('flood_main').innerHTML = 'Flash Flood: ' + "&#128308;";
          document.getElementById('flood').innerHTML = 'Description:' + "</br>" + "High risk of flooding in low lying locations and river channels" + 
          "</br>" + "Cautionary measures:" + '</br>' + "Stay indoors" + '</br>' + "Avoid commuting" + '</br>' + "Move to higher grounds" + 
          '</br>' + "Be on the alert for evacuation procedures";
      }
  }
};