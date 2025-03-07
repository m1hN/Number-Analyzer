// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(num) {
  let sign = "";

  if (num > 0) {
    sign = "Pos";
  } else if (num == 0) {
    sign = "Zero";
  } else {
    sign = "Negative";
  }

  return sign;
}

function evenOrOdd(num) {
  let numVal = num % 2;
  let determineEvOrOd;

  if (numVal == 0) {
    determineEvOrOd = "Even";
  } else {
    determineEvOrOd = "Odd";
  }

  return determineEvOrOd;
}

function multipleOf10(num) {
  let numVal = num % 10;
  let determineMultOf10;

  if (numVal == 0) {
    determineMultOf10 = true;
  } else {
    determineMultOf10 = false;
  }

  return determineMultOf10;
}

function numDigits(num) {
  let numCount = `${num}`;

  if (numCount.charAt(0) == `-`) {
    numCount = numCount.length;
    numCount = numCount - 1;
  } else {
    numCount = numCount.length;
  }

  return numCount;
}

function isPrime(num) {
  let prime;
  if (num == 1 || num == 2) {
    prime = true;
  } else if (num == 0) {
    prime = false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    } else {
      prime = true;
    }
  }
  return prime;
}
