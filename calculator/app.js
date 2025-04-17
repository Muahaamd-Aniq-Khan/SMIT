let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearAll() {
  display.innerText = "0";
}

function deleteLast() {
  let text = display.innerText;
  display.innerText = text.length > 1 ? text.slice(0, -1) : "0";
}

function calculate() {
  try {
    const result = eval(display.innerText.replace(/x/g, '*'));
    display.innerText = parseFloat(result.toFixed(10)).toString();
  } catch {
    display.innerText = "Error";
  }
}