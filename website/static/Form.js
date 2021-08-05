function openForm() {
  document.getElementById("myForm").style.display = "block";
};
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
};

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
        }, 1000);
      }
    })
  }
};