window.onload = function() {
  updateDates();
  
  // update the count every day
  setInterval(function() {
   updateDates();
  }, 24 * 60 * 60 * 1000); // run every 24 hours
}

function updateDates() {
  nowDate = new Date();
  var moenDate = new Date("2023-07-21T00:00:00Z"); // the date when this script starts running
  var brennaDate = new Date("2023-06-20T00:00:00Z"); // the date when this script starts running
  var tretteDate = new Date("2023-06-23T00:00:00Z"); // the date when this script starts running
  var diffInDaysMoen = Math.floor((nowDate - moenDate) / (1000 * 60 * 60 * 24));
  var  diffInDaysBrenna = Math.floor((nowDate - brennaDate) / (1000 * 60 * 60 * 24));
  var diffInDaysTrette = Math.floor((nowDate - tretteDate) / (1000 * 60 * 60 * 24));
  document.getElementById('days-count').textContent = diffInDaysMoen;
  document.getElementById('days-count-brenna').textContent = diffInDaysBrenna;
  document.getElementById('days-count-tretteberg').textContent = diffInDaysTrette;
}
