
// Saves options to chrome.storage
function save_options() {
  var baseColor = document.getElementById('firstColor').value;
  var overlayColor = document.getElementById('secondColor').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    baseColor: baseColor,
    overlayColor: overlayColor,
    likesColor: likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    baseColor: 'rgba(232, 184, 138, 1)',
    overlayColor: 'rgba(173, 138, 160, 1)',
    likesColor: true
  }, function(items) {
    document.getElementById('firstColor').value = items.baseColor;
    document.getElementById('secondColor').value = items.overlayColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
