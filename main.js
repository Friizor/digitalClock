let hour = document.getElementById('hour');
let minute = document.getElementById('mnt');
let scn = document.getElementById('scn');

let yearH = document.getElementById('year')
let monthH = document.getElementById('month')
let dayH = document.getElementById('day')



function displayTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");


    const year = date.getFullYear();
    const month = (date.getMonth()+ 1).toString().padStart(2, "0");;
    const day = date.getDate().toString().padStart(2, "0");;
  
    hour.textContent = `${hours}:`;
    minute.textContent = `${minutes}:`;
    scn.textContent = `${seconds}`;

    yearH.innerHTML = `${year}-`;
    monthH.innerHTML = `${month}-`;
    dayH.innerHTML = `${day}`;
  }
  
  const intervalId = setInterval(displayTime, 1000);
  