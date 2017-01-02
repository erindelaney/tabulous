

// SAVES OPTIONS

function save_options() {
  var baseColor = document.getElementById('firstColor').value;
  var overlayColor = document.getElementById('secondColor').value;
  var allDay = document.getElementById('allDay').checked;
  var startTime = document.getElementById('startTime').value;
  var endTime = document.getElementById('endTime').value;
  var words = document.getElementById('words').checked;

  if (allDay === true) {
    startTime = 'none';
    endTime = 'none';
    document.getElementById('startTime').value = 'none';
    document.getElementById('endTime').value = 'none';
  }

  chrome.storage.sync.set({
    baseColor: baseColor,
    overlayColor: overlayColor,
    startTime: startTime,
    endTime: endTime,
    allDay: allDay,
    words: words
  },

  function() {
    // Update status on page
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

}



// RESTORES OPTIONS

function restore_options() {
  // Defaults
  chrome.storage.sync.get({
    baseColor: 'rgba(232, 184, 138, 1)',
    overlayColor: 'rgba(173, 138, 160, 1)',
    startTime: 'none',
    endTime: 'none',
    allDay: true,
    words: true
  },

  function(items) {
    document.getElementById('firstColor').value = items.baseColor;
    document.getElementById('secondColor').value = items.overlayColor;
    document.getElementById('allDay').checked = items.allDay;
    document.getElementById('words').checked = items.words;
    document.getElementById('startTime').value = items.startTime;
    document.getElementById('endTime').value = items.endTime;
  });

}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
