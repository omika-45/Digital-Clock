function displayTime(){
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "am";
  
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  
  if (min < 10) {
    min = "0" + min;
  }
  
  if (sec < 10) {
    sec = "0" + sec;
  }
  
  if (hrs == 0) {
    hrs = 12;
  }
  
  if (hrs > 12) {
    hrs = hrs - 12;
    session = "pm";
  }
  
  let time = hrs + ":" + min + ":" + sec + " " + session;
  document.getElementById('myclock').innerHTML = time;
  
  setTimeout(displayTime, 1000);
}

displayTime()