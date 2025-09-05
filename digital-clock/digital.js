function run() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const date = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();

  const daysArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthsArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  document.getElementById('hour').innerText = hours + ":";
  document.getElementById('min').innerText = minutes + ":";
  document.getElementById('sec').innerText = seconds;
  document.getElementById('date').innerText = date;
  document.getElementById('month').innerText = monthsArr[month];
  document.getElementById('day').innerText = daysArr[day];
}

setInterval(run, 1000);
run();


