

function onGetValuesFromStorage(values){


  // TIME

  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var currentTime = hour*100 + min;

  var startTime = values.startTime;
  var endTime = values.endTime;

  if (values.allDay === true) {
    startTime = 0;
    endTime = 2360;
  }

  var opacity = 0;

  if (currentTime < startTime){
    opacity = 0;
  } else if (currentTime < endTime){
    opacity = (currentTime-startTime)/(endTime-startTime);
  } else {
    opacity = 1;
  }


  //COLORS

  var baseColor = values.baseColor || "rgba(232, 184, 138, 1)";
  var overlayColor = values.overlayColor || "rgba(173, 138, 160, 1)";

  var arr = overlayColor.split(',');
  arr[3] = " " + opacity + ")";
  overlayColor = arr.join(',');

  document.body.style.backgroundColor = baseColor;

  var divBackground = document.getElementById("all");
  textArea.style.backgroundColor = overlayColor;



  // WORDS

  var firstPhraseArray = [
    'killin it',
    'slay slay slay slay',
    'h  e  l  l  o    w  o  r  l  d',
    '<(^.^<)',
    'serial chiller'
  ];

  var firstPhrase = firstPhraseArray[Math.floor(Math.random() * firstPhraseArray.length)];

  var firstTextBlock = document.getElementById("firstText");
  firstTextBlock.innerHTML = firstPhrase;
  firstTextBlock.style.color = 'white';

  if (values.words === false) {
    firstTextBlock.style.display = "none";
  }

}


chrome.storage.sync.get(["baseColor", "overlayColor", "allDay", "startTime", "endTime", "words"], onGetValuesFromStorage);
  //var baseColor = ;


//TO DO
// better icon
// readme for repo
// words input/viewing
// colors input/picker?
