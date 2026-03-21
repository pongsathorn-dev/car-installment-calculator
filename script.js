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
    { name: "2.4 Entry (ไม่มีคอกกระบะ)", price: 584000 },
    { name: "2.4 Entry ช่วงล้อสั้น", price: 624000 },
    { name: "2.4 Entry", price: 624000 },
    { name: "2.4 Entry AT (ไม่มีคอกกระบะ)", price: 634000 },
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
const accessoryInput = document.getElementById("support-down-payment");
const downPaymentPercentSelect = document.getElementById("down-payment-percent");
const downPaymentInput = document.getElementById("down-payment");
const downPaymentPercentHint = document.getElementById("down-payment-percent-hint");
const supportDiscountInput = document.getElementById("support-discount");
const interestRateInput = document.getElementById("interest-rate");
const loanTermSelect = document.getElementById("loan-term");
const rvField = document.getElementById("rv-field");
const rvPercentageInput = document.getElementById("rv-percentage");
const copySummaryButton = document.getElementById("copy-summary");
const resetButton = document.getElementById("reset-form");
const message = document.getElementById("message");

const monthlyPaymentLabel = document.getElementById("monthly-payment-label");
const monthlyPaymentDisplay = document.getElementById("monthly-payment-display");
const balloonPaymentResult = document.getElementById("balloon-payment-result");
const balloonPaymentDisplay = document.getElementById("balloon-payment-display");
const loanAmountDisplay = document.getElementById("loan-amount-display");
const formPriceWithColorDisplay = document.getElementById("form-price-with-color-display");
const formNetPriceDisplay = document.getElementById("form-net-price-display");
const totalInterestDisplay = document.getElementById("total-interest-display");
const totalPaymentDisplay = document.getElementById("total-payment-display");

const dayDownPaymentDisplay = document.getElementById("day-down-payment-display");
const daySupportDisplay = document.getElementById("day-support-display");
const daySubtotalDisplay = document.getElementById("day-subtotal-display");
const registrationFeeInput = document.getElementById("registration-fee-input");
const redPlateDepositDisplay = document.getElementById("red-plate-deposit-input");
const financeFeeInput = document.getElementById("finance-fee-input");
const vatDisplay = document.getElementById("vat-display");
const bookingDepositInput = document.getElementById("booking-deposit-input");
const extraTransferInput = document.getElementById("extra-transfer-input");
const marginInput = document.getElementById("margin-input");
const remainingMarginDisplay = document.getElementById("remaining-margin-display");
const driveAwayTotalDisplay = document.getElementById("drive-away-total-display");
const remainingBalanceDisplay = document.getElementById("remaining-balance-display");

const addGiftButton = document.getElementById("add-gift-button");
const selectedGiftsContainer = document.getElementById("selected-gifts");
const giftModal = document.getElementById("gift-modal");
const giftOptionsContainer = document.getElementById("gift-options");
const giftModalCloseButton = document.getElementById("gift-modal-close");
const giftModalCancelButton = document.getElementById("gift-modal-cancel");
const giftModalConfirmButton = document.getElementById("gift-modal-confirm");
const giftCustomInput = document.getElementById("gift-custom-input");
const giftCustomAddButton = document.getElementById("gift-custom-add");

const autoPriceNote = "อัปเดตราคารถจาก Toyota Thailand ตามรุ่นและรุ่นย่อยที่เลือก";
const GIFT_OPTIONS = [
  "🎁 ดอกเบี้ยพิเศษ",
  "🎁 ประกันภัยชั้น 1",
  "🎁 พ.ร.บ.",
  "🎁 ฟิล์มกรองแสงบานหน้าเต็ม",
  "🎁 ฟิล์มกรองแสงรอบคัน",
  "🎁 กันสาดข้าง",
  "🎁 ถาดท้าย",
  "🎁 กรอบป้ายทะเบียน",
  "🎁 ผ้ายางปูพื้น",
  "🎁 เคลือบสีก่อนส่งมอบ",
  "🎁 น้ำมัน 1,000 บาท",
  "✅ ฟรีค่าแรงเช็คระยะ 6ครั้ง 1,000-50,000 กม.",
  "✅ รับประกันผลิตภัณฑ์ 5ปี / 150,000 กม.(ตามเงื่อนไข)"
];
let selectedGifts = [];
let giftOptions = [...GIFT_OPTIONS];

function parseNumber(value) {
  const normalized = String(value ?? "").replace(/,/g, "").trim();
  if (!normalized) {
    return 0;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function ceilDisplayValue(value) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.ceil(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("th-TH", {
    maximumFractionDigits: 0
  }).format(ceilDisplayValue(value));
}

function formatInputValue(input, value) {
  input.value = value === "" ? "" : new Intl.NumberFormat("th-TH", {
    maximumFractionDigits: 0
  }).format(ceilDisplayValue(value));
}

function formatSummaryNumber(value) {
  return new Intl.NumberFormat("th-TH", {
    maximumFractionDigits: 0
  }).format(ceilDisplayValue(value));
}

function getDisplayedMonthlyPayment(value, isBalloon) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return isBalloon ? Math.ceil(value) : value;
}

function formatPercent(value) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.?0+$/, "");
}

function formatInterestRateInput(input, value) {
  if (value === "" || value === "0") {
    input.value = "";
    return;
  }
  
  const num = parseNumber(value);
  input.value = num.toFixed(2);
}

function setMessage(text = "") {
  message.textContent = text;
}

function saveGiftState() {
  const firebaseGiftStore = window.firebaseGiftStore;
  if (firebaseGiftStore?.saveGiftState) {
    firebaseGiftStore.saveGiftState({
      giftOptions
    }).catch((error) => {
      console.error("Failed to save gifts to Firebase:", error);
    });
  }
}

async function loadGiftStateFromFirebase() {
  const firebaseGiftStore = window.firebaseGiftStore;
  if (!firebaseGiftStore?.loadGiftState) {
    return;
  }

  try {
    const remoteState = await firebaseGiftStore.loadGiftState();
    if (!remoteState) {
      return;
    }

    const remoteGiftOptions = Array.isArray(remoteState.giftOptions)
      ? remoteState.giftOptions.filter((item) => typeof item === "string" && item.trim())
      : [];

    if (remoteGiftOptions.length > 0) {
      giftOptions = remoteGiftOptions;
    }

    selectedGifts = selectedGifts.filter((gift) => giftOptions.includes(gift.label));
    renderSelectedGifts();
    calculateLoan();
  } catch (error) {
    console.error("Failed to load gifts from Firebase:", error);
  }
}

function getPriceWithColor() {
  return parseNumber(carPriceInput.value) + parseNumber(specialColorInput.value);
}

function getNetCarPrice() {
  return getPriceWithColor() + parseNumber(accessoryInput.value);
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
  const netCarPrice = getNetCarPrice();
  const percentValue = downPaymentPercentSelect.value;

  if (percentValue === "custom") {
    if (netCarPrice > 0) {
      const currentPercent = (parseNumber(downPaymentInput.value) / netCarPrice) * 100;
      downPaymentPercentHint.textContent = `กำหนดเงินดาวน์เอง คิดเป็นประมาณ ${formatNumber(currentPercent)}% ของราคารถรวมสีพิเศษและบวกอุปกรณ์`;
    } else {
      downPaymentPercentHint.textContent = "กำหนดเงินดาวน์เอง";
    }
    return;
  }

  downPaymentPercentHint.textContent = `ระบบจะคำนวณยอดเงินดาวน์จาก ${percentValue}% ของราคารถรวมสีพิเศษและบวกอุปกรณ์`;
}

function toggleCalculationType() {
  const isBalloon = calculationTypeSelect.value === "balloon";
  const loanTermMonths = Math.max(parseNumber(loanTermSelect.value), 0);
  const installmentEndMonth = Math.max(loanTermMonths - 1, 1);
  rvField.classList.toggle("is-hidden", !isBalloon);
  balloonPaymentResult.classList.toggle("is-hidden", !isBalloon);
  monthlyPaymentLabel.textContent = isBalloon
    ? `งวด 1-${installmentEndMonth} (ไม่รวม RV งวดสุดท้าย)`
    : "ค่างวดต่อเดือน (บาท)";
  if (isBalloon) {
    balloonPaymentResult.querySelector("span").textContent = `งวด ${Math.max(loanTermMonths, 1)} (ยอด RV งวดสุดท้าย)`;
  }
}

function syncDownPaymentWithPercent() {
  const netCarPrice = getNetCarPrice();
  const percentValue = downPaymentPercentSelect.value;

  if (percentValue !== "custom") {
    const computedDownPayment = netCarPrice * (parseNumber(percentValue) / 100);
    formatInputValue(downPaymentInput, computedDownPayment);
  }

  syncDownPaymentHint();
  calculateLoan();
}

function handleManualDownPaymentChange() {
  const netCarPrice = getNetCarPrice();
  const downPayment = parseNumber(downPaymentInput.value);

  downPaymentPercentSelect.value = "custom";

  if (netCarPrice > 0) {
    downPaymentPercentHint.textContent = `กำหนดเงินดาวน์เอง คิดเป็นประมาณ ${formatNumber((downPayment / netCarPrice) * 100)}% ของราคารถรวมสีพิเศษและบวกอุปกรณ์`;
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

function buildGiftOptionMarkup() {
  giftOptionsContainer.innerHTML = giftOptions.map((label, index) => {
    const checked = selectedGifts.some((gift) => gift.label === label) ? "checked" : "";
    const moveUpButton = index === 0
      ? ""
      : `<button type="button" class="gift-option-move" data-move-option="${label}" data-direction="up"></button>`;
    const moveDownButton = index === giftOptions.length - 1
      ? ""
      : `<button type="button" class="gift-option-move" data-move-option="${label}" data-direction="down"></button>`;
    return `
      <div class="gift-option">
        <label class="gift-option-select">
          <input type="checkbox" value="${label}" ${checked}>
          <span>${label}</span>
        </label>
        <div class="gift-option-actions">
          <button type="button" class="gift-option-move" data-move-option="${label}" data-direction="up">ขึ้น</button>
          <button type="button" class="gift-option-move" data-move-option="${label}" data-direction="down">ลง</button>
        </div>
        <button type="button" class="gift-option-remove" data-remove-option="${label}">ลบ</button>
      </div>
    `;
  }).join("");

  giftOptionsContainer.querySelectorAll(".gift-option-move").forEach((button) => {
    const direction = button.getAttribute("data-direction");
    button.textContent = direction === "up" ? "↑" : "↓";
    button.setAttribute("aria-label", direction === "up" ? "เลื่อนขึ้น" : "เลื่อนลง");
  });

  giftOptionsContainer.querySelectorAll(".gift-option-remove").forEach((button) => {
    button.textContent = "🗑";
    button.setAttribute("aria-label", "ลบรายการ");
  });
  giftOptionsContainer.querySelectorAll(".gift-option").forEach((option, index) => {
    const actions = option.querySelector(".gift-option-actions");
    const removeButton = option.querySelector(".gift-option-remove");
    const moveUpButton = option.querySelector('.gift-option-move[data-direction="up"]');
    const moveDownButton = option.querySelector('.gift-option-move[data-direction="down"]');

    if (actions instanceof HTMLElement && removeButton instanceof HTMLElement && removeButton.parentElement !== actions) {
      actions.appendChild(removeButton);
    }

    if (moveUpButton instanceof HTMLElement) {
      moveUpButton.style.display = index === 0 ? "none" : "";
    }

    if (moveDownButton instanceof HTMLElement) {
      moveDownButton.style.display = index === giftOptions.length - 1 ? "none" : "";
    }
  });
}

function addGiftOption() {
  const label = giftCustomInput.value.trim();
  if (!label) {
    return;
  }

  if (giftOptions.includes(label)) {
    giftCustomInput.value = "";
    return;
  }

  giftOptions.push(label);
  giftCustomInput.value = "";
  buildGiftOptionMarkup();
  saveGiftState();
}

function removeGiftOption(label) {
  giftOptions = giftOptions.filter((option) => option !== label);
  selectedGifts = selectedGifts.filter((gift) => gift.label !== label);
  buildGiftOptionMarkup();
  renderSelectedGifts();
  calculateLoan();
  saveGiftState();
}

function moveGiftOption(label, direction) {
  const currentIndex = giftOptions.indexOf(label);
  if (currentIndex === -1) {
    return;
  }

  const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
  if (targetIndex < 0 || targetIndex >= giftOptions.length) {
    return;
  }

  [giftOptions[currentIndex], giftOptions[targetIndex]] = [giftOptions[targetIndex], giftOptions[currentIndex]];
  buildGiftOptionMarkup();
  saveGiftState();
}

function openGiftModal() {
  buildGiftOptionMarkup();
  giftModal.classList.remove("is-hidden");
}

function closeGiftModal() {
  giftModal.classList.add("is-hidden");
}

function getGiftTotal() {
  return selectedGifts.reduce((total, gift) => total + parseNumber(gift.value), 0);
}

function removeGiftByIndex(index) {
  if (!Number.isInteger(index) || !selectedGifts[index]) {
    return;
  }

  selectedGifts.splice(index, 1);
  renderSelectedGifts();
  calculateLoan();
  saveGiftState();
}

function renderSelectedGifts() {
  if (selectedGifts.length === 0) {
    selectedGiftsContainer.className = "gift-list empty-state";
    selectedGiftsContainer.textContent = "ยังไม่ได้เลือกของแถม";
    return;
  }

  selectedGiftsContainer.className = "gift-list";
  selectedGiftsContainer.innerHTML = selectedGifts.map((gift, index) => `
    <div class="gift-value-row">
      <span>${gift.label}</span>
      <div class="gift-row-actions">
        <input
          type="text"
          inputmode="decimal"
          data-gift-index="${index}"
          value="${gift.value}"
          placeholder="กรอกมูลค่า"
        >
        <button type="button" class="gift-remove-button" data-remove-gift-index="${index}">ลบ</button>
      </div>
    </div>
  `).join("");
}

function clearSelectedGifts() {
  selectedGifts = [];
  selectedGiftsContainer.innerHTML = "";
  renderSelectedGifts();
  buildGiftOptionMarkup();
}

function syncSelectedGiftsFromModal() {
  const checkedValues = Array.from(
    giftOptionsContainer.querySelectorAll('input[type="checkbox"]:checked')
  ).map((input) => input.value);

  selectedGifts = checkedValues.map((label) => {
    const existingGift = selectedGifts.find((gift) => gift.label === label);
    return existingGift ?? { label, value: "" };
  });

  renderSelectedGifts();
  calculateLoan();
  closeGiftModal();
  saveGiftState();
}

function clearResults() {
  monthlyPaymentDisplay.textContent = "0.00";
  balloonPaymentDisplay.textContent = "0.00";
  loanAmountDisplay.textContent = "0.00";
  formPriceWithColorDisplay.textContent = "0.00";
  formNetPriceDisplay.textContent = "0.00";
  totalInterestDisplay.textContent = "0.00";
  totalPaymentDisplay.textContent = "0.00";
  dayDownPaymentDisplay.textContent = "0.00";
  daySupportDisplay.textContent = "0.00";
  daySubtotalDisplay.textContent = "0.00";
  vatDisplay.textContent = "0.00";
  remainingMarginDisplay.textContent = "0.00";
  driveAwayTotalDisplay.textContent = "0.00";
  remainingBalanceDisplay.textContent = "0.00";
}

function getCalculatorSummary() {
  const priceWithColor = getPriceWithColor();
  const netCarPrice = getNetCarPrice();
  const accessoryAmount = parseNumber(accessoryInput.value);
  const downPayment = parseNumber(downPaymentInput.value);
  const supportDiscount = parseNumber(supportDiscountInput.value);
  const annualRatePercent = parseNumber(interestRateInput.value);
  const loanTermMonths = parseNumber(loanTermSelect.value);
  const loanTermYears = loanTermMonths / 12;
  const isBalloon = calculationTypeSelect.value === "balloon";

  const loanAmount = Math.max(netCarPrice - downPayment, 0);
  const rvPercentage = parseNumber(rvPercentageInput.value);
  const balloonPayment = isBalloon ? carPriceInput * (rvPercentage / 100) : 0;

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
  const redPlateDeposit = parseNumber(redPlateDepositDisplay.textContent);
  const financeFee = parseNumber(financeFeeInput.value);
  const bookingDeposit = parseNumber(bookingDepositInput.value);
  const extraTransfer = parseNumber(extraTransferInput.value);
  const margin = parseNumber(marginInput.value);
  const giftTotal = getGiftTotal();

  const daySubtotal = downPayment - accessoryAmount - supportDiscount;
  const vatAmount = (accessoryAmount + supportDiscount) * 0.03;
  const driveAwayTotal = daySubtotal + registrationFee + redPlateDeposit + financeFee + vatAmount;
  const remainingBalance = driveAwayTotal - bookingDeposit + extraTransfer;
  const remainingMargin = margin - giftTotal;

  return {
    priceWithColor,
    netCarPrice,
    accessoryAmount,
    downPayment,
    supportDiscount,
    annualRatePercent,
    loanTermMonths,
    isBalloon,
    loanAmount,
    rvPercentage,
    balloonPayment,
    monthlyPayment,
    totalPayment,
    totalInterest,
    registrationFee,
    redPlateDeposit,
    financeFee,
    bookingDeposit,
    extraTransfer,
    margin,
    giftTotal,
    daySubtotal,
    vatAmount,
    driveAwayTotal,
    remainingBalance,
    remainingMargin
  };
}

function calculateLoan() {
  const summary = getCalculatorSummary();
  const {
    priceWithColor,
    netCarPrice,
    accessoryAmount,
    downPayment,
    loanAmount,
    balloonPayment,
    monthlyPayment,
    totalPayment,
    totalInterest,
    isBalloon,
    vatAmount,
    driveAwayTotal,
    remainingBalance,
    remainingMargin,
    daySubtotal
  } = summary;
  const displayedMonthlyPayment = getDisplayedMonthlyPayment(monthlyPayment, isBalloon);

  monthlyPaymentDisplay.textContent = formatNumber(displayedMonthlyPayment);
  balloonPaymentDisplay.textContent = formatNumber(balloonPayment);
  loanAmountDisplay.textContent = formatNumber(loanAmount);
  formPriceWithColorDisplay.textContent = formatNumber(priceWithColor);
  formNetPriceDisplay.textContent = formatNumber(netCarPrice);
  totalInterestDisplay.textContent = formatNumber(totalInterest);
  totalPaymentDisplay.textContent = formatNumber(totalPayment);

  dayDownPaymentDisplay.textContent = formatNumber(downPayment);
  daySupportDisplay.textContent = formatNumber(accessoryAmount);
  daySubtotalDisplay.textContent = formatNumber(daySubtotal);
  vatDisplay.textContent = formatNumber(vatAmount);
  driveAwayTotalDisplay.textContent = formatNumber(driveAwayTotal);
  remainingBalanceDisplay.textContent = formatNumber(remainingBalance);
  remainingMarginDisplay.textContent = formatNumber(remainingMargin);
}

function buildSummaryText() {
  const summary = getCalculatorSummary();
  const campaignLabel = calculationTypeSelect.options[calculationTypeSelect.selectedIndex]?.text ?? "";
  const modelText = [carModelInput.value.trim(), carSubmodelInput.value.trim()].filter(Boolean).join(" ");
  const headline = modelText || "รุ่นรถที่เลือก";
  const carPrice = parseNumber(carPriceInput.value);
  const specialColor = parseNumber(specialColorInput.value);
  const downPaymentPercent = downPaymentPercentSelect.value === "custom"
    ? (summary.netCarPrice > 0 ? (summary.downPayment / summary.netCarPrice) * 100 : 0)
    : parseNumber(downPaymentPercentSelect.value);
  const netPrice = summary.netCarPrice;
  const loanYears = summary.loanTermMonths / 12;
  const giftsText = selectedGifts.length > 0
    ? selectedGifts.map((gift) => gift.label).join("\n")
    : "- ยังไม่ได้เลือกของแถม";

  const installmentLines = summary.isBalloon
    ? [
        `งวดที่ 1-${Math.max(summary.loanTermMonths - 1, 1)} (${formatPercent(summary.annualRatePercent)}%) = ${formatSummaryNumber(getDisplayedMonthlyPayment(summary.monthlyPayment, true))} บาท`,
        `งวดที่ ${summary.loanTermMonths} (RV${formatPercent(summary.rvPercentage)}%) = ${formatSummaryNumber(summary.balloonPayment)} บาท`,
        `( งวดที่ ${summary.loanTermMonths} ลูกค้าสามารถปิดยอดได้ หรือ สามารถผ่อนต่อได้อีก 2 ปี คำนวณดอกเบี้ยจากไฟแนนซ์ )`
      ]
    : [
        `งวดที่ 1-${summary.loanTermMonths} (${formatPercent(summary.annualRatePercent)}%) = ${formatSummaryNumber(summary.monthlyPayment)} บาท`
      ];

  return [
    `🚗 ${headline} 💨`,
    `(🌼 ${campaignLabel} 🌼)`,
    `ราคารถ ${formatSummaryNumber(carPrice)} บาท`,
    `บวกสีพิเศษ ${formatSummaryNumber(specialColor)} บาท`,
    `             = ${formatSummaryNumber(summary.priceWithColor)} บาท`,
    `บวกอุปกรณ์ ${formatSummaryNumber(summary.accessoryAmount)} บาท`,
    `ราคาสุทธิ ${formatSummaryNumber(netPrice)} บาท`,
    `ดาวน์${formatPercent(downPaymentPercent)}% = ${formatSummaryNumber(summary.downPayment)} บาท`,
    `ยอดจัด ${formatSummaryNumber(summary.loanAmount)} บาท`,
    `ผ่อน ${formatPercent(loanYears)} ปี`,
    ...installmentLines,
    "",
    "🌼✨ ของแถม ✨🌼",
    giftsText,
    "",
    "✨🎀 ค่าใช้จ่ายวันรับรถ 🎀✨",
    `1.เงินดาวน์ ${formatSummaryNumber(summary.downPayment)} บาท`,
    `บวกอุปกรณ์ ${formatSummaryNumber(summary.accessoryAmount)} บาท`,
    `ส่วนลดช่วยดาวน์ ${formatSummaryNumber(summary.supportDiscount)} บาท`,
    `                      = ${formatSummaryNumber(summary.daySubtotal)} บาท`,
    `2.ค่าจดทะเบียน = ${formatSummaryNumber(summary.registrationFee)}`,
    `3.ค่ามัดจำป้ายแดง = ${formatSummaryNumber(summary.redPlateDeposit)} (ได้คืน)`,
    `4.ค่าธรรมเนียมไฟแนนซ์ = ${formatSummaryNumber(summary.financeFee)} บาท`,
    `5.VAT 3% (${formatSummaryNumber(summary.accessoryAmount + summary.supportDiscount)}) = ${formatSummaryNumber(summary.vatAmount)} บาท`,
    `รวมค่าใช้จ่ายออกรถ = ${formatSummaryNumber(summary.driveAwayTotal)} บาท`,
    `หักเงินจอง       = ${formatSummaryNumber(summary.bookingDeposit)} บาท`,
    `*ผ่านไฟแนนซ์ลูกค้าโอนเพิ่ม ${formatSummaryNumber(summary.extraTransfer)}`,
    `เหลือยอดชำระ = ${formatSummaryNumber(summary.remainingBalance)} บาท`
  ].join("\n");
}

async function copySummaryText() {
  const summaryText = buildSummaryText();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(summaryText);
    } else {
      const helper = document.createElement("textarea");
      helper.value = summaryText;
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }

    setMessage("คัดลอกข้อความสรุปแล้ว");
  } catch (error) {
    setMessage("ไม่สามารถคัดลอกข้อความสรุปได้");
  }
}

function resetFormState() {
  form.reset();

  selectedGifts = [];
  giftCustomInput.value = "";
  selectedGiftsContainer.className = "gift-list empty-state";
  selectedGiftsContainer.textContent = "ยังไม่ได้เลือกของแถม";

  carModelInput.value = "";
  carSubmodelInput.value = "";
  carSubmodelOptions.innerHTML = "";

  carPriceInput.value = "";
  specialColorInput.value = "";
  accessoryInput.value = "";
  downPaymentInput.value = "";
  supportDiscountInput.value = "";
  interestRateInput.value = "";
  rvPercentageInput.value = "";
  registrationFeeInput.value = "";
  redPlateDepositDisplay.textContent = formatNumber(3500);
  financeFeeInput.value = "";
  bookingDepositInput.value = "";
  extraTransferInput.value = "";
  marginInput.value = "0";

  calculationTypeSelect.value = "balloon";
  downPaymentPercentSelect.value = "15";
  loanTermSelect.value = "84";

  giftOptionsContainer.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  closeGiftModal();
  toggleCalculationType();
  clearResults();
  calculateLoan();
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
  renderSelectedGifts();
  toggleCalculationType();
  syncDownPaymentHint();
  calculateLoan();

  loadGiftStateFromFirebase();

  window.addEventListener("firebase-gift-store-ready", () => {
    loadGiftStateFromFirebase();
  }, { once: true });
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
  accessoryInput,
  supportDiscountInput,
  rvPercentageInput,
  registrationFeeInput,
  financeFeeInput,
  bookingDepositInput,
  extraTransferInput,
  marginInput
].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === carPriceInput) {
      setMessage("");
    }

    if (downPaymentPercentSelect.value !== "custom" && [carPriceInput, specialColorInput, accessoryInput].includes(input)) {
      syncDownPaymentWithPercent();
      return;
    }

    calculateLoan();
  });

  input.addEventListener("blur", handleFormattedNumericInput);
});

interestRateInput.addEventListener("input", () => {
  calculateLoan();
});

interestRateInput.addEventListener("blur", (event) => {
  formatInterestRateInput(interestRateInput, interestRateInput.value);
  calculateLoan();
});

selectedGiftsContainer.addEventListener("input", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const index = Number(input.dataset.giftIndex);
  if (!Number.isInteger(index) || !selectedGifts[index]) {
    return;
  }

  selectedGifts[index].value = input.value;
  calculateLoan();
  saveGiftState();
});

selectedGiftsContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("[data-remove-gift-index]");
  if (!(button instanceof HTMLElement)) {
    return;
  }

  removeGiftByIndex(Number(button.dataset.removeGiftIndex));
});

selectedGiftsContainer.addEventListener("blur", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const index = Number(input.dataset.giftIndex);
  if (!Number.isInteger(index) || !selectedGifts[index]) {
    return;
  }

  handleFormattedNumericInput(event);
  selectedGifts[index].value = input.value;
  calculateLoan();
  saveGiftState();
}, true);

giftOptionsContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const moveButton = target.closest("[data-move-option]");
  if (moveButton instanceof HTMLElement) {
    moveGiftOption(
      moveButton.dataset.moveOption ?? "",
      moveButton.dataset.direction ?? ""
    );
    return;
  }

  const removeButton = target.closest("[data-remove-option]");
  if (!(removeButton instanceof HTMLElement)) {
    return;
  }

  removeGiftOption(removeButton.dataset.removeOption ?? "");
});

loanTermSelect.addEventListener("change", calculateLoan);
loanTermSelect.addEventListener("change", toggleCalculationType);
addGiftButton.addEventListener("click", openGiftModal);
giftModalCloseButton.addEventListener("click", closeGiftModal);
giftModalCancelButton.addEventListener("click", closeGiftModal);
giftModalConfirmButton.addEventListener("click", syncSelectedGiftsFromModal);
giftCustomAddButton.addEventListener("click", addGiftOption);
giftCustomInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addGiftOption();
  }
});
giftModal.addEventListener("click", (event) => {
  if (event.target === giftModal) {
    closeGiftModal();
  }
});

resetButton.addEventListener("click", () => {
  resetFormState();
});

copySummaryButton.addEventListener("click", () => {
  copySummaryText();
});

initializeCalculator();
