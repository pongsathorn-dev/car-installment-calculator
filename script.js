const form = document.getElementById("loan-form");
const carPriceInput = document.getElementById("car-price");
const downPaymentInput = document.getElementById("down-payment");
const interestRateInput = document.getElementById("interest-rate");
const loanTermInput = document.getElementById("loan-term");

const loanAmountDisplay = document.getElementById("loan-amount-display");
const monthlyPaymentDisplay = document.getElementById("monthly-payment-display");
const totalInterestDisplay = document.getElementById("total-interest-display");
const totalPaymentDisplay = document.getElementById("total-payment-display");
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

function calculateInstallment(event) {
  event.preventDefault();

  const carPrice = parseNumericInput(carPriceInput.value);
  const downPayment = parseNumericInput(downPaymentInput.value);
  const annualRate = parseNumericInput(interestRateInput.value);
  const loanTermMonths = parseNumericInput(loanTermInput.value);

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

  const loanAmount = carPrice - downPayment;

  if (loanAmount <= 0) {
    message.textContent = "เงินดาวน์ต้องน้อยกว่าราคารถ";
    updateDisplay(0, 0, 0, 0);
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / loanTermMonths;
  } else {
    const growthFactor = (1 + monthlyRate) ** loanTermMonths;
    monthlyPayment = loanAmount * monthlyRate * growthFactor / (growthFactor - 1);
  }

  const totalPayment = monthlyPayment * loanTermMonths;
  const totalInterest = totalPayment - loanAmount;

  updateDisplay(loanAmount, monthlyPayment, totalInterest, totalPayment);
  formatInputValue(carPriceInput);
  formatInputValue(downPaymentInput);
  formatInputValue(interestRateInput);
  formatInputValue(loanTermInput);
  message.textContent = "ผลการคำนวณพร้อมสำหรับนำเสนอให้ลูกค้า";
}

function updateDisplay(loanAmount, monthlyPayment, totalInterest, totalPayment) {
  loanAmountDisplay.textContent = formatCurrency(loanAmount);
  monthlyPaymentDisplay.textContent = formatCurrency(monthlyPayment);
  totalInterestDisplay.textContent = formatCurrency(totalInterest);
  totalPaymentDisplay.textContent = formatCurrency(totalPayment);
}

form.addEventListener("submit", calculateInstallment);
attachNumericInputBehavior(carPriceInput);
attachNumericInputBehavior(downPaymentInput);
attachNumericInputBehavior(interestRateInput);
attachNumericInputBehavior(loanTermInput, false);
carPriceInput.addEventListener("blur", () => formatInputValue(carPriceInput));
downPaymentInput.addEventListener("blur", () => formatInputValue(downPaymentInput));
interestRateInput.addEventListener("blur", () => formatInputValue(interestRateInput));
loanTermInput.addEventListener("blur", () => formatInputValue(loanTermInput));
form.dispatchEvent(new Event("submit"));
