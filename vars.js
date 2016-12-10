//Time Variables
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var totalTime = hour*100 + min;


//Color Variables
  var opacity = totalTime/2360;
  var overlayColor = "rgba(173, 138, 160, " + opacity + ")";
  var baseColor = "rgba(232, 184, 138, 1)";
