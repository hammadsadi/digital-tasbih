// Select SubhanAllah Element
let subhanAllahCount = document.getElementById("subhanAllahCount");
let subhanAllahIncrementBtn = document.getElementById(
  "subhanAllahIncrementBtn"
);
let subhanAllahDecrementBtn = document.getElementById(
  "subhanAllahDecrementBtn"
);

// Select Alhamdulillah Element
let alhamdulillahCount = document.getElementById("alhamdulillahCount");
let alhamdulillahIncrementBtn = document.getElementById(
  "alhamdulillahIncrementBtn"
);
let alhamdulillahDecrementBtn = document.getElementById(
  "alhamdulillahDecrementBtn"
);

// Select Allahuakber Element
let allahuakberCount = document.getElementById("allahuakberCount");
let allahuakberIncrementBtn = document.getElementById(
  "allahuakberIncrementBtn"
);
let allahuakberDecrementBtn = document.getElementById(
  "allahuakberDecrementBtn"
);

// Reset btn
let resetBtn = document.getElementById("resetBtn");

// Initial Count
let initialSubhanallahCount = 0;
let initialAlhamdulillahCount = 0;
let initialAllahuakberCount = 0;

// SubhanAllah
subhanAllahIncrementBtn.addEventListener("click", function () {
  if (initialSubhanallahCount === 33) {
    return alert("SubhanAllah Complete! Please Fillup Another One!");
  }
  initialSubhanallahCount += 1;
  subhanAllahCount.innerText = initialSubhanallahCount;
});

subhanAllahDecrementBtn.addEventListener("click", function () {
  if (initialSubhanallahCount === 0) {
    return alert(" Sorry You Cant added Negative Value!");
  }
  initialSubhanallahCount -= 1;
  subhanAllahCount.innerText = initialSubhanallahCount;
});

// Alhamdulillah
alhamdulillahIncrementBtn.addEventListener("click", function () {
  if (initialAlhamdulillahCount === 33) {
    return alert("Alhamdulillah Complete! Please Fillup Another One!");
  }
  initialAlhamdulillahCount += 1;
  alhamdulillahCount.innerText = initialAlhamdulillahCount;
});

alhamdulillahDecrementBtn.addEventListener("click", function () {
  if (initialAlhamdulillahCount === 0) {
    return alert(" Sorry You Cant added Negative Value!");
  }
  initialAlhamdulillahCount -= 1;
  alhamdulillahCount.innerText = initialAlhamdulillahCount;
});

// Allahuakber
allahuakberIncrementBtn.addEventListener("click", function () {
  if (initialAllahuakberCount === 34) {
    return alert("MashaAllah Your Tasbih Completed!");
  }
  initialAllahuakberCount += 1;
  allahuakberCount.innerText = initialAllahuakberCount;
});

allahuakberDecrementBtn.addEventListener("click", function () {
  if (initialAllahuakberCount === 0) {
    return alert(" Sorry You Cant added Negative Value!");
  }
  initialAllahuakberCount -= 1;
  allahuakberCount.innerText = initialAllahuakberCount;
});

// Reset all
resetBtn.addEventListener("click", function () {
  initialAlhamdulillahCount = 0;
  initialAllahuakberCount = 0;
  initialSubhanallahCount = 0;
  subhanAllahCount.innerText = 0;
  alhamdulillahCount.innerText = 0;
  allahuakberCount.innerText = 0;
});
