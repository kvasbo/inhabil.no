window.onload = function() {

  getDates();
  
  // update the count every minute
  setInterval(function() {
    getDates();
  }, 60000);
}

// Fetch data from API and update the DOM
async function getDates() {
  const response = await fetch("https://api.inhabil.no");
  const dates = await response.json();
  document.getElementById('days-count').textContent = dates.latest;
  const olderDiv = document.getElementById("older");
  olderDiv.innerHTML = "";
  dates.older.forEach(function(date) { 
    const newDiv = document.createElement("span");
    const newContent = document.createTextNode(date.toString());
    newDiv.appendChild(newContent);
    olderDiv.appendChild(newDiv);
  });
}