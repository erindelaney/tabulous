





























// // Saves options to chrome.storage
// function save_options() {
//   var startTime = document.getElementById('startTime').option;
//   var endTime = document.getElementById('endTime').option;
//   var allDay = document.getElementById('allDay').checked;
//   chrome.storage.sync.set({
//     startTime: startTime;
//     endTime: endTime;
//     allDay: allDay
//   }, function() {
//     // Update status to let user know options were saved.
//     var status = document.getElementById('status');
//     status.textContent = 'Options saved.';
//     setTimeout(function() {
//       status.textContent = '';
//     }, 750);
//   });
// }
//
// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// function restore_options() {
//   // Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get({
//     startTime: 'noon',
//     endTime: 'noon',
//     allDay: false
//   }, function(items) {
//     document.getElementById('color').value = items.favoriteColor;
//     document.getElementById('like').checked = items.likesColor;
//   });
// }
// document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click',
//     save_options);
