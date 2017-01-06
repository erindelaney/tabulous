

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
    'slay slay slay slay',
    'slay slay slay slay',
    'h  e  l  l  o    w  o  r  l  d',
    'death by internet',
    '<(^.^<)',
    'serial chiller',
    'the snuggle is real',
    'can i pray for u this lent',
    'so many open windows but no fresh air',
    '100% boys tears',
    'where are you?',
    'we dont need another hero.',
    'your body is a battleground'
  ];

  var firstPhrase = firstPhraseArray[Math.floor(Math.random() * firstPhraseArray.length)];
  var theTime = " " + hour + ":" + min + " ";
  var firstTextBlock = document.getElementById("firstText");

  if (values.time === true) {
    firstTextBlock.innerHTML = theTime;
    firstTextBlock.style.fontSize = "10rem";
  } else {
    firstTextBlock.innerHTML = firstPhrase;
    if (values.words === false) {
      firstTextBlock.style.display = "none";
    }
  }

  firstTextBlock.style.color = 'white';



}


chrome.storage.sync.get(["baseColor", "overlayColor", "allDay", "startTime", "endTime", "words", "time"], onGetValuesFromStorage);
  //var baseColor = ;
