
// VARIABLES

//Time Variables
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var currentTime = hour*100 + min;

  var startTime = 0;
  var endTime = 2360;

//Color Variables
  if (currentTime < startTime){
    var opacity = 0;
  } else if (currentTime < endTime){
    opacity = (currentTime-startTime)/(endTime-startTime);
  } else {
    opacity = 1;
  }

  var overlayColor = "rgba(173, 138, 160, " + opacity + ")";
  var baseColor = "rgba(232, 184, 138, 1)";

// COLOR ACTIONS

//Setting background colors
  document.body.style.backgroundColor = baseColor;

  var divBackground = document.getElementById("all");
  textArea.style.backgroundColor = overlayColor;


// TEXT ACTIONS

//Building text array

  var firstPhraseArray = [
    'killin it',
    'slay slay slay slay',
    'hello world'
  ];

  var firstPhrase = firstPhraseArray[Math.floor(Math.random() * firstPhraseArray.length)];

//Setting text properties
  var firstTextBlock = document.getElementById("firstText");
  firstTextBlock.innerHTML = firstPhrase;
  firstTextBlock.style.color = 'white';


  var secondTextBlock = document.getElementById("secondText");
  secondTextBlock.style.color = 'white';
