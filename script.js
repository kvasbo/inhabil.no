window.onload = function() {
  var startDate = new Date("2023-07-21T10:00:00Z"); // the date when this script starts running
  var nowDate = new Date(); // the current date
  
  // calculate the difference in days
  var diffInDays = Math.floor((nowDate - startDate) / (1000 * 60 * 60 * 24)); 
  
  document.getElementById('days-count').textContent = diffInDays;
  
  // update the count every day
  setInterval(function() {
    nowDate = new Date();
    diffInDays = Math.floor((nowDate - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('days-count').textContent = diffInDays;
  }, 24 * 60 * 60 * 1000); // run every 24 hours
}
