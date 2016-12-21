// VARIABLES

//Time Variables
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var totalTime = hour*100 + min;


//Color Variables
  var opacity = totalTime/2360;
  var overlayColor = "rgba(173, 138, 160, " + opacity + ")";
  var baseColor = "rgba(232, 184, 138, 1)";

  var startTime
  var endTime

// COLOR ACTIONS

//Setting background colors
  document.body.style.backgroundColor = baseColor;

  var divBackground = document.querySelector("#all");
  textArea.style.backgroundColor = overlayColor;


//Setting text colors
  var firstTextBlock = document.querySelector("#firstText");
  firstTextBlock.style.color = 'white';

  var secondTextBlock = document.querySelector("#secondText");
  secondTextBlock.style.color = 'white';


// TEXT ACTIONS

//Building text array

  var textArray = [
    'Go get em',
    'niiiiice'
  ];
