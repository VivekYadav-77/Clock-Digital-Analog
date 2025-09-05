function runClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ms = now.getMilliseconds();

  const secondFraction = seconds + ms / 1000;
  const minuteFraction = minutes + secondFraction / 60;
  const hourFraction = (hours % 12) + minuteFraction / 60;

  const secDeg = secondFraction * 6;
  const minDeg = minuteFraction * 6;
  const hourDeg = hourFraction * 30;

  const secRotate = secDeg - 90;
  const minRotate = minDeg - 90;
  const hourRotate = hourDeg - 90;

  document.getElementById("sec-hand").style.transform =
    "rotate(" + secRotate + "deg)";
  document.getElementById("min-hand").style.transform =
    "rotate(" + minRotate + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hourRotate + "deg)";
}

function startClock() {
  function loop() {
    runClock();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

startClock();
