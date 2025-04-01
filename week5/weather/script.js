function checkWeather() {
  const myTemp = document.querySelector("#myTempt");
  console.log(myTemp.value);
  const body = document.querySelector("body");

  if (myTemp < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "gray";
  } else if (myTemp.value >= 10 && myTemp.value < 20) {
    console.log("It is a pleasent weather");
    body.style.backgroundColor = "aqua";
  } else if (myTemp.value >= 20 && myTemp.value < 30) {
    console.log("it is nice and sunny");
    body.style.backgroundColor = "coral";
  } else if (myTemp.value >= 30) {
    console.log("It is burning hot");
    body.style.backgroundColor = "crimson";
  }
}
