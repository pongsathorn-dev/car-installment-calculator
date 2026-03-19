const TOYOTA_MODEL_DATA = {
  "Alphard & Vellfire": [
    "Alphard 2.5 HEV Luxury",
    "Vellfire 2.5 HEV Premium"
  ],
  "bZ4X": [
    "FWD",
    "AWD"
  ],
  CAMRY: [
    "HEV Premium Luxury",
    "HEV Premium",
    "HEV Smart"
  ],
  "Corolla Altis": [
    "HEV GR Sport",
    "HEV Premium",
    "1.8 Sport",
    "1.6 G"
  ],
  "Corolla Cross": [
    "HEV Premium Luxury",
    "HEV Premium",
    "HEV Smart"
  ],
  Fortuner: [
    "Leader S",
    "Leader G",
    "Leader V",
    "Legender",
    "GR Sport"
  ],
  "Hiace & Commuter": [
    "Hiace GL AT",
    "Hiace GL MT",
    "Hiace Eco MT",
    "Commuter MT"
  ],
  "Hilux Champ": [
    "2.0 Gasoline MT SWB",
    "2.0 Gasoline C&C MT LWB",
    "2.4 Diesel MT SWB",
    "2.4 Diesel C&C MT LWB",
    "2.4 Diesel AT C&C LWB"
  ],
  "Hilux Revo Standard Cab": [
    "2.4 Entry MT",
    "2.4 Entry AT",
    "2.8 Rocco AT"
  ],
  "Hilux Revo Z Edition": [
    "Smart Cab 2.4 Entry",
    "Smart Cab 2.4 Mid",
    "Double Cab 2.4 Mid",
    "Double Cab 2.4 High"
  ],
  "Hilux Travo Standard Cab 4TREX": [
    "Single Cab 2.4 Entry MT",
    "Single Cab 2.8 Entry MT"
  ],
  "Hilux Travo Prerunner & 4TREX": [
    "Double Cab 4x4 2.8 High AT",
    "Double Cab 4x4 2.8 High MT",
    "Double Cab 4x4 2.4 Mid",
    "Double Cab Prerunner 2x4 2.4 High AT",
    "Double Cab Prerunner 2x4 2.4 High"
  ],
  "Hilux Travo Overland": [
    "Double Cab 2.8 Overland AT"
  ],
  "Hilux Travo-e": [
    "BEV Smart Cab",
    "BEV Double Cab"
  ],
  "Innova Zenix": [
    "2.0 HEV Premium Luxury",
    "2.0 HEV Premium",
    "2.0 HEV Smart"
  ],
  Majesty: [
    "Premium",
    "Grande"
  ],
  Veloz: [
    "Premium",
    "Smart"
  ],
  Yaris: [
    "Sport",
    "Smart",
    "Premium"
  ],
  "Yaris ATIV": [
    "Sport",
    "Smart",
    "Premium",
    "Premium Luxury",
    "Nightshade",
    "HEV Premium",
    "HEV Premium Luxury"
  ],
  "Yaris Cross": [
    "HEV Smart",
    "HEV Premium",
    "HEV Premium Luxury"
  ]
};

const form = document.getElementById("loan-form");
const calculationTypeInput = document.getElementById("calculation-type");
const carModelInput = document.getElementById("car-model");
const carSubmodelInput = document.getElementById("car-submodel");
const carModelOptions = document.getElementById("car-model-options");
const carSubmodelOptions = document.getElementById("car-submodel-options");
const carPriceInput = document.getElementById("car-price");
const specialColorInput = document.getElementById("special-color");
const supportDownPaymentInput = document.getElementById("support-down-payment");
const downPaymentPercentInput = document.getElementById("down-payment-percent");
const downPaymentInput = document.getElementById("down-payment");
const downPaymentPercentHint = document.getElementById("down-payment-percent-hint");
const resetFormButton = document.getElementById("reset-form");
const supportDiscountInput = document.getElementById("support-discount");
const interestRateInput = document.getElementById("interest-rate");
const loanTermInput = document.getElementById("loan-term");
const rvField = document.getElementById("rv-field");
const rvPercentageInput = document.getElementById("rv-percentage");

const registrationFeeInput = document.getElementById("registration-fee-input");
const redPlateDepositInput = document.getElementById("red-plate-deposit-input");
const financeFeeInput = document.getElementById("finance-fee-input");
const bookingDepositInput = document.getElementById("booking-deposit-input");
const extraTransferInput = document.getElementById("extra-transfer-input");

const adjustedPriceDisplay = document.getElementById("adjusted-price-display");
const loanAmountDisplay = document.getElementById("loan-amount-display");
const monthlyPaymentLabel = document.getElementById("monthly-payment-label");
const monthlyPaymentDisplay = document.getElementById("monthly-payment-display");
const totalInterestDisplay = document.getElementById("total-interest-display");
const totalPaymentDisplay = document.getElementById("total-payment-display");
const balloonPaymentResult = document.getElementById("balloon-payment-result");
const balloonPaymentDisplay = document.getElementById("balloon-payment-display");
const message = document.getElementById("message");

const dayDownPaymentDisplay = document.getElementById("day-down-payment-display");
const daySupportDisplay = document.getElementById("day-support-display");
const daySupportDiscountDisplay = document.getElementById("day-support-discount-display");
const vatDisplay = document.getElementById("vat-display");
const driveAwayTotalDisplay = document.getElementById("drive-away-total-display");
const remainingBalanceDisplay = document.getElementById("remaining-balance-display");

const currencyFormatter = new Intl.NumberFormat("th-TH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

const EDITABLE_FEE_DEFAULTS = {
  registrationFee: 2300,
  redPlateDeposit: 3500,
  financeFee: 800,
  bookingDeposit: 5000,
  extraTransfer: 2000
};

const CUSTOM_DOWN_PAYMENT_VALUE = "custom";

const FORM_DEFAULTS = {
  calculationType: "balloon",
  carModel: "",
  carSubmodel: "",
  carPrice: "644,000",
  specialColor: "7,000",
  supportDownPayment: "50,000",
  downPaymentPercent: "15",
  downPayment: "105,150",
  supportDiscount: "25,000",
  interestRate: "3.55",
  loanTerm: "84",
  rvPercentage: "20"
};

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
  const sanitizedValue = String(value).replace(/[^0-9.]/g, "");

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

function populateDatalist(datalist, values) {
  datalist.innerHTML = values
    .map((value) => `<option value="${value}"></option>`)
    .join("");
}

function populateCarModels() {
  populateDatalist(carModelOptions, Object.keys(TOYOTA_MODEL_DATA).sort((a, b) => a.localeCompare(b)));
}

function populateCarSubmodels() {
  const selectedModel = carModelInput.value.trim();
  const submodels = TOYOTA_MODEL_DATA[selectedModel] ?? [];

  populateDatalist(carSubmodelOptions, submodels);

  if (!submodels.includes(carSubmodelInput.value.trim())) {
    carSubmodelInput.value = "";
  }
}

function isBalloonMode() {
  return calculationTypeInput.value === "balloon";
}

function calculateAdjustedPrice(carPrice, specialColor, supportDownPayment) {
  return carPrice + specialColor + supportDownPayment;
}

function calculateDownPaymentFromPercent(percent, adjustedPrice) {
  return adjustedPrice * (percent / 100);
}

function updateDownPaymentHint(percent, adjustedPrice) {
  if (!Number.isFinite(percent)) {
    downPaymentPercentHint.textContent = "ผู้ใช้กำหนดยอดเงินดาวน์เอง";
    return;
  }

  downPaymentPercentHint.textContent = `คิดจาก ${formatNumber(percent)}% ของราคารถรวม ${formatCurrency(adjustedPrice)} บาท`;
}

function updateCustomDownPaymentOption(percent) {
  const customOption = downPaymentPercentInput.querySelector(`option[value="${CUSTOM_DOWN_PAYMENT_VALUE}"]`);

  if (!Number.isFinite(percent)) {
    customOption.textContent = "กำหนดเอง";
    return;
  }

  customOption.textContent = `กำหนดเอง (${formatNumber(percent)}%)`;
}

function syncDownPaymentFromPercent() {
  const adjustedPrice = calculateAdjustedPrice(
    parseNumericInput(carPriceInput.value),
    parseNumericInput(specialColorInput.value),
    parseNumericInput(supportDownPaymentInput.value)
  );
  const selectedPercent = downPaymentPercentInput.value;

  if (selectedPercent === CUSTOM_DOWN_PAYMENT_VALUE) {
    const downPayment = parseNumericInput(downPaymentInput.value);
    const percent = adjustedPrice > 0 ? (downPayment / adjustedPrice) * 100 : 0;
    updateCustomDownPaymentOption(percent);
    updateDownPaymentHint(percent, adjustedPrice);
    return;
  }

  const percent = parseNumericInput(selectedPercent);

  if (!Number.isFinite(adjustedPrice) || !Number.isFinite(percent)) {
    return;
  }

  downPaymentInput.value = formatNumber(calculateDownPaymentFromPercent(percent, adjustedPrice));
  updateCustomDownPaymentOption(Number.NaN);
  updateDownPaymentHint(percent, adjustedPrice);
}

function syncPercentFromDownPayment() {
  const adjustedPrice = calculateAdjustedPrice(
    parseNumericInput(carPriceInput.value),
    parseNumericInput(specialColorInput.value),
    parseNumericInput(supportDownPaymentInput.value)
  );
  const downPayment = parseNumericInput(downPaymentInput.value);

  if (!Number.isFinite(adjustedPrice) || adjustedPrice <= 0 || !Number.isFinite(downPayment)) {
    downPaymentPercentInput.value = CUSTOM_DOWN_PAYMENT_VALUE;
    updateCustomDownPaymentOption(Number.NaN);
    updateDownPaymentHint(Number.NaN, adjustedPrice);
    return;
  }

  const percent = (downPayment / adjustedPrice) * 100;
  const matchingOption = Array.from(downPaymentPercentInput.options)
    .find((option) => option.value !== CUSTOM_DOWN_PAYMENT_VALUE && Number(option.value) === Number(percent));

  if (matchingOption) {
    downPaymentPercentInput.value = matchingOption.value;
    updateCustomDownPaymentOption(Number.NaN);
    updateDownPaymentHint(percent, adjustedPrice);
    return;
  }

  downPaymentPercentInput.value = CUSTOM_DOWN_PAYMENT_VALUE;
  updateCustomDownPaymentOption(percent);
  updateDownPaymentHint(percent, adjustedPrice);
}

function toggleBalloonMode() {
  const balloonMode = isBalloonMode();

  rvField.classList.toggle("is-hidden", !balloonMode);
  balloonPaymentResult.classList.toggle("is-hidden", !balloonMode);
  monthlyPaymentLabel.textContent = balloonMode
    ? "ค่างวดรายเดือน (ไม่รวม RV งวดสุดท้าย)"
    : "ค่างวดต่อเดือน (บาท)";
}

function calculateStandardPayment(loanAmount, monthlyRate, loanTermMonths) {
  if (monthlyRate === 0) {
    return loanAmount / loanTermMonths;
  }

  const growthFactor = (1 + monthlyRate) ** loanTermMonths;
  return (loanAmount * monthlyRate * growthFactor) / (growthFactor - 1);
}

function calculateBalloonPaymentPlan(loanAmount, annualRate, loanTermMonths, balloonPayment) {
  const loanTermYears = loanTermMonths / 12;
  const annualRateDecimal = annualRate / 100;
  const totalWithInterest = (loanAmount * annualRateDecimal * loanTermYears) + loanAmount - balloonPayment;
  const installmentMonths = loanTermMonths - 1;

  return totalWithInterest / installmentMonths;
}

function updateFinanceDisplay(adjustedPrice, loanAmount, monthlyPayment, totalInterest, totalPayment, balloonPayment = 0) {
  adjustedPriceDisplay.textContent = formatCurrency(adjustedPrice);
  loanAmountDisplay.textContent = formatCurrency(loanAmount);
  monthlyPaymentDisplay.textContent = formatCurrency(monthlyPayment);
  totalInterestDisplay.textContent = formatCurrency(totalInterest);
  totalPaymentDisplay.textContent = formatCurrency(totalPayment);
  balloonPaymentDisplay.textContent = formatCurrency(balloonPayment);
}

function updateDayCostDisplay(values) {
  dayDownPaymentDisplay.textContent = formatCurrency(values.downPayment);
  daySupportDisplay.textContent = formatCurrency(values.supportDownPayment);
  daySupportDiscountDisplay.textContent = formatCurrency(values.supportDiscount);
  vatDisplay.textContent = formatCurrency(values.vatAmount);
  driveAwayTotalDisplay.textContent = formatCurrency(values.driveAwayTotal);
  remainingBalanceDisplay.textContent = formatCurrency(values.remainingBalance);
}

function clearResults() {
  updateFinanceDisplay(0, 0, 0, 0, 0, 0);
  updateDayCostDisplay({
    downPayment: 0,
    supportDownPayment: 0,
    supportDiscount: 0,
    vatAmount: 0,
    driveAwayTotal: 0,
    remainingBalance: 0
  });
}

function getEditableFeeValues() {
  return {
    registrationFee: parseNumericInput(registrationFeeInput.value),
    redPlateDeposit: parseNumericInput(redPlateDepositInput.value),
    financeFee: parseNumericInput(financeFeeInput.value),
    bookingDeposit: parseNumericInput(bookingDepositInput.value),
    extraTransfer: parseNumericInput(extraTransferInput.value)
  };
}

function calculateDayCosts(downPayment, supportDownPayment, supportDiscount) {
  const fees = getEditableFeeValues();
  const vatAmount = (supportDownPayment + supportDiscount) * 0.03;
  const discountedDownPayment = downPayment - supportDownPayment - supportDiscount;
  const driveAwayTotal =
    discountedDownPayment +
    fees.registrationFee +
    fees.redPlateDeposit +
    fees.financeFee +
    vatAmount;
  const remainingBalance = driveAwayTotal - fees.bookingDeposit + fees.extraTransfer;

  return {
    downPayment,
    supportDownPayment,
    supportDiscount,
    vatAmount,
    driveAwayTotal,
    remainingBalance
  };
}

function formatAllInputs() {
  [
    carPriceInput,
    specialColorInput,
    supportDownPaymentInput,
    downPaymentInput,
    supportDiscountInput,
    interestRateInput,
    rvPercentageInput,
    registrationFeeInput,
    redPlateDepositInput,
    financeFeeInput,
    bookingDepositInput,
    extraTransferInput
  ].forEach((input) => formatInputValue(input));
}

function resetEditableFeeInputs() {
  registrationFeeInput.value = formatNumber(EDITABLE_FEE_DEFAULTS.registrationFee);
  redPlateDepositInput.value = formatNumber(EDITABLE_FEE_DEFAULTS.redPlateDeposit);
  financeFeeInput.value = formatNumber(EDITABLE_FEE_DEFAULTS.financeFee);
  bookingDepositInput.value = formatNumber(EDITABLE_FEE_DEFAULTS.bookingDeposit);
  extraTransferInput.value = formatNumber(EDITABLE_FEE_DEFAULTS.extraTransfer);
}

function clearEditableFeeInputs() {
  registrationFeeInput.value = "";
  redPlateDepositInput.value = "";
  financeFeeInput.value = "";
  bookingDepositInput.value = "";
  extraTransferInput.value = "";
}

function recalculate() {
  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
}

function calculateInstallment(event) {
  event.preventDefault();

  const calculationType = calculationTypeInput.value;
  const carPrice = parseNumericInput(carPriceInput.value);
  const specialColor = parseNumericInput(specialColorInput.value);
  const supportDownPayment = parseNumericInput(supportDownPaymentInput.value);
  const downPayment = parseNumericInput(downPaymentInput.value);
  const supportDiscount = parseNumericInput(supportDiscountInput.value);
  const annualRate = parseNumericInput(interestRateInput.value);
  const loanTermMonths = parseNumericInput(loanTermInput.value);
  const rvPercentage = isBalloonMode()
    ? parseNumericInput(rvPercentageInput.value)
    : 0;
  const editableFees = Object.values(getEditableFeeValues());

  const allValues = [
    carPrice,
    specialColor,
    supportDownPayment,
    downPayment,
    supportDiscount,
    annualRate,
    loanTermMonths,
    ...editableFees
  ];

  if (
    allValues.some((value) => !Number.isFinite(value) || value < 0) ||
    loanTermMonths <= 0
  ) {
    message.textContent = "กรุณากรอกข้อมูลให้ถูกต้อง และตัวเลขต้องไม่ติดลบ";
    return;
  }

  if (calculationType === "balloon" && (!Number.isFinite(rvPercentage) || rvPercentage < 0 || rvPercentage >= 100)) {
    message.textContent = "กรุณากรอก RV เป็นเปอร์เซ็นต์ระหว่าง 0 ถึงน้อยกว่า 100";
    return;
  }

  const adjustedPrice = calculateAdjustedPrice(carPrice, specialColor, supportDownPayment);
  const loanAmount = adjustedPrice - downPayment;

  if (loanAmount <= 0) {
    message.textContent = "เงินดาวน์ต้องน้อยกว่ายอดราคารถรวม";
    updateFinanceDisplay(adjustedPrice, 0, 0, 0, 0, 0);
    updateDayCostDisplay(calculateDayCosts(downPayment, supportDownPayment, supportDiscount));
    syncPercentFromDownPayment();
    return;
  }

  const balloonPayment = calculationType === "balloon"
    ? carPrice * (rvPercentage / 100)
    : 0;

  if (calculationType === "balloon" && balloonPayment >= loanAmount) {
    message.textContent = "ยอด RV ต้องน้อยกว่ายอดจัดไฟแนนซ์";
    updateFinanceDisplay(adjustedPrice, loanAmount, 0, 0, 0, balloonPayment);
    updateDayCostDisplay(calculateDayCosts(downPayment, supportDownPayment, supportDiscount));
    syncPercentFromDownPayment();
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  const monthlyPayment = calculationType === "balloon"
    ? calculateBalloonPaymentPlan(loanAmount, annualRate, loanTermMonths, balloonPayment)
    : calculateStandardPayment(loanAmount, monthlyRate, loanTermMonths);
  const totalPayment = (monthlyPayment * loanTermMonths) + balloonPayment;
  const totalInterest = totalPayment - loanAmount;

  updateFinanceDisplay(adjustedPrice, loanAmount, monthlyPayment, totalInterest, totalPayment, balloonPayment);
  updateDayCostDisplay(calculateDayCosts(downPayment, supportDownPayment, supportDiscount));
  syncPercentFromDownPayment();
  formatAllInputs();

  message.textContent = calculationType === "balloon"
    ? "คำนวณแคมเปญบอลลูนพร้อมค่าใช้จ่ายวันรับรถเรียบร้อยแล้ว"
    : "คำนวณค่างวดและค่าใช้จ่ายวันรับรถเรียบร้อยแล้ว";
}

function resetFormState() {
  calculationTypeInput.value = FORM_DEFAULTS.calculationType;
  carModelInput.value = "";
  carSubmodelInput.value = "";
  carPriceInput.value = "";
  specialColorInput.value = "";
  supportDownPaymentInput.value = "";
  downPaymentPercentInput.value = FORM_DEFAULTS.downPaymentPercent;
  downPaymentInput.value = "";
  supportDiscountInput.value = "";
  interestRateInput.value = "";
  loanTermInput.value = FORM_DEFAULTS.loanTerm;
  rvPercentageInput.value = "";
  clearEditableFeeInputs();
  populateCarSubmodels();
  toggleBalloonMode();
  downPaymentPercentHint.textContent = "";
  clearResults();
  message.textContent = "";
}

[
  carPriceInput,
  specialColorInput,
  supportDownPaymentInput,
  downPaymentInput,
  supportDiscountInput,
  interestRateInput,
  rvPercentageInput,
  registrationFeeInput,
  redPlateDepositInput,
  financeFeeInput,
  bookingDepositInput,
  extraTransferInput
].forEach((input) => {
  attachNumericInputBehavior(input);
  input.addEventListener("blur", () => formatInputValue(input));
});

[carPriceInput, specialColorInput, supportDownPaymentInput].forEach((input) => {
  input.addEventListener("blur", () => {
    syncDownPaymentFromPercent();
    recalculate();
  });
});

[registrationFeeInput, redPlateDepositInput, financeFeeInput, bookingDepositInput, extraTransferInput].forEach((input) => {
  input.addEventListener("input", () => {
    recalculate();
  });

  input.addEventListener("blur", () => {
    formatInputValue(input);
    recalculate();
  });
});

downPaymentPercentInput.addEventListener("change", () => {
  syncDownPaymentFromPercent();
  recalculate();
});

downPaymentInput.addEventListener("input", () => {
  syncPercentFromDownPayment();
});

downPaymentInput.addEventListener("blur", () => {
  formatInputValue(downPaymentInput);
  syncPercentFromDownPayment();
});

loanTermInput.addEventListener("change", () => {
  recalculate();
});

carModelInput.addEventListener("input", () => {
  populateCarSubmodels();
});

carModelInput.addEventListener("change", () => {
  populateCarSubmodels();
});

form.addEventListener("submit", calculateInstallment);
calculationTypeInput.addEventListener("change", () => {
  toggleBalloonMode();
  recalculate();
});
if (resetFormButton) {
  resetFormButton.addEventListener("click", resetFormState);
}

populateCarModels();
populateCarSubmodels();
toggleBalloonMode();
resetEditableFeeInputs();
syncDownPaymentFromPercent();
clearResults();
