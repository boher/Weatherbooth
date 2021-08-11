// Display the feedback box when users clicked on the feedback button
function openForm() {
  document.getElementById("myForm").style.display = "block";
};

// Hide the feedback box when users clicks on the exit button
function closeForm() {
  document.getElementById("myForm").style.display = "none";
};

// Parse decoded HTML document to feedback DB if users chose 'no' option
function htmlDecode(input) {
  let doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

// Message to show users after clicking on either options
function displayMsg(value, current, tfHour, fDay) {

  alert("Thank you for your feedback!");

  if (value=='no') {

    $.ajax({
      type: 'POST',
      url: "/feedback",
      data: {
        curhr: htmlDecode(JSON.stringify(current)),
        twfhr: htmlDecode(JSON.stringify(tfHour)),
        fdy: htmlDecode(JSON.stringify(fDay)),
      },
      success: function () {
        console.log('Feedback saved.');
      }
    })
  }

  setTimeout(() => {
    closeForm();
  }, 1000);

  return false;
};