const form = document.getElementById("loan-form");
const calculationTypeInput = document.getElementById("calculation-type");
const carPriceInput = document.getElementById("car-price");
const downPaymentInput = document.getElementById("down-payment");
const interestRateInput = document.getElementById("interest-rate");
const loanTermInput = document.getElementById("loan-term");
const balloonPaymentField = document.getElementById("balloon-payment-field");
const balloonPaymentInput = document.getElementById("balloon-payment");

const loanAmountDisplay = document.getElementById("loan-amount-display");
const monthlyPaymentLabel = document.getElementById("monthly-payment-label");
const monthlyPaymentDisplay = document.getElementById("monthly-payment-display");
const totalInterestDisplay = document.getElementById("total-interest-display");
const totalPaymentDisplay = document.getElementById("total-payment-display");
const balloonPaymentResult = document.getElementById("balloon-payment-result");
const balloonPaymentDisplay = document.getElementById("balloon-payment-display");
const message = document.getElementById("message");

const currencyFormatter = new Intl.NumberFormat("th-TH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

function formatCurrency(value) {
  return currencyFormatter.format(Number.isFinite(value) ? value : 0);
}

function parseNumericInput(value) {
  return Number(String(value).replace(/,/g, "").trim());
}

function formatNumber(value) {
  return numberFormatter.format(Number.isFinite(value) ? value : 0);
}

function formatInputValue(input) {
  const numericValue = parseNumericInput(input.value);

  if (input.value.trim() === "" || !Number.isFinite(numericValue)) {
    return;
  }

  input.value = formatNumber(numericValue);
}

function sanitizeNumericValue(value, allowDecimal = true) {
  let sanitizedValue = String(value).replace(/[^0-9.]/g, "");

  if (!allowDecimal) {
    return sanitizedValue.replace(/\./g, "");
  }

  const parts = sanitizedValue.split(".");

  if (parts.length === 1) {
    return sanitizedValue;
  }

  return `${parts[0]}.${parts.slice(1).join("")}`;
}

function attachNumericInputBehavior(input, allowDecimal = true) {
  input.addEventListener("input", () => {
    const sanitizedValue = sanitizeNumericValue(input.value, allowDecimal);

    if (input.value !== sanitizedValue) {
      input.value = sanitizedValue;
    }
  });

  input.addEventListener("keypress", (event) => {
    const isDigit = /[0-9]/.test(event.key);
    const isDecimalPoint = allowDecimal && event.key === "." && !input.value.includes(".");

    if (!isDigit && !isDecimalPoint) {
      event.preventDefault();
    }
  });

  input.addEventListener("paste", (event) => {
    event.preventDefault();

    const pastedText = event.clipboardData?.getData("text") ?? "";
    input.value = sanitizeNumericValue(pastedText, allowDecimal);
  });
}

function isBalloonMode() {
  return calculationTypeInput.value === "balloon";
}

function toggleBalloonMode() {
  const balloonMode = isBalloonMode();

  balloonPaymentField.classList.toggle("is-hidden", !balloonMode);
  balloonPaymentResult.classList.toggle("is-hidden", !balloonMode);
  monthlyPaymentLabel.textContent = balloonMode
    ? "ค่างวดรายเดือน (ไม่รวมงวดบอลลูน)"
    : "ค่างวดต่อเดือน (บาท)";
}

function calculateStandardPayment(loanAmount, monthlyRate, loanTermMonths) {
  if (monthlyRate === 0) {
    return loanAmount / loanTermMonths;
  }

  const growthFactor = (1 + monthlyRate) ** loanTermMonths;
  return loanAmount * monthlyRate * growthFactor / (growthFactor - 1);
}

function calculateBalloonPaymentPlan(loanAmount, monthlyRate, loanTermMonths, balloonPayment) {
  if (monthlyRate === 0) {
    return (loanAmount - balloonPayment) / loanTermMonths;
  }

  const discountFactor = (1 + monthlyRate) ** (-loanTermMonths);
  return (loanAmount - (balloonPayment * discountFactor)) * monthlyRate / (1 - discountFactor);
}

function updateDisplay(loanAmount, monthlyPayment, totalInterest, totalPayment, balloonPayment = 0) {
  loanAmountDisplay.textContent = formatCurrency(loanAmount);
  monthlyPaymentDisplay.textContent = formatCurrency(monthlyPayment);
  totalInterestDisplay.textContent = formatCurrency(totalInterest);
  totalPaymentDisplay.textContent = formatCurrency(totalPayment);
  balloonPaymentDisplay.textContent = formatCurrency(balloonPayment);
}

function calculateInstallment(event) {
  event.preventDefault();

  const calculationType = calculationTypeInput.value;
  const carPrice = parseNumericInput(carPriceInput.value);
  const downPayment = parseNumericInput(downPaymentInput.value);
  const annualRate = parseNumericInput(interestRateInput.value);
  const loanTermMonths = parseNumericInput(loanTermInput.value);
  const balloonPayment = isBalloonMode()
    ? parseNumericInput(balloonPaymentInput.value)
    : 0;

  if (
    !Number.isFinite(carPrice) ||
    !Number.isFinite(downPayment) ||
    !Number.isFinite(annualRate) ||
    !Number.isFinite(loanTermMonths) ||
    carPrice < 0 ||
    downPayment < 0 ||
    annualRate < 0 ||
    loanTermMonths <= 0
  ) {
    message.textContent = "กรุณากรอกข้อมูลให้ถูกต้องและมีค่ามากกว่าหรือเท่ากับศูนย์";
    return;
  }

  if (calculationType === "balloon" && (!Number.isFinite(balloonPayment) || balloonPayment < 0)) {
    message.textContent = "กรุณากรอกยอดบอลลูนให้ถูกต้อง";
    return;
  }

  const loanAmount = carPrice - downPayment;

  if (loanAmount <= 0) {
    message.textContent = "เงินดาวน์ต้องน้อยกว่าราคารถ";
    updateDisplay(0, 0, 0, 0, 0);
    return;
  }

  if (calculationType === "balloon" && balloonPayment >= loanAmount) {
    message.textContent = "ยอดบอลลูนต้องน้อยกว่ายอดจัดไฟแนนซ์";
    updateDisplay(loanAmount, 0, 0, 0, balloonPayment);
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  const monthlyPayment = calculationType === "balloon"
    ? calculateBalloonPaymentPlan(loanAmount, monthlyRate, loanTermMonths, balloonPayment)
    : calculateStandardPayment(loanAmount, monthlyRate, loanTermMonths);
  const totalPayment = (monthlyPayment * loanTermMonths) + balloonPayment;
  const totalInterest = totalPayment - loanAmount;

  updateDisplay(loanAmount, monthlyPayment, totalInterest, totalPayment, balloonPayment);
  formatInputValue(carPriceInput);
  formatInputValue(downPaymentInput);
  formatInputValue(interestRateInput);
  formatInputValue(loanTermInput);

  if (calculationType === "balloon") {
    formatInputValue(balloonPaymentInput);
    message.textContent = "คำนวณแบบแคมเปญบอลลูนเรียบร้อยแล้ว";
  } else {
    message.textContent = "คำนวณแบบปกติเรียบร้อยแล้ว";
  }
}

form.addEventListener("submit", calculateInstallment);
calculationTypeInput.addEventListener("change", () => {
  toggleBalloonMode();
  form.dispatchEvent(new Event("submit"));
});

attachNumericInputBehavior(carPriceInput);
attachNumericInputBehavior(downPaymentInput);
attachNumericInputBehavior(interestRateInput);
attachNumericInputBehavior(loanTermInput, false);
attachNumericInputBehavior(balloonPaymentInput);

carPriceInput.addEventListener("blur", () => formatInputValue(carPriceInput));
downPaymentInput.addEventListener("blur", () => formatInputValue(downPaymentInput));
interestRateInput.addEventListener("blur", () => formatInputValue(interestRateInput));
loanTermInput.addEventListener("blur", () => formatInputValue(loanTermInput));
balloonPaymentInput.addEventListener("blur", () => formatInputValue(balloonPaymentInput));

toggleBalloonMode();
form.dispatchEvent(new Event("submit"));
