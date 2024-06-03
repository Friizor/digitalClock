let hour = document.getElementById('hour');
let minute = document.getElementById('mnt');
let scn = document.getElementById('scn');



function displayTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
  
    const time = `${hours}:${minutes}:${seconds}`;
    hour.textContent = `${hours}:`;
    minute.textContent = `${minutes}:`;
    scn.textContent = `${seconds}`;
  }
  
  const intervalId = setInterval(displayTime, 1000);
  