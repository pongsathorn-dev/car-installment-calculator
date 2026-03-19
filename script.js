const TOYOTA_MODEL_DATA = {
  "Yaris": [
    { name: "Sport", price: 584000 },
    { name: "Smart", price: 644000 },
    { name: "Premium", price: 689000 }
  ],
  "Yaris ATIV": [
    { name: "Sport", price: 569000 },
    { name: "Smart", price: 599000 },
    { name: "Premium", price: 679000 },
    { name: "Premium Luxury", price: 709000 },
    { name: "NIGHTSHADE", price: 709000 },
    { name: "HEV Premium", price: 729000 }
  ],
  "Yaris ATIV GR Sport": [
    { name: "HEV GR Sport", price: 779000 }
  ],
  "Yaris Cross": [
    { name: "HEV Smart", price: 809000 },
    { name: "HEV Premium", price: 859000 },
    { name: "HEV Premium Luxury", price: 909000 },
    { name: "NIGHTSHADE", price: 929000 }
  ],
  "Corolla Cross": [
    { name: "HEV Smart", price: 989000 },
    { name: "HEV Premium", price: 1094000 },
    { name: "HEV Premium Luxury", price: 1204000 }
  ],
  "Corolla Altis": [
    { name: "1.6G", price: 894000 },
    { name: "1.8 Sport", price: 979000 },
    { name: "HEV Premium", price: 1009000 }
  ],
  "Corolla Altis GR Sport": [
    { name: "HEV GR Sport", price: 1129000 }
  ],
  "CAMRY": [
    { name: "HEV Smart", price: 1475000 },
    { name: "HEV Premium", price: 1659000 },
    { name: "HEV Premium Luxury", price: 1809000 }
  ],
  "Veloz": [
    { name: "Smart", price: 795000 },
    { name: "Premium", price: 875000 }
  ],
  "Innova Zenix": [
    { name: "HEV Smart", price: 1379000 },
    { name: "HEV Premium", price: 1489000 }
  ],
  "Fortuner Leader": [
    { name: "2.4 Leader S", price: 1239000 },
    { name: "2.4 Leader G", price: 1400000 },
    { name: "2.4 Leader G+", price: 1439000 },
    { name: "2.4 Leader V", price: 1530000 },
    { name: "2.4 Leader V 4WD", price: 1600000 }
  ],
  "Fortuner Legender": [
    { name: "2.4 Legender", price: 1643000 },
    { name: "2.4 Legender 4WD", price: 1713000 },
    { name: "2.8 Legender", price: 1835000 },
    { name: "2.8 Legender 4WD", price: 1904000 }
  ],
  "Fortuner GR Sport": [
    { name: "2.8 GR Sport 4WD", price: 1969000 }
  ],
  "Alphard": [
    { name: "Alphard 2.5 HEV", price: 4269000 },
    { name: "Alphard 2.5 HEV Luxury", price: 4639000 },
    { name: "Vellfire 2.5 HEV", price: 4419000 }
  ],
  "bZ4X": [
    { name: "FWD", price: 1529000 },
    { name: "AWD", price: 1649000 }
  ],
  "Hiace": [
    { name: "Hiace Eco MT", price: 1069000 },
    { name: "Hiace GL MT", price: 1149000 },
    { name: "Hiace GL AT", price: 1204000 }
  ],
  "Commuter": [
    { name: "Diesel 2.8 MT", price: 1339000 },
    { name: "Diesel 2.8 AT", price: 1369000 }
  ],
  "Majesty": [
    { name: "Premium", price: 1994000 },
    { name: "Grande", price: 2339000 }
  ],
  "Hilux Champ": [
    { name: "2.4 MT C&C LWB", price: 519000 },
    { name: "2.4 MT LWB", price: 547000 },
    { name: "2.4 AT C&C SWB", price: 557000 },
    { name: "2.4 AT LWB", price: 582000 },
    { name: "2.4 AT SWB Attractive Package", price: 602000 },
    { name: "2.4 AT Super SWB Attractive Package", price: 615000 }
  ],
  "Hilux Revo Standard Cab": [
    { name: "2.4 Entry (ไม่มีกระบะ)", price: 584000 },
    { name: "2.4 Entry ช่วงล้อสั้น", price: 624000 },
    { name: "2.4 Entry", price: 624000 },
    { name: "2.4 Entry AT (ไม่มีกระบะ)", price: 634000 },
    { name: "2.8 Entry", price: 639000 },
    { name: "2.4 Entry AT", price: 674000 }
  ],
  "Hilux Revo Z Edition": [
    { name: "Smart Cab Z Edition 4x2 2.4 Entry", price: 669000 },
    { name: "Smart Cab Z Edition 4x2 2.4 Entry AT", price: 719000 },
    { name: "Smart Cab Z Edition 4x2 2.4 Mid", price: 740000 },
    { name: "Double Cab Z Edition 4x2 2.4 Entry", price: 744000 },
    { name: "Smart Cab Z Edition 4x2 2.4 Mid AT", price: 790000 },
    { name: "Double Cab Z Edition 4x2 2.4 Entry AT", price: 784000 },
    { name: "Double Cab Z Edition 4x2 2.4 Mid", price: 822000 },
    { name: "Double Cab Z Edition 4x2 2.4 Mid AT", price: 862000 },
    { name: "Double Cab 4x2 2.8 GR Sport AT", price: 934000 }
  ],
  "Hilux Travo Standard Cab 4TREX": [
    { name: "Hilux Travo Standard Cab 4TREX 2.8 MT", price: 767000 },
    { name: "Hilux Travo Standard Cab 4TREX 2.8 AT", price: 819000 }
  ],
  "Hilux Travo Prerunner & 4TREX": [
    { name: "Hilux Travo Smart Cab Prerunner 2.8 Smart MT", price: 789000 },
    { name: "Hilux Travo Smart Cab Prerunner 2.8 Smart AT", price: 839000 },
    { name: "Hilux Travo Smart Cab Prerunner 2.8 Premium MT", price: 859000 },
    { name: "Hilux Travo Smart Cab Prerunner 2.8 Premium AT", price: 909000 },
    { name: "Hilux Travo Double Cab Prerunner 2.8 Smart MT", price: 895000 },
    { name: "Hilux Travo Double Cab Prerunner 2.8 Smart AT", price: 945000 },
    { name: "Hilux Travo Double Cab Prerunner 2.8 Premium MT", price: 949000 },
    { name: "Hilux Travo Double Cab Prerunner 2.8 Premium AT", price: 999000 },
    { name: "Hilux Travo Smart Cab 4TREX 2.8 Premium MT", price: 984000 },
    { name: "Hilux Travo Smart Cab 4TREX 2.8 Premium AT", price: 1029000 },
    { name: "Hilux Travo Double Cab 4TREX 2.8 Premium MT", price: 1090000 }
  ],
  "Hilux Travo Overland": [
    { name: "Hilux Travo Double Cab Prerunner 2.8 Overland AT", price: 1102000 },
    { name: "Hilux Travo Double Cab Prerunner 2.8 Overland Plus AT", price: 1176000 },
    { name: "Hilux Travo Double Cab 4TREX 2.8 Overland AT", price: 1292000 },
    { name: "Hilux Travo Double Cab 4TREX 2.8 Overland Plus AT", price: 1366000 }
  ],
  "Hilux Travo-e": [
    { name: "Hilux Travo-e Double Cab 4TREX", price: 1491000 }
  ],
  "GR 86": [
    { name: "GR86", price: 2999000 }
  ],
  "GR Corolla": [
    { name: "GR Corolla", price: 4199000 }
  ],
  "GR Yaris": [
    { name: "GR Yaris", price: 3499000 }
  ]
};

const form = document.getElementById("loan-form");
const calculationTypeSelect = document.getElementById("calculation-type");
const carModelInput = document.getElementById("car-model");
const carModelOptions = document.getElementById("car-model-options");
const carSubmodelInput = document.getElementById("car-submodel");
const carSubmodelOptions = document.getElementById("car-submodel-options");
const carPriceInput = document.getElementById("car-price");
const specialColorInput = document.getElementById("special-color");
const supportDownPaymentInput = document.getElementById("support-down-payment");
const downPaymentPercentSelect = document.getElementById("down-payment-percent");
const downPaymentInput = document.getElementById("down-payment");
const downPaymentPercentHint = document.getElementById("down-payment-percent-hint");
const supportDiscountInput = document.getElementById("support-discount");
const interestRateInput = document.getElementById("interest-rate");
const loanTermSelect = document.getElementById("loan-term");
const rvField = document.getElementById("rv-field");
const rvPercentageInput = document.getElementById("rv-percentage");
const resetButton = document.getElementById("reset-form");
const message = document.getElementById("message");

const monthlyPaymentLabel = document.getElementById("monthly-payment-label");
const monthlyPaymentDisplay = document.getElementById("monthly-payment-display");
const balloonPaymentResult = document.getElementById("balloon-payment-result");
const balloonPaymentDisplay = document.getElementById("balloon-payment-display");
const loanAmountDisplay = document.getElementById("loan-amount-display");
const adjustedPriceDisplay = document.getElementById("adjusted-price-display");
const totalInterestDisplay = document.getElementById("total-interest-display");
const totalPaymentDisplay = document.getElementById("total-payment-display");

const dayDownPaymentDisplay = document.getElementById("day-down-payment-display");
const daySupportDisplay = document.getElementById("day-support-display");
const daySupportDiscountDisplay = document.getElementById("day-support-discount-display");
const registrationFeeInput = document.getElementById("registration-fee-input");
const redPlateDepositInput = document.getElementById("red-plate-deposit-input");
const financeFeeInput = document.getElementById("finance-fee-input");
const vatDisplay = document.getElementById("vat-display");
const bookingDepositInput = document.getElementById("booking-deposit-input");
const extraTransferInput = document.getElementById("extra-transfer-input");
const driveAwayTotalDisplay = document.getElementById("drive-away-total-display");
const remainingBalanceDisplay = document.getElementById("remaining-balance-display");

const autoPriceNote = "อัปเดตราคารถจาก Toyota Thailand ตามรุ่นและรุ่นย่อยที่เลือก";

function parseNumber(value) {
  const normalized = String(value ?? "").replace(/,/g, "").trim();
  if (!normalized) {
    return 0;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value) {
  return new Intl.NumberFormat("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number.isFinite(value) ? value : 0);
}

function formatInputValue(input, value) {
  input.value = value === "" ? "" : new Intl.NumberFormat("th-TH", {
    maximumFractionDigits: 2
  }).format(value);
}

function setMessage(text = "") {
  message.textContent = text;
}

function getAdjustedPrice() {
  return parseNumber(carPriceInput.value) + parseNumber(specialColorInput.value) + parseNumber(supportDownPaymentInput.value);
}

function getSelectedModelEntries() {
  return TOYOTA_MODEL_DATA[carModelInput.value.trim()] ?? [];
}

function populateCarModels() {
  const modelNames = Object.keys(TOYOTA_MODEL_DATA).sort((left, right) => left.localeCompare(right, "th"));
  carModelOptions.innerHTML = modelNames.map((model) => `<option value="${model}"></option>`).join("");
}

function populateCarSubmodels() {
  const entries = getSelectedModelEntries();
  carSubmodelOptions.innerHTML = entries
    .map((entry) => `<option value="${entry.name}"></option>`)
    .join("");
}

function applySelectedSubmodelPrice(options = {}) {
  const selectedModel = carModelInput.value.trim();
  const selectedSubmodel = carSubmodelInput.value.trim();
  const entries = TOYOTA_MODEL_DATA[selectedModel] ?? [];
  const matchedEntry = entries.find((entry) => entry.name === selectedSubmodel);

  if (!matchedEntry) {
    return false;
  }

  formatInputValue(carPriceInput, matchedEntry.price);

  if (options.showMessage !== false) {
    setMessage(autoPriceNote);
  }

  if (downPaymentPercentSelect.value !== "custom") {
    syncDownPaymentWithPercent();
  } else {
    calculateLoan();
  }

  return true;
}

function syncDownPaymentHint() {
  const adjustedPrice = getAdjustedPrice();
  const percentValue = downPaymentPercentSelect.value;

  if (percentValue === "custom") {
    if (adjustedPrice > 0) {
      const currentPercent = (parseNumber(downPaymentInput.value) / adjustedPrice) * 100;
      downPaymentPercentHint.textContent = `กำหนดเงินดาวน์เอง คิดเป็นประมาณ ${formatNumber(currentPercent)}% ของราคารถรวม`;
    } else {
      downPaymentPercentHint.textContent = "กำหนดเงินดาวน์เอง";
    }
    return;
  }

  downPaymentPercentHint.textContent = `ระบบจะคำนวณยอดเงินดาวน์จาก ${percentValue}% ของราคารถรวม`;
}

function toggleCalculationType() {
  const isBalloon = calculationTypeSelect.value === "balloon";
  rvField.classList.toggle("is-hidden", !isBalloon);
  balloonPaymentResult.classList.toggle("is-hidden", !isBalloon);
  monthlyPaymentLabel.textContent = isBalloon
    ? "ค่างวดต่อเดือน (ไม่รวม RV งวดสุดท้าย)"
    : "ค่างวดต่อเดือน (บาท)";
}

function syncDownPaymentWithPercent() {
  const adjustedPrice = getAdjustedPrice();
  const percentValue = downPaymentPercentSelect.value;

  if (percentValue !== "custom") {
    const computedDownPayment = adjustedPrice * (parseNumber(percentValue) / 100);
    formatInputValue(downPaymentInput, computedDownPayment);
  }

  syncDownPaymentHint();
  calculateLoan();
}

function handleManualDownPaymentChange() {
  const adjustedPrice = getAdjustedPrice();
  const downPayment = parseNumber(downPaymentInput.value);

  downPaymentPercentSelect.value = "custom";

  if (adjustedPrice > 0) {
    downPaymentPercentHint.textContent = `กำหนดเงินดาวน์เอง คิดเป็นประมาณ ${formatNumber((downPayment / adjustedPrice) * 100)}% ของราคารถรวม`;
  } else {
    downPaymentPercentHint.textContent = "กำหนดเงินดาวน์เอง";
  }

  calculateLoan();
}

function calculateStandardPayment(principal, annualRatePercent, loanTermMonths) {
  if (principal <= 0 || loanTermMonths <= 0) {
    return 0;
  }

  const monthlyRate = annualRatePercent / 100 / 12;

  if (monthlyRate <= 0) {
    return principal / loanTermMonths;
  }

  const factor = Math.pow(1 + monthlyRate, loanTermMonths);
  return principal * monthlyRate * factor / (factor - 1);
}

function clearResults() {
  monthlyPaymentDisplay.textContent = "0.00";
  balloonPaymentDisplay.textContent = "0.00";
  loanAmountDisplay.textContent = "0.00";
  adjustedPriceDisplay.textContent = "0.00";
  totalInterestDisplay.textContent = "0.00";
  totalPaymentDisplay.textContent = "0.00";
  dayDownPaymentDisplay.textContent = "0.00";
  daySupportDisplay.textContent = "0.00";
  daySupportDiscountDisplay.textContent = "0.00";
  vatDisplay.textContent = "0.00";
  driveAwayTotalDisplay.textContent = "0.00";
  remainingBalanceDisplay.textContent = "0.00";
}

function calculateLoan() {
  const carPrice = parseNumber(carPriceInput.value);
  const specialColor = parseNumber(specialColorInput.value);
  const supportDownPayment = parseNumber(supportDownPaymentInput.value);
  const downPayment = parseNumber(downPaymentInput.value);
  const supportDiscount = parseNumber(supportDiscountInput.value);
  const annualRatePercent = parseNumber(interestRateInput.value);
  const loanTermMonths = parseNumber(loanTermSelect.value);
  const loanTermYears = loanTermMonths / 12;
  const isBalloon = calculationTypeSelect.value === "balloon";

  const adjustedPrice = carPrice + specialColor + supportDownPayment;
  const loanAmount = Math.max(adjustedPrice - downPayment, 0);
  const rvPercentage = parseNumber(rvPercentageInput.value);
  const balloonPayment = isBalloon ? carPrice * (rvPercentage / 100) : 0;

  let monthlyPayment = 0;
  if (isBalloon) {
    const monthlyInstallments = Math.max(loanTermMonths - 1, 1);
    monthlyPayment = ((loanAmount * (annualRatePercent / 100) * loanTermYears) + loanAmount - balloonPayment) / monthlyInstallments;
  } else {
    monthlyPayment = calculateStandardPayment(loanAmount, annualRatePercent, loanTermMonths);
  }

  const totalPayment = isBalloon
    ? (monthlyPayment * Math.max(loanTermMonths - 1, 0)) + balloonPayment
    : monthlyPayment * loanTermMonths;
  const totalInterest = Math.max(totalPayment - loanAmount, 0);

  const registrationFee = parseNumber(registrationFeeInput.value);
  const redPlateDeposit = parseNumber(redPlateDepositInput.value);
  const financeFee = parseNumber(financeFeeInput.value);
  const bookingDeposit = parseNumber(bookingDepositInput.value);
  const extraTransfer = parseNumber(extraTransferInput.value);
  const vatAmount = (supportDownPayment + supportDiscount) * 0.03;
  const driveAwayTotal = (downPayment - supportDownPayment - supportDiscount) + registrationFee + redPlateDeposit + financeFee + vatAmount;
  const remainingBalance = driveAwayTotal - bookingDeposit + extraTransfer;

  monthlyPaymentDisplay.textContent = formatNumber(monthlyPayment);
  balloonPaymentDisplay.textContent = formatNumber(balloonPayment);
  loanAmountDisplay.textContent = formatNumber(loanAmount);
  adjustedPriceDisplay.textContent = formatNumber(adjustedPrice);
  totalInterestDisplay.textContent = formatNumber(totalInterest);
  totalPaymentDisplay.textContent = formatNumber(totalPayment);

  dayDownPaymentDisplay.textContent = formatNumber(downPayment);
  daySupportDisplay.textContent = formatNumber(supportDownPayment);
  daySupportDiscountDisplay.textContent = formatNumber(supportDiscount);
  vatDisplay.textContent = formatNumber(vatAmount);
  driveAwayTotalDisplay.textContent = formatNumber(driveAwayTotal);
  remainingBalanceDisplay.textContent = formatNumber(remainingBalance);
}

function resetFormState() {
  form.reset();

  carModelInput.value = "";
  carSubmodelInput.value = "";
  carSubmodelOptions.innerHTML = "";

  carPriceInput.value = "";
  specialColorInput.value = "";
  supportDownPaymentInput.value = "";
  downPaymentInput.value = "";
  supportDiscountInput.value = "";
  interestRateInput.value = "";
  rvPercentageInput.value = "";

  registrationFeeInput.value = "";
  redPlateDepositInput.value = "";
  financeFeeInput.value = "";
  bookingDepositInput.value = "";
  extraTransferInput.value = "";

  calculationTypeSelect.value = "balloon";
  downPaymentPercentSelect.value = "15";
  loanTermSelect.value = "84";

  toggleCalculationType();
  clearResults();
  syncDownPaymentHint();
  setMessage("");
}

function handleModelChange() {
  populateCarSubmodels();

  const entries = getSelectedModelEntries();
  const hasMatchingSubmodel = entries.some((entry) => entry.name === carSubmodelInput.value.trim());

  if (!hasMatchingSubmodel) {
    carSubmodelInput.value = "";
  }

  if (entries.length === 1) {
    carSubmodelInput.value = entries[0].name;
    applySelectedSubmodelPrice();
    return;
  }

  if (entries.length > 0) {
    setMessage("เลือกรุ่นย่อยเพื่อให้ระบบเติมราคารถอัตโนมัติ");
  } else if (carModelInput.value.trim()) {
    setMessage("ยังไม่พบรุ่นรถที่ตรงกับรายการ Toyota Thailand ปัจจุบัน");
  } else {
    setMessage("");
  }

  if (downPaymentPercentSelect.value !== "custom") {
    syncDownPaymentWithPercent();
  } else {
    calculateLoan();
  }
}

function handleSubmodelChange() {
  const applied = applySelectedSubmodelPrice();

  if (!applied && carSubmodelInput.value.trim()) {
    setMessage("ยังไม่พบรุ่นย่อยที่ตรงกับรุ่นรถที่เลือก");
  } else if (!carSubmodelInput.value.trim()) {
    setMessage("");
    if (downPaymentPercentSelect.value !== "custom") {
      syncDownPaymentWithPercent();
    } else {
      calculateLoan();
    }
  }
}

function handleFormattedNumericInput(event) {
  const input = event.target;
  const parsedValue = parseNumber(input.value);

  if (input.value.trim() === "") {
    return;
  }

  formatInputValue(input, parsedValue);
}

function initializeCalculator() {
  populateCarModels();
  toggleCalculationType();
  syncDownPaymentHint();
  calculateLoan();
}

calculationTypeSelect.addEventListener("change", () => {
  toggleCalculationType();
  calculateLoan();
});

carModelInput.addEventListener("input", handleModelChange);
carModelInput.addEventListener("change", handleModelChange);
carSubmodelInput.addEventListener("input", handleSubmodelChange);
carSubmodelInput.addEventListener("change", handleSubmodelChange);

downPaymentPercentSelect.addEventListener("change", syncDownPaymentWithPercent);
downPaymentInput.addEventListener("input", handleManualDownPaymentChange);

[
  carPriceInput,
  specialColorInput,
  supportDownPaymentInput,
  supportDiscountInput,
  interestRateInput,
  rvPercentageInput,
  registrationFeeInput,
  redPlateDepositInput,
  financeFeeInput,
  bookingDepositInput,
  extraTransferInput
].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === carPriceInput) {
      setMessage("");
    }

    if (downPaymentPercentSelect.value !== "custom" && input !== supportDiscountInput && input !== interestRateInput && input !== rvPercentageInput && input !== registrationFeeInput && input !== redPlateDepositInput && input !== financeFeeInput && input !== bookingDepositInput && input !== extraTransferInput) {
      syncDownPaymentWithPercent();
      return;
    }

    calculateLoan();
  });

  input.addEventListener("blur", handleFormattedNumericInput);
});

loanTermSelect.addEventListener("change", calculateLoan);

resetButton.addEventListener("click", () => {
  resetFormState();
});

initializeCalculator();
