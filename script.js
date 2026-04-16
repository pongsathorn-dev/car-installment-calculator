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
const DEFAULT_TOYOTA_MODEL_DATA = JSON.parse(JSON.stringify(TOYOTA_MODEL_DATA));
const VEHICLE_CATALOG_STORAGE_KEY = "car-installment-vehicle-catalog";
const OPTION_LISTS_STORAGE_KEY = "car-installment-option-lists";
const CALCULATOR_FORM_STORAGE_KEY = "car-installment-calculator-form-state";
const DEFAULT_CUSTOMER_CHANNEL_OPTIONS = [
  "Walk in",
  "Tiktok",
  "เพจสาขา",
  "Motor Show",
  "Phone"
];
const DEFAULT_FINANCE_PROVIDER_OPTIONS = [
  "FIN",
  "TLT",
  "TLT ( Smart Loan )",
  "SCB",
  "KBANK"
];

const form = document.getElementById("loan-form");
const modelCreateForm = document.getElementById("model-create-form");
const newModelNameInput = document.getElementById("new-model-name");
const modelAdminList = document.getElementById("model-admin-list");
const modelAdminEmpty = document.getElementById("model-admin-empty");
const modelAdminDetail = document.getElementById("model-admin-detail");
const modelEditForm = document.getElementById("model-edit-form");
const editModelNameInput = document.getElementById("edit-model-name");
const deleteModelButton = document.getElementById("delete-model-button");
const selectedModelTitle = document.getElementById("selected-model-title");
const selectedModelMeta = document.getElementById("selected-model-meta");
const submodelCreateForm = document.getElementById("submodel-create-form");
const newSubmodelNameInput = document.getElementById("new-submodel-name");
const newSubmodelPriceInput = document.getElementById("new-submodel-price");
const submodelAdminList = document.getElementById("submodel-admin-list");
const channelCreateForm = document.getElementById("channel-create-form");
const newChannelNameInput = document.getElementById("new-channel-name");
const channelAdminList = document.getElementById("channel-admin-list");
const financeCreateForm = document.getElementById("finance-create-form");
const newFinanceNameInput = document.getElementById("new-finance-name");
const financeAdminList = document.getElementById("finance-admin-list");
const adminTabButtons = Array.from(document.querySelectorAll("[data-admin-tab]"));
const adminTabPanels = Array.from(document.querySelectorAll("[data-admin-panel]"));
const adminConfirmModal = document.getElementById("admin-confirm-modal");
const adminConfirmTitle = document.getElementById("admin-confirm-title");
const adminConfirmText = document.getElementById("admin-confirm-text");
const adminConfirmCloseButton = document.getElementById("admin-confirm-close");
const adminConfirmCancelButton = document.getElementById("admin-confirm-cancel");
const adminConfirmSubmitButton = document.getElementById("admin-confirm-submit");
const syncToyotaDataButton = document.getElementById("sync-toyota-data-button");
const customerNameInput = document.getElementById("customer-name");
const customerPhoneInput = document.getElementById("customer-phone");
const customerChannelInput = document.getElementById("customer-channel");
const deliveryDateInput = document.getElementById("delivery-date");
const financeProviderInput = document.getElementById("finance-provider");
const calculationTypeSelect = document.getElementById("calculation-type");
const carModelInput = document.getElementById("car-model");
const carSubmodelInput = document.getElementById("car-submodel");
const carColorSelect = document.getElementById("car-color");
const carPriceInput = document.getElementById("car-price");
const specialColorInput = document.getElementById("special-color");
const accessoryInput = document.getElementById("support-down-payment");
const accessoryFieldLabel = document.getElementById("accessory-field-label");
const accessoryModeToggleButton = document.getElementById("accessory-mode-toggle");
const downPaymentPercentSelect = document.getElementById("down-payment-percent");
const downPaymentInput = document.getElementById("down-payment");
const downPaymentPercentHint = document.getElementById("down-payment-percent-hint");
const supportDiscountInput = document.getElementById("support-discount");
const interestRateInput = document.getElementById("interest-rate");
const loanTermSelect = document.getElementById("loan-term");
const rvField = document.getElementById("rv-field");
const rvPercentageInput = document.getElementById("rv-percentage");
const copySummaryButton = document.getElementById("copy-summary");
const copyTopSummaryButton = document.getElementById("copy-top-summary");
const resetButton = document.getElementById("reset-form");
const message = document.getElementById("message");

const monthlyPaymentLabel = document.getElementById("monthly-payment-label");
const monthlyPaymentDisplay = document.getElementById("monthly-payment-display");
const balloonPaymentResult = document.getElementById("balloon-payment-result");
const balloonPaymentDisplay = document.getElementById("balloon-payment-display");
const loanAmountDisplay = document.getElementById("loan-amount-display");
const formPriceWithColorDisplay = document.getElementById("form-price-with-color-display");
const formNetPriceLabel = document.getElementById("form-net-price-label");
const formNetPriceDisplay = document.getElementById("form-net-price-display");
const totalInterestDisplay = document.getElementById("total-interest-display");
const totalPaymentDisplay = document.getElementById("total-payment-display");

const dayDownPaymentCard = document.getElementById("day-down-payment-card");
const dayDownPaymentDisplay = document.getElementById("day-down-payment-display");
const daySupportCard = document.getElementById("day-support-card");
const daySupportLabel = document.getElementById("day-support-label");
const daySupportDisplay = document.getElementById("day-support-display");
const daySupportDiscountCard = document.getElementById("day-support-discount-card");
const daySubtotalCard = document.getElementById("day-subtotal-card");
const daySubtotalLabel = document.getElementById("day-subtotal-label");
const daySubtotalDisplay = document.getElementById("day-subtotal-display");
const registrationFeeInput = document.getElementById("registration-fee-input");
const redPlateDepositDisplay = document.getElementById("red-plate-deposit-input");
const financeFeeInput = document.getElementById("finance-fee-input");
const vatCard = document.getElementById("vat-card");
const vatDisplay = document.getElementById("vat-display");
const redPlateCard = document.getElementById("red-plate-card");
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
let customerChannelOptions = [...DEFAULT_CUSTOMER_CHANNEL_OPTIONS];
let financeProviderOptions = [...DEFAULT_FINANCE_PROVIDER_OPTIONS];
let selectedCatalogModel = "";
let pendingAdminConfirmationAction = null;
let isSubmittingAdminConfirmation = false;

const TOYOTA_THAILAND_IMPORT_SOURCES = [
  { modelName: "Yaris", url: "https://www.toyota.co.th/en/model/yaris/grade" },
  { modelName: "Yaris ATIV", url: "https://www.toyota.co.th/en/model/yarisativ/grade" },
  { modelName: "Yaris ATIV GR Sport", url: "https://www.toyota.co.th/en/model/yarisativ_grsport/grade" },
  { modelName: "Yaris Cross", url: "https://www.toyota.co.th/en/model/yariscross/grade" },
  { modelName: "Corolla Cross", url: "https://www.toyota.co.th/en/model/corollacross/grade" },
  { modelName: "Corolla Altis", url: "https://www.toyota.co.th/en/model/altis/grade" },
  { modelName: "Corolla Altis GR Sport", url: "https://www.toyota.co.th/en/model/altis_grsport/grade" },
  { modelName: "CAMRY", url: "https://www.toyota.co.th/en/model/camry/grade" },
  { modelName: "Veloz", url: "https://www.toyota.co.th/en/model/veloz/grade" },
  { modelName: "Innova Zenix", url: "https://www.toyota.co.th/en/model/innovazenix/grade" },
  { modelName: "Fortuner Leader", url: "https://www.toyota.co.th/en/model/fortuner_leader/grade" },
  { modelName: "Fortuner Legender", url: "https://www.toyota.co.th/en/model/fortuner_legender/grade" },
  { modelName: "Fortuner GR Sport", url: "https://www.toyota.co.th/en/model/fortuner_grsport/grade" },
  { modelName: "Alphard", url: "https://www.toyota.co.th/en/model/alphard/grade" },
  { modelName: "bZ4X", url: "https://www.toyota.co.th/en/model/bz4x/grade" },
  { modelName: "Hiace", url: "https://www.toyota.co.th/en/model/hiace/grade" },
  { modelName: "Commuter", url: "https://www.toyota.co.th/en/model/commuter/grade" },
  { modelName: "Majesty", url: "https://www.toyota.co.th/en/model/majesty/grade" },
  { modelName: "Hilux Champ", url: "https://www.toyota.co.th/en/model/hiluxchamp/grade" },
  { modelName: "Hilux Revo Standard Cab", url: "https://www.toyota.co.th/en/model/hilux_revo_standard/grade" },
  { modelName: "Hilux Revo Z Edition", url: "https://www.toyota.co.th/en/model/hilux_revo_zedition/grade" },
  { modelName: "Hilux Travo Standard Cab 4TREX", url: "https://www.toyota.co.th/en/model/hilux_travo_standard/grade" },
  { modelName: "Hilux Travo Prerunner & 4TREX", url: "https://www.toyota.co.th/en/model/hilux_travo_prerunner/grade" },
  { modelName: "Hilux Travo Overland", url: "https://www.toyota.co.th/en/model/hilux_travo_overland/grade" },
  { modelName: "Hilux Travo-e", url: "https://www.toyota.co.th/en/model/hilux_travo_e/grade" },
  { modelName: "GR 86", url: "https://www.toyota.co.th/en/model/gr86/grade" },
  { modelName: "GR Corolla", url: "https://www.toyota.co.th/en/model/grcorolla/grade" },
  { modelName: "GR Yaris", url: "https://www.toyota.co.th/en/model/gryaris/grade" }
];

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

function normalizeColorName(value) {
  return String(value ?? "")
    .replace(/^[-*•\d.)\s]+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeColorList(colors) {
  if (!Array.isArray(colors)) {
    return [];
  }

  const seenColors = new Set();
  return colors.reduce((result, color) => {
    const normalizedColor = normalizeColorName(color);
    if (!normalizedColor) {
      return result;
    }

    const lookupKey = normalizedColor.toLocaleLowerCase("th");
    if (seenColors.has(lookupKey)) {
      return result;
    }

    seenColors.add(lookupKey);
    result.push(normalizedColor);
    return result;
  }, []);
}


function isBalloonCalculationSelected() {
  return calculationTypeSelect.value === "balloon";
}

function isDiscountModeSelected() {
  return accessoryModeToggleButton.dataset.mode === "discount";
}

function getAdjustmentLabel() {
  return isDiscountModeSelected() ? "ส่วนลด" : "บวกอุปกรณ์";
}

function setElementVisibility(element, isVisible) {
  if (!(element instanceof HTMLElement)) {
    return;
  }

  element.classList.toggle("is-hidden", !isVisible);
  element.hidden = !isVisible;
  element.style.display = isVisible ? "" : "none";
}

function updateAccessoryModeUI() {
  const isDiscountMode = isDiscountModeSelected();
  const isStandardCalculation = !isBalloonCalculationSelected();
  const adjustmentLabel = getAdjustmentLabel();

  accessoryFieldLabel.textContent = adjustmentLabel;
  accessoryModeToggleButton.textContent = isDiscountMode ? "สลับเป็นบวกอุปกรณ์" : "สลับเป็นส่วนลด";
  accessoryModeToggleButton.setAttribute("aria-pressed", String(isDiscountMode));
  setElementVisibility(accessoryModeToggleButton, isStandardCalculation);
  formNetPriceLabel.textContent = isDiscountMode
    ? "ราคารถ + บวกสีพิเศษ - ส่วนลด"
    : "ราคารถ + บวกสีพิเศษ + บวกอุปกรณ์";
  daySupportLabel.textContent = adjustmentLabel;

  setElementVisibility(daySupportCard, !isDiscountMode);
  setElementVisibility(daySupportDiscountCard, !isDiscountMode);
  setElementVisibility(daySubtotalCard, !isDiscountMode);
  setElementVisibility(vatCard, !isDiscountMode);
  redPlateCard?.classList.toggle("vat-pair-card-full", isDiscountMode);

  const supportDiscountField = daySupportDiscountCard?.querySelector("input");
  if (supportDiscountField instanceof HTMLElement) {
    supportDiscountField.hidden = isDiscountMode;
    supportDiscountField.style.display = isDiscountMode ? "none" : "";
  }

  dayDownPaymentCard.classList.toggle("day-costs-top-card-full", isDiscountMode);
}

function setBalloonVisibility(isBalloon) {
  rvField.classList.toggle("is-hidden", !isBalloon);
  balloonPaymentResult.classList.toggle("is-hidden", !isBalloon);
  rvField.hidden = !isBalloon;
  balloonPaymentResult.hidden = !isBalloon;
  rvField.style.display = isBalloon ? "" : "none";
  balloonPaymentResult.style.display = isBalloon ? "" : "none";
  rvField.setAttribute("aria-hidden", String(!isBalloon));
  balloonPaymentResult.setAttribute("aria-hidden", String(!isBalloon));
}

function setMessage(text = "") {
  if (message instanceof HTMLElement) {
    message.textContent = text;
  }
}

function setActiveAdminTab(tabName) {
  adminTabButtons.forEach((button) => {
    if (!(button instanceof HTMLElement)) {
      return;
    }

    const isActive = button.dataset.adminTab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    if (button instanceof HTMLButtonElement) {
      button.type = "button";
    }
  });

  adminTabPanels.forEach((panel) => {
    if (!(panel instanceof HTMLElement)) {
      return;
    }

    const isActive = panel.dataset.adminPanel === tabName;
    panel.classList.toggle("is-hidden", !isActive);
    panel.hidden = !isActive;
  });
}

function hasCalculatorVehicleFields() {
  return (
    carModelInput instanceof HTMLSelectElement &&
    (carSubmodelInput instanceof HTMLInputElement || carSubmodelInput instanceof HTMLSelectElement) &&
    carPriceInput instanceof HTMLInputElement
  );
}

function closeAdminConfirmationModal() {
  if (adminConfirmModal instanceof HTMLElement) {
    adminConfirmModal.classList.add("is-hidden");
  }
  if (adminConfirmSubmitButton instanceof HTMLButtonElement) {
    adminConfirmSubmitButton.disabled = false;
    adminConfirmSubmitButton.textContent = "ยืนยัน";
  }
  pendingAdminConfirmationAction = null;
  isSubmittingAdminConfirmation = false;
}

function openAdminConfirmationModal(detailText, onConfirm, options = {}) {
  if (
    !(adminConfirmModal instanceof HTMLElement) ||
    !(adminConfirmText instanceof HTMLElement) ||
    !(adminConfirmSubmitButton instanceof HTMLButtonElement)
  ) {
    if (typeof onConfirm === "function") {
      onConfirm();
    }
    return;
  }

  if (adminConfirmTitle instanceof HTMLElement) {
    adminConfirmTitle.textContent = options.title ?? "ยืนยันการทำรายการ";
  }
  adminConfirmText.textContent = detailText;
  adminConfirmSubmitButton.textContent = options.confirmLabel ?? "ยืนยัน";
  pendingAdminConfirmationAction = onConfirm;
  adminConfirmModal.classList.remove("is-hidden");
}

async function submitAdminConfirmation() {
  if (isSubmittingAdminConfirmation) {
    return;
  }

  const action = pendingAdminConfirmationAction;
  if (typeof action !== "function") {
    closeAdminConfirmationModal();
    return;
  }

  isSubmittingAdminConfirmation = true;
  if (adminConfirmSubmitButton instanceof HTMLButtonElement) {
    adminConfirmSubmitButton.disabled = true;
    adminConfirmSubmitButton.textContent = "กำลังบันทึก...";
  }

  try {
    await action();
    closeAdminConfirmationModal();
  } catch (error) {
    console.error("Admin confirmation action failed:", error);
    if (adminConfirmSubmitButton instanceof HTMLButtonElement) {
      adminConfirmSubmitButton.disabled = false;
      adminConfirmSubmitButton.textContent = "ยืนยัน";
    }
    isSubmittingAdminConfirmation = false;
    setMessage("บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
  }
}

function parseToyotaThailandPrice(text) {
  const matchedPrice = String(text ?? "").match(/(?:฿|ราคาเริ่มต้น\s*|start price\s*)([\d,]+)/i);
  return matchedPrice ? parseNumber(matchedPrice[1]) : 0;
}

function parseToyotaThailandGradePage(content) {
  const lines = String(content ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const entries = [];
  const seenNames = new Set();
  let inModelLineup = false;
  let pendingGradeName = "";
  let expectedGradeCount = 0;

  lines.forEach((line) => {
    if (/model line-up|discover your/i.test(line)) {
      inModelLineup = true;
      return;
    }

    if (!inModelLineup) {
      return;
    }

    const matchedGradeCount = line.match(/(?:there are|มีทั้งหมด)\s*(\d+)\s*(?:grade|เกรด)/i);
    if (matchedGradeCount) {
      expectedGradeCount = parseNumber(matchedGradeCount[1]);
      return;
    }

    if (/promotion|special offers|specification|accessories|ดูข้อมูลจำเพาะ|ข้อเสนอพิเศษ/i.test(line)) {
      inModelLineup = false;
      pendingGradeName = "";
      return;
    }

    if (/^#{2,4}\s+/.test(line)) {
      pendingGradeName = line.replace(/^#{2,4}\s+/, "").trim();
      return;
    }

    if (!pendingGradeName) {
      return;
    }

    const parsedPrice = parseToyotaThailandPrice(line);
    if (!parsedPrice || seenNames.has(pendingGradeName)) {
      return;
    }

    seenNames.add(pendingGradeName);
    entries.push({
      name: pendingGradeName,
      price: parsedPrice
    });
    pendingGradeName = "";
  });

  return {
    entries,
    expectedGradeCount,
    isComplete: expectedGradeCount > 0 ? entries.length >= expectedGradeCount : entries.length > 0
  };
}

async function fetchToyotaThailandCatalog() {
  const importedModels = {};
  const failedSources = [];

  for (let index = 0; index < TOYOTA_THAILAND_IMPORT_SOURCES.length; index += 1) {
    const source = TOYOTA_THAILAND_IMPORT_SOURCES[index];
    setMessage(`กำลังดึงข้อมูลจาก Toyota Thailand (${index + 1}/${TOYOTA_THAILAND_IMPORT_SOURCES.length}) : ${source.modelName}`);

    try {
      const proxyTargetUrl = source.url.replace(/^https?:\/\//, "");
      const response = await fetch(`https://r.jina.ai/http://${proxyTargetUrl}`, {
        method: "GET",
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const content = await response.text();
      const parsedResult = parseToyotaThailandGradePage(content);

      if (!parsedResult.entries.length) {
        throw new Error("No grades found");
      }

      importedModels[source.modelName] = parsedResult;
    } catch (error) {
      console.error(`Failed to fetch Toyota Thailand data for ${source.modelName}:`, error);
      failedSources.push(source.modelName);
    }
  }

  return {
    importedModels,
    failedSources
  };
}

function buildToyotaCatalogDiff(importedModels) {
  const changes = [];

  Object.entries(importedModels).forEach(([modelName, importedModel]) => {
    const importedEntries = Array.isArray(importedModel) ? importedModel : importedModel.entries ?? [];
    const allowRemoval = Array.isArray(importedModel) ? true : importedModel.isComplete !== false;
    const currentEntries = TOYOTA_MODEL_DATA[modelName] ?? [];
    const currentByName = new Map(currentEntries.map((entry) => [entry.name, entry.price]));
    const importedByName = new Map(importedEntries.map((entry) => [entry.name, entry.price]));

    importedEntries.forEach((entry) => {
      if (!currentByName.has(entry.name)) {
        changes.push(`+ ${modelName}: เพิ่มรุ่นย่อย ${entry.name} ราคา ${formatNumber(entry.price)} บาท`);
        return;
      }

      const currentPrice = currentByName.get(entry.name);
      if (currentPrice !== entry.price) {
        changes.push(`~ ${modelName}: ${entry.name} ราคา ${formatNumber(currentPrice)} -> ${formatNumber(entry.price)} บาท`);
      }
    });

    if (!allowRemoval) {
      return;
    }

    currentEntries.forEach((entry) => {
      if (!importedByName.has(entry.name)) {
        changes.push(`- ${modelName}: ลบรุ่นย่อย ${entry.name}`);
      }
    });
  });

  return changes;
}

function applyImportedToyotaCatalog(importedModels) {
  Object.entries(importedModels).forEach(([modelName, importedModel]) => {
    const importedEntries = Array.isArray(importedModel) ? importedModel : importedModel.entries ?? [];
    const allowRemoval = Array.isArray(importedModel) ? true : importedModel.isComplete !== false;
    const currentEntries = TOYOTA_MODEL_DATA[modelName] ?? [];
    const mergedEntries = importedEntries.map((entry) => ({
      name: entry.name,
      price: entry.price
    }));

    if (!allowRemoval) {
      currentEntries.forEach((entry) => {
        if (mergedEntries.some((importedEntry) => importedEntry.name === entry.name)) {
          return;
        }

        mergedEntries.push({
          name: entry.name,
          price: entry.price
        });
      });
    }

    TOYOTA_MODEL_DATA[modelName] = mergedEntries;
  });
}

async function handleToyotaThailandSync() {
  if (!(syncToyotaDataButton instanceof HTMLButtonElement)) {
    return;
  }

  syncToyotaDataButton.disabled = true;
  syncToyotaDataButton.textContent = "กำลังดึงข้อมูล...";

  try {
    const { importedModels, failedSources } = await fetchToyotaThailandCatalog();
    const importedModelNames = Object.keys(importedModels);

    if (!importedModelNames.length) {
      setMessage("ไม่สามารถดึงข้อมูลจาก Toyota Thailand ได้ในขณะนี้");
      return;
    }

    const changes = buildToyotaCatalogDiff(importedModels);
    if (changes.length === 0 && failedSources.length === 0) {
      setMessage("ไม่พบข้อมูลที่เปลี่ยนแปลงจาก Toyota Thailand");
      return;
    }

    const previewLines = [
      `ตรวจพบข้อมูลอัปเดตจาก Toyota Thailand จำนวน ${formatNumber(changes.length)} รายการ`,
      "",
      ...(changes.length > 0 ? changes : ["ไม่พบรายการที่แตกต่างจากข้อมูลปัจจุบัน"]),
      ...(failedSources.length > 0 ? ["", `หมายเหตุ: ดึงข้อมูลไม่สำเร็จ ${formatNumber(failedSources.length)} รุ่น`, ...failedSources.map((modelName) => `- ${modelName}`)] : [])
    ];

    openAdminConfirmationModal(
      previewLines.join("\n"),
      async () => {
        applyImportedToyotaCatalog(importedModels);
        await persistVehicleCatalogAndRefresh("อัปเดตข้อมูลจาก Toyota Thailand แล้ว");
      },
      {
        title: "ยืนยันอัปเดตข้อมูลจาก Toyota Thailand",
        confirmLabel: "ยืนยันอัปเดต"
      }
    );
  } catch (error) {
    console.error("Toyota Thailand sync failed:", error);
    setMessage("ดึงข้อมูลจาก Toyota Thailand ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
  } finally {
    syncToyotaDataButton.disabled = false;
    syncToyotaDataButton.textContent = "ดึงข้อมูลจาก Toyota Thailand";
  }
}

function cloneModelCatalog(data) {
  return JSON.parse(JSON.stringify(data));
}

function cloneOptionList(items) {
  return JSON.parse(JSON.stringify(items));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildSanitizedOptionList(source, fallbackList) {
  const rawItems = Array.isArray(source) ? source : fallbackList;
  const seenValues = new Set();
  const sanitizedList = [];

  rawItems.forEach((item) => {
    const normalizedValue = String(item ?? "").trim();
    if (!normalizedValue) {
      return;
    }

    const lookupKey = normalizedValue.toLocaleLowerCase("th");
    if (seenValues.has(lookupKey)) {
      return;
    }

    seenValues.add(lookupKey);
    sanitizedList.push(normalizedValue);
  });

  return sanitizedList.length > 0 ? sanitizedList : [...fallbackList];
}

function replaceOptionLists(source) {
  customerChannelOptions = buildSanitizedOptionList(
    source?.customerChannels,
    DEFAULT_CUSTOMER_CHANNEL_OPTIONS
  );
  financeProviderOptions = buildSanitizedOptionList(
    source?.financeProviders,
    DEFAULT_FINANCE_PROVIDER_OPTIONS
  );
}

function buildOptionListsState() {
  return {
    customerChannels: cloneOptionList(customerChannelOptions),
    financeProviders: cloneOptionList(financeProviderOptions)
  };
}

function loadOptionListsFromLocalStorage() {
  try {
    const storedValue = window.localStorage.getItem(OPTION_LISTS_STORAGE_KEY);
    if (!storedValue) {
      return false;
    }

    const parsedValue = JSON.parse(storedValue);
    replaceOptionLists(parsedValue);
    return true;
  } catch (error) {
    console.error("Failed to load option lists from localStorage:", error);
    return false;
  }
}

function saveOptionListsToLocalStorage() {
  try {
    window.localStorage.setItem(
      OPTION_LISTS_STORAGE_KEY,
      JSON.stringify(buildOptionListsState())
    );
  } catch (error) {
    console.error("Failed to save option lists to localStorage:", error);
  }
}

async function saveOptionListsState() {
  saveOptionListsToLocalStorage();
  window.dispatchEvent(new CustomEvent("option-lists-updated"));

  const firebaseGiftStore = window.firebaseGiftStore;
  if (firebaseGiftStore?.saveOptionLists) {
    await firebaseGiftStore.saveOptionLists(buildOptionListsState());
  }
}

async function loadOptionListsFromFirebase() {
  const firebaseGiftStore = window.firebaseGiftStore;
  if (!firebaseGiftStore?.loadOptionLists) {
    return;
  }

  try {
    const remoteState = await firebaseGiftStore.loadOptionLists();
    if (!remoteState) {
      return;
    }

    replaceOptionLists(remoteState);
    saveOptionListsToLocalStorage();
    refreshOptionListsUI();
  } catch (error) {
    console.error("Failed to load option lists from Firebase:", error);
  }
}

function populateSelectOptions(selectElement, items, placeholder) {
  if (!(selectElement instanceof HTMLSelectElement)) {
    return true;
  }

  const previousValue = selectElement.value;
  selectElement.innerHTML = [
    `<option value="">${escapeHtml(placeholder)}</option>`,
    ...items.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
  ].join("");

  if (items.includes(previousValue)) {
    selectElement.value = previousValue;
    return true;
  } else {
    selectElement.value = "";
    return previousValue === "";
  }
}

function renderOptionListManager(listElement, options, config) {
  if (!(listElement instanceof HTMLElement)) {
    return;
  }

  listElement.innerHTML = options.length === 0
    ? `<div class="empty-state">ยังไม่มีรายการ${escapeHtml(config.itemLabel)}</div>`
    : options.map((item) => `
      <form
        class="option-admin-row"
        data-option-form="${escapeHtml(config.key)}"
        data-original-option="${escapeHtml(item)}"
        autocomplete="off"
      >
        <label>
          <span>${escapeHtml(config.itemLabel)}</span>
          <input
            type="text"
            name="option-name"
            value="${escapeHtml(item)}"
            data-original-option="${escapeHtml(item)}"
          >
        </label>
        <div class="option-admin-actions">
          <button type="submit">บันทึก</button>
          <button
            type="button"
            class="secondary-button"
            data-delete-option="${escapeHtml(config.key)}"
            data-option-value="${escapeHtml(item)}"
          >ลบ</button>
        </div>
      </form>
    `).join("");
}

function refreshOptionListsUI() {
  const channelSelectionRetained = populateSelectOptions(customerChannelInput, customerChannelOptions, "เลือกช่องทาง");
  const financeSelectionRetained = populateSelectOptions(financeProviderInput, financeProviderOptions, "เลือก Finance");

  renderOptionListManager(channelAdminList, customerChannelOptions, {
    key: "customerChannels",
    itemLabel: "ช่องทาง"
  });
  renderOptionListManager(financeAdminList, financeProviderOptions, {
    key: "financeProviders",
    itemLabel: "Finance"
  });

  if (form instanceof HTMLFormElement && (!channelSelectionRetained || !financeSelectionRetained)) {
    saveCalculatorFormState();
  }
}

async function persistOptionListsAndRefresh(successMessage) {
  refreshOptionListsUI();

  try {
    await saveOptionListsState();
    refreshOptionListsUI();
    if (typeof successMessage === "string" && successMessage.trim()) {
      setMessage(successMessage);
    }
    return true;
  } catch (error) {
    console.error("Failed to persist option lists:", error);
    setMessage("บันทึกรายการไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    loadOptionListsFromLocalStorage();
    refreshOptionListsUI();
    return false;
  }
}

function getOptionListByKey(key) {
  if (key === "customerChannels") {
    return customerChannelOptions;
  }
  if (key === "financeProviders") {
    return financeProviderOptions;
  }
  return null;
}

async function addOptionListItem(key, rawValue) {
  const optionList = getOptionListByKey(key);
  if (!Array.isArray(optionList)) {
    return false;
  }

  const nextValue = String(rawValue ?? "").trim();
  if (!nextValue) {
    setMessage("กรุณากรอกรายการที่ต้องการเพิ่ม");
    return false;
  }

  const hasDuplicate = optionList.some((item) => item.toLocaleLowerCase("th") === nextValue.toLocaleLowerCase("th"));
  if (hasDuplicate) {
    setMessage("มีรายการนี้อยู่แล้ว");
    return false;
  }

  optionList.push(nextValue);
  return persistOptionListsAndRefresh(`เพิ่มรายการ${key === "customerChannels" ? "ช่องทาง" : "Finance"}แล้ว`);
}

async function updateOptionListItem(key, originalValue, rawNextValue) {
  const optionList = getOptionListByKey(key);
  if (!Array.isArray(optionList)) {
    return;
  }

  const normalizedOriginalValue = String(originalValue ?? "").trim();
  const nextValue = String(rawNextValue ?? "").trim();
  if (!normalizedOriginalValue || !nextValue) {
    setMessage("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  const targetIndex = optionList.findIndex((item) => item === normalizedOriginalValue);
  if (targetIndex < 0) {
    setMessage("ไม่พบรายการที่ต้องการแก้ไข");
    return;
  }

  const hasDuplicate = optionList.some((item, index) => {
    return index !== targetIndex && item.toLocaleLowerCase("th") === nextValue.toLocaleLowerCase("th");
  });
  if (hasDuplicate) {
    setMessage("มีรายการนี้อยู่แล้ว");
    return;
  }

  optionList[targetIndex] = nextValue;
  await persistOptionListsAndRefresh(`บันทึกรายการ${key === "customerChannels" ? "ช่องทาง" : "Finance"}แล้ว`);
}

function deleteOptionListItem(key, value) {
  const optionList = getOptionListByKey(key);
  if (!Array.isArray(optionList)) {
    return;
  }

  const normalizedValue = String(value ?? "").trim();
  if (!normalizedValue) {
    return;
  }

  openAdminConfirmationModal(
    `ยืนยันการลบรายการ "${normalizedValue}"`,
    async () => {
      const targetIndex = optionList.findIndex((item) => item === normalizedValue);
      if (targetIndex < 0) {
        setMessage("ไม่พบรายการที่ต้องการลบ");
        return;
      }

      optionList.splice(targetIndex, 1);
      await persistOptionListsAndRefresh(`ลบรายการ${key === "customerChannels" ? "ช่องทาง" : "Finance"}แล้ว`);
    },
    {
      title: "ยืนยันการลบรายการ",
      confirmLabel: "ยืนยันลบ"
    }
  );
}

function buildSanitizedVehicleCatalog(source) {
  const fallbackCatalog = cloneModelCatalog(DEFAULT_TOYOTA_MODEL_DATA);
  if (!source || typeof source !== "object" || Array.isArray(source)) {
    return fallbackCatalog;
  }

  const sanitizedCatalog = {};

  Object.entries(source).forEach(([rawModelName, rawEntries]) => {
    const modelName = String(rawModelName ?? "").trim();
    if (!modelName || !Array.isArray(rawEntries)) {
      return;
    }

    const sanitizedEntries = [];
    const usedSubmodelNames = new Set();

    rawEntries.forEach((entry) => {
      const submodelName = String(entry?.name ?? "").trim();
      if (!submodelName || usedSubmodelNames.has(submodelName)) {
        return;
      }

      usedSubmodelNames.add(submodelName);
      sanitizedEntries.push({
        name: submodelName,
        price: Math.max(parseNumber(entry?.price), 0),
        colors: normalizeColorList(entry?.colors ?? [])
      });
    });

    if (sanitizedEntries.length > 0) {
      sanitizedCatalog[modelName] = sanitizedEntries;
    }
  });

  return Object.keys(sanitizedCatalog).length > 0 ? sanitizedCatalog : fallbackCatalog;
}

function replaceToyotaModelData(nextCatalog) {
  const sanitizedCatalog = buildSanitizedVehicleCatalog(nextCatalog);

  Object.keys(TOYOTA_MODEL_DATA).forEach((modelName) => {
    delete TOYOTA_MODEL_DATA[modelName];
  });

  Object.entries(sanitizedCatalog).forEach(([modelName, entries]) => {
    TOYOTA_MODEL_DATA[modelName] = entries.map((entry) => ({
      name: entry.name,
      price: entry.price,
      colors: normalizeColorList(entry.colors ?? [])
    }));
  });
}

function loadVehicleCatalogFromLocalStorage() {
  try {
    const storedValue = window.localStorage.getItem(VEHICLE_CATALOG_STORAGE_KEY);
    if (!storedValue) {
      return false;
    }

    const parsedValue = JSON.parse(storedValue);
    replaceToyotaModelData(parsedValue);
    return true;
  } catch (error) {
    console.error("Failed to load vehicle catalog from localStorage:", error);
    return false;
  }
}

function saveVehicleCatalogToLocalStorage() {
  try {
    window.localStorage.setItem(
      VEHICLE_CATALOG_STORAGE_KEY,
      JSON.stringify(cloneModelCatalog(TOYOTA_MODEL_DATA))
    );
  } catch (error) {
    console.error("Failed to save vehicle catalog to localStorage:", error);
  }
}

async function saveVehicleCatalogState() {
  saveVehicleCatalogToLocalStorage();
  window.dispatchEvent(new CustomEvent("vehicle-catalog-updated"));

  const firebaseGiftStore = window.firebaseGiftStore;
  if (firebaseGiftStore?.saveVehicleCatalog) {
    await firebaseGiftStore.saveVehicleCatalog({
      models: cloneModelCatalog(TOYOTA_MODEL_DATA)
    });
  }
}

async function loadVehicleCatalogFromFirebase() {
  const firebaseGiftStore = window.firebaseGiftStore;
  if (!firebaseGiftStore?.loadVehicleCatalog) {
    return;
  }

  try {
    const remoteCatalog = await firebaseGiftStore.loadVehicleCatalog();
    if (!remoteCatalog?.models) {
      return;
    }

    replaceToyotaModelData(remoteCatalog.models);
    saveVehicleCatalogToLocalStorage();
    refreshVehicleCatalogUI({ showSelectionMessage: false });
  } catch (error) {
    console.error("Failed to load vehicle catalog from Firebase:", error);
  }
}

async function persistVehicleCatalogAndRefresh(successMessage) {
  refreshVehicleCatalogUI({ showSelectionMessage: false });

  try {
    await saveVehicleCatalogState();
    refreshVehicleCatalogUI({ showSelectionMessage: false });
    if (typeof successMessage === "string" && successMessage.trim()) {
      setMessage(successMessage);
    }
    return true;
  } catch (error) {
    console.error("Failed to persist vehicle catalog:", error);
    setMessage("บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    loadVehicleCatalogFromLocalStorage();
    refreshVehicleCatalogUI({ showSelectionMessage: false });
    return false;
  }
}

function renderVehicleCatalogManager() {
  if (
    !(modelAdminList instanceof HTMLElement) ||
    !(modelAdminEmpty instanceof HTMLElement) ||
    !(modelAdminDetail instanceof HTMLElement) ||
    !(editModelNameInput instanceof HTMLInputElement) ||
    !(submodelAdminList instanceof HTMLElement)
  ) {
    return;
  }

  const modelNames = Object.keys(TOYOTA_MODEL_DATA).sort((left, right) => left.localeCompare(right, "th"));

  if (!selectedCatalogModel || !TOYOTA_MODEL_DATA[selectedCatalogModel]) {
    selectedCatalogModel = modelNames[0] ?? "";
  }

  modelAdminList.innerHTML = modelNames.length === 0
    ? '<div class="empty-state">ยังไม่มีข้อมูลรุ่นรถ</div>'
    : modelNames.map((modelName) => {
      const isActive = modelName === selectedCatalogModel;
      const entryCount = TOYOTA_MODEL_DATA[modelName]?.length ?? 0;

      return `
        <button
          type="button"
          class="model-admin-item${isActive ? " is-active" : ""}"
          data-select-model="${escapeHtml(modelName)}"
        >
          <span class="model-admin-item-title">${escapeHtml(modelName)}</span>
          <strong class="model-admin-item-count">${formatNumber(entryCount)} รุ่นย่อย</strong>
        </button>
      `;
    }).join("");

  const selectedEntries = TOYOTA_MODEL_DATA[selectedCatalogModel] ?? [];
  const hasSelectedModel = Boolean(selectedCatalogModel) && selectedEntries.length > 0;

  setElementVisibility(modelAdminEmpty, !hasSelectedModel);
  setElementVisibility(modelAdminDetail, hasSelectedModel);

  if (!hasSelectedModel) {
    editModelNameInput.value = "";
    if (selectedModelTitle instanceof HTMLElement) {
      selectedModelTitle.textContent = "-";
    }
    if (selectedModelMeta instanceof HTMLElement) {
      selectedModelMeta.textContent = "มี 0 รุ่นย่อย";
    }
    submodelAdminList.innerHTML = "";
    return;
  }

  editModelNameInput.value = selectedCatalogModel;
  if (selectedModelTitle instanceof HTMLElement) {
    selectedModelTitle.textContent = selectedCatalogModel;
  }
  if (selectedModelMeta instanceof HTMLElement) {
    selectedModelMeta.textContent = `มี ${formatNumber(selectedEntries.length)} รุ่นย่อย`;
  }
  submodelAdminList.innerHTML = selectedEntries.map((entry) => `
    <form
      class="submodel-admin-row"
      data-submodel-form="${escapeHtml(entry.name)}"
      autocomplete="off"
    >
      <label>
        <span>รุ่นย่อย</span>
        <input
          type="text"
          name="submodel-name"
          value="${escapeHtml(entry.name)}"
          data-original-submodel="${escapeHtml(entry.name)}"
        >
      </label>
      <label>
        <span>ราคา</span>
        <input
          type="text"
          inputmode="decimal"
          name="submodel-price"
          value="${escapeHtml(formatSummaryNumber(entry.price))}"
        >
      </label>
      <div class="submodel-admin-actions">
        <button type="submit">บันทึก</button>
        <button type="button" class="secondary-button" data-delete-submodel="${escapeHtml(entry.name)}">ลบ</button>
      </div>
    </form>
  `).join("");
}

function refreshVehicleCatalogUI(options = {}) {
  const hasCalculatorCatalogFields = (
    carModelInput instanceof HTMLSelectElement &&
    carSubmodelInput instanceof HTMLSelectElement &&
    carColorSelect instanceof HTMLSelectElement &&
    carPriceInput instanceof HTMLInputElement
  );

  if (!hasCalculatorCatalogFields) {
    renderVehicleCatalogManager();
    return;
  }

  const showSelectionMessage = options.showSelectionMessage ?? true;
  const previousModel = carModelInput.value.trim();
  const previousSubmodel = carSubmodelInput.value.trim();
  const previousColor = carColorSelect.value;

  populateCarModels();

  if (!previousModel || !TOYOTA_MODEL_DATA[previousModel]) {
    carModelInput.value = "";
    carSubmodelInput.value = "";
    carSubmodelInput.innerHTML = '<option value="">เลือกรุ่นย่อย</option>';
    carColorSelect.innerHTML = '<option value="">เลือกสีรถ</option>';
    carColorSelect.value = "";
    if (previousModel) {
      carPriceInput.value = "";
    }
    if (previousModel && showSelectionMessage) {
      setMessage("ข้อมูลรุ่นรถถูกอัปเดตแล้ว กรุณาเลือกใหม่อีกครั้ง");
    }
  } else {
    populateCarSubmodels();
    const availableEntries = getSelectedModelEntries();
    const matchedEntry = availableEntries.find((entry) => entry.name === previousSubmodel);

    if (matchedEntry) {
      carSubmodelInput.value = matchedEntry.name;
      formatInputValue(carPriceInput, matchedEntry.price);
    } else if (availableEntries.length === 1) {
      carSubmodelInput.value = availableEntries[0].name;
      formatInputValue(carPriceInput, availableEntries[0].price);
    } else if (previousSubmodel) {
      carSubmodelInput.value = "";
      carPriceInput.value = "";
      if (showSelectionMessage) {
        setMessage("รุ่นย่อยที่เลือกถูกอัปเดตแล้ว กรุณาเลือกใหม่");
      }
    }

    populateCarColors();
    if (normalizeColorList(getSelectedSubmodelEntry()?.colors ?? []).includes(previousColor)) {
      carColorSelect.value = previousColor;
    }
  }

  renderVehicleCatalogManager();

  if (!(downPaymentPercentSelect instanceof HTMLSelectElement)) {
    return;
  }

  if (downPaymentPercentSelect.value !== "custom") {
    syncDownPaymentWithPercent();
  } else {
    calculateLoan();
  }
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

function buildCalculatorFormState() {
  return {
    customerName: customerNameInput?.value ?? "",
    customerPhone: customerPhoneInput?.value ?? "",
    customerChannel: customerChannelInput?.value ?? "",
    deliveryDate: deliveryDateInput?.value ?? "",
    financeProvider: financeProviderInput?.value ?? "",
    calculationType: calculationTypeSelect?.value ?? "balloon",
    carModel: carModelInput?.value ?? "",
    carSubmodel: carSubmodelInput?.value ?? "",
    carColor: carColorSelect?.value ?? "",
    carPrice: carPriceInput?.value ?? "",
    specialColor: specialColorInput?.value ?? "",
    accessoryValue: accessoryInput?.value ?? "",
    accessoryMode: accessoryModeToggleButton?.dataset.mode ?? "accessory",
    downPaymentPercent: downPaymentPercentSelect?.value ?? "15",
    downPayment: downPaymentInput?.value ?? "",
    supportDiscount: supportDiscountInput?.value ?? "",
    interestRate: interestRateInput?.value ?? "",
    loanTerm: loanTermSelect?.value ?? "84",
    rvPercentage: rvPercentageInput?.value ?? "",
    registrationFee: registrationFeeInput?.value ?? "",
    financeFee: financeFeeInput?.value ?? "",
    bookingDeposit: bookingDepositInput?.value ?? "",
    extraTransfer: extraTransferInput?.value ?? "",
    margin: marginInput?.value ?? "0",
    selectedGifts: selectedGifts.map((gift) => ({
      label: gift.label,
      value: gift.value
    }))
  };
}

function saveCalculatorFormState() {
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  try {
    window.localStorage.setItem(
      CALCULATOR_FORM_STORAGE_KEY,
      JSON.stringify(buildCalculatorFormState())
    );
  } catch (error) {
    console.error("Failed to save calculator form state:", error);
  }
}

function loadCalculatorFormState() {
  if (!(form instanceof HTMLFormElement)) {
    return false;
  }

  try {
    const storedValue = window.localStorage.getItem(CALCULATOR_FORM_STORAGE_KEY);
    if (!storedValue) {
      return false;
    }

    const state = JSON.parse(storedValue);
    if (!state || typeof state !== "object") {
      return false;
    }

    customerNameInput.value = String(state.customerName ?? "");
    customerPhoneInput.value = String(state.customerPhone ?? "");
    customerChannelInput.value = String(state.customerChannel ?? "");
    deliveryDateInput.value = String(state.deliveryDate ?? "");
    financeProviderInput.value = String(state.financeProvider ?? "");
    calculationTypeSelect.value = String(state.calculationType ?? "balloon");
    carModelInput.value = String(state.carModel ?? "");
    carSubmodelInput.value = String(state.carSubmodel ?? "");
    const savedCarColor = String(state.carColor ?? "");
    carPriceInput.value = String(state.carPrice ?? "");
    specialColorInput.value = String(state.specialColor ?? "");
    accessoryInput.value = String(state.accessoryValue ?? "");
    accessoryModeToggleButton.dataset.mode = String(state.accessoryMode ?? "accessory");
    downPaymentPercentSelect.value = String(state.downPaymentPercent ?? "15");
    downPaymentInput.value = String(state.downPayment ?? "");
    supportDiscountInput.value = String(state.supportDiscount ?? "");
    interestRateInput.value = String(state.interestRate ?? "");
    loanTermSelect.value = String(state.loanTerm ?? "84");
    rvPercentageInput.value = String(state.rvPercentage ?? "");
    registrationFeeInput.value = String(state.registrationFee ?? "");
    financeFeeInput.value = String(state.financeFee ?? "");
    bookingDepositInput.value = String(state.bookingDeposit ?? "");
    extraTransferInput.value = String(state.extraTransfer ?? "");
    marginInput.value = String(state.margin ?? "0");

    selectedGifts = Array.isArray(state.selectedGifts)
      ? state.selectedGifts
        .filter((gift) => gift && typeof gift.label === "string")
        .map((gift) => ({
          label: gift.label,
          value: String(gift.value ?? "")
        }))
      : [];

    populateCarSubmodels();
    populateCarColors();
    if (carColorSelect instanceof HTMLSelectElement) {
      const availableColors = normalizeColorList(getSelectedSubmodelEntry()?.colors ?? []);
      carColorSelect.value = availableColors.includes(savedCarColor) ? savedCarColor : carColorSelect.value;
    }
    renderSelectedGifts();
    return true;
  } catch (error) {
    console.error("Failed to load calculator form state:", error);
    return false;
  }
}

function clearCalculatorFormState() {
  try {
    window.localStorage.removeItem(CALCULATOR_FORM_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear calculator form state:", error);
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
    saveCalculatorFormState();
  } catch (error) {
    console.error("Failed to load gifts from Firebase:", error);
  }
}

function addVehicleModel() {
  const modelName = newModelNameInput.value.trim();
  if (!modelName) {
    setMessage("กรุณากรอกชื่อรุ่นรถก่อนเพิ่มรายการ");
    return;
  }

  if (TOYOTA_MODEL_DATA[modelName]) {
    setMessage("มีชื่อรุ่นรถนี้อยู่แล้ว");
    return;
  }

  openAdminConfirmationModal(
    `ยืนยันการเพิ่มรุ่นรถใหม่\n\nรุ่นรถ: ${modelName}\nระบบจะสร้างรุ่นย่อยเริ่มต้นชื่อ "รุ่นย่อยใหม่" ราคา 0 บาท`,
    async () => {
      TOYOTA_MODEL_DATA[modelName] = [{
        name: "รุ่นย่อยใหม่",
        price: 0,
        colors: []
      }];
      selectedCatalogModel = modelName;
      newModelNameInput.value = "";
      await persistVehicleCatalogAndRefresh("เพิ่มรุ่นรถใหม่แล้ว");
    }
  );
}

function renameVehicleModel() {
  if (!selectedCatalogModel || !TOYOTA_MODEL_DATA[selectedCatalogModel]) {
    return;
  }

  const nextModelName = editModelNameInput.value.trim();
  if (!nextModelName) {
    setMessage("กรุณากรอกชื่อรุ่นรถ");
    return;
  }

  if (nextModelName !== selectedCatalogModel && TOYOTA_MODEL_DATA[nextModelName]) {
    setMessage("มีชื่อรุ่นรถนี้อยู่แล้ว");
    return;
  }

  const currentModelName = selectedCatalogModel;

  openAdminConfirmationModal(
    `ยืนยันการบันทึกชื่อรุ่นรถ\n\nจาก: ${currentModelName}\nเป็น: ${nextModelName}`,
    async () => {
      const currentEntries = TOYOTA_MODEL_DATA[currentModelName].map((entry) => ({
        ...entry,
        colors: normalizeColorList(entry.colors ?? [])
      }));

      delete TOYOTA_MODEL_DATA[currentModelName];
      TOYOTA_MODEL_DATA[nextModelName] = currentEntries;
      selectedCatalogModel = nextModelName;

      if (hasCalculatorVehicleFields() && carModelInput.value.trim() === currentModelName) {
        carModelInput.value = nextModelName;
      }

      await persistVehicleCatalogAndRefresh("บันทึกชื่อรุ่นรถแล้ว");
    }
  );
}

function deleteVehicleModel() {
  if (!selectedCatalogModel || !TOYOTA_MODEL_DATA[selectedCatalogModel]) {
    return;
  }

  if (Object.keys(TOYOTA_MODEL_DATA).length <= 1) {
    setMessage("ต้องมีอย่างน้อย 1 รุ่นรถในระบบ");
    return;
  }

  const deletedModelName = selectedCatalogModel;
  const deletedCount = TOYOTA_MODEL_DATA[deletedModelName]?.length ?? 0;

  openAdminConfirmationModal(
    `ยืนยันการลบรุ่นรถ\n\nรุ่นรถ: ${deletedModelName}\nรายการรุ่นย่อยที่จะถูกลบ: ${formatNumber(deletedCount)} รายการ`,
    async () => {
      delete TOYOTA_MODEL_DATA[deletedModelName];

      if (hasCalculatorVehicleFields() && carModelInput.value.trim() === deletedModelName) {
        carModelInput.value = "";
        carSubmodelInput.value = "";
        if (carColorSelect instanceof HTMLSelectElement) {
          carColorSelect.innerHTML = '<option value="">เลือกสีรถ</option>';
          carColorSelect.value = "";
        }
        carPriceInput.value = "";
      }

      selectedCatalogModel = "";
      await persistVehicleCatalogAndRefresh("ลบรุ่นรถแล้ว");
    }
  );
}

function addVehicleSubmodel() {
  if (!selectedCatalogModel || !TOYOTA_MODEL_DATA[selectedCatalogModel]) {
    setMessage("เลือกรุ่นรถก่อนเพิ่มรุ่นย่อย");
    return;
  }

  const submodelName = newSubmodelNameInput.value.trim();
  const submodelPrice = parseNumber(newSubmodelPriceInput.value);

  if (!submodelName) {
    setMessage("กรุณากรอกชื่อรุ่นย่อย");
    return;
  }

  if (TOYOTA_MODEL_DATA[selectedCatalogModel].some((entry) => entry.name === submodelName)) {
    setMessage("มีชื่อรุ่นย่อยนี้อยู่แล้วในรุ่นรถที่เลือก");
    return;
  }

  openAdminConfirmationModal(
    `ยืนยันการเพิ่มรุ่นย่อย\n\nรุ่นรถ: ${selectedCatalogModel}\nรุ่นย่อย: ${submodelName}\nราคา: ${formatNumber(submodelPrice)} บาท`,
    async () => {
      TOYOTA_MODEL_DATA[selectedCatalogModel].push({
        name: submodelName,
        price: Math.max(submodelPrice, 0),
        colors: []
      });

      newSubmodelNameInput.value = "";
      newSubmodelPriceInput.value = "";
      await persistVehicleCatalogAndRefresh("เพิ่มรุ่นย่อยแล้ว");
    }
  );
}

function updateVehicleSubmodel(originalSubmodelName, nextSubmodelName, nextPrice) {
  const entries = TOYOTA_MODEL_DATA[selectedCatalogModel] ?? [];
  const targetEntry = entries.find((entry) => entry.name === originalSubmodelName);

  if (!targetEntry) {
    return;
  }

  if (!nextSubmodelName) {
    setMessage("กรุณากรอกชื่อรุ่นย่อย");
    return;
  }

  if (nextSubmodelName !== originalSubmodelName && entries.some((entry) => entry.name === nextSubmodelName)) {
    setMessage("มีชื่อรุ่นย่อยนี้อยู่แล้วในรุ่นรถที่เลือก");
    return;
  }

  openAdminConfirmationModal(
    `ยืนยันการบันทึกรุ่นย่อย\n\nรุ่นรถ: ${selectedCatalogModel}\nรุ่นย่อยเดิม: ${originalSubmodelName}\nรุ่นย่อยใหม่: ${nextSubmodelName}\nราคาใหม่: ${formatNumber(nextPrice)} บาท`,
    async () => {
      targetEntry.name = nextSubmodelName;
      targetEntry.price = Math.max(nextPrice, 0);
      targetEntry.colors = normalizeColorList(targetEntry.colors ?? []);

      if (
        hasCalculatorVehicleFields() &&
        carModelInput.value.trim() === selectedCatalogModel &&
        carSubmodelInput.value.trim() === originalSubmodelName
      ) {
        carSubmodelInput.value = nextSubmodelName;
      }

      await persistVehicleCatalogAndRefresh("บันทึกรุ่นย่อยและราคาแล้ว");
    }
  );
}

function deleteVehicleSubmodel(submodelName) {
  const entries = TOYOTA_MODEL_DATA[selectedCatalogModel] ?? [];
  const nextEntries = entries.filter((entry) => entry.name !== submodelName);

  if (nextEntries.length === entries.length) {
    return;
  }

  if (nextEntries.length === 0) {
    setMessage("ต้องมีอย่างน้อย 1 รุ่นย่อยต่อ 1 รุ่นรถ");
    return;
  }

  openAdminConfirmationModal(
    `ยืนยันการลบรุ่นย่อย\n\nรุ่นรถ: ${selectedCatalogModel}\nรุ่นย่อย: ${submodelName}`,
    async () => {
      TOYOTA_MODEL_DATA[selectedCatalogModel] = nextEntries;

      if (
        hasCalculatorVehicleFields() &&
        carModelInput.value.trim() === selectedCatalogModel &&
        carSubmodelInput.value.trim() === submodelName
      ) {
        carSubmodelInput.value = "";
        if (carColorSelect instanceof HTMLSelectElement) {
          carColorSelect.innerHTML = '<option value="">เลือกสีรถ</option>';
          carColorSelect.value = "";
        }
        carPriceInput.value = "";
      }

      await persistVehicleCatalogAndRefresh("ลบรุ่นย่อยแล้ว");
    }
  );
}

function getPriceWithColor() {
  return parseNumber(carPriceInput.value) + parseNumber(specialColorInput.value);
}

function getNetCarPrice() {
  const adjustmentAmount = parseNumber(accessoryInput.value);
  return isDiscountModeSelected()
    ? getPriceWithColor() - adjustmentAmount
    : getPriceWithColor() + adjustmentAmount;
}

function getSelectedModelEntries() {
  return TOYOTA_MODEL_DATA[carModelInput.value.trim()] ?? [];
}

function getSelectedSubmodelEntry() {
  const selectedSubmodel = carSubmodelInput.value.trim();
  return getSelectedModelEntries().find((entry) => entry.name === selectedSubmodel) ?? null;
}

function populateCarModels() {
  if (!(carModelInput instanceof HTMLSelectElement)) {
    return;
  }

  const modelNames = Object.keys(TOYOTA_MODEL_DATA).sort((left, right) => left.localeCompare(right, "th"));
  const previousModel = carModelInput.value;

  carModelInput.innerHTML = [
    '<option value="">เลือกรุ่นรถ</option>',
    ...modelNames.map((model) => `<option value="${escapeHtml(model)}">${escapeHtml(model)}</option>`)
  ].join("");

  if (modelNames.includes(previousModel)) {
    carModelInput.value = previousModel;
  }
}

function populateCarSubmodels() {
  if (!(carSubmodelInput instanceof HTMLSelectElement)) {
    return;
  }

  const entries = getSelectedModelEntries();
  const previousSubmodel = carSubmodelInput.value;

  carSubmodelInput.innerHTML = [
    '<option value="">เลือกรุ่นย่อย</option>',
    ...entries.map((entry) => `<option value="${escapeHtml(entry.name)}">${escapeHtml(entry.name)}</option>`)
  ].join("");

  if (entries.some((entry) => entry.name === previousSubmodel)) {
    carSubmodelInput.value = previousSubmodel;
  }
}

function populateCarColors() {
  if (!(carColorSelect instanceof HTMLSelectElement)) {
    return;
  }

  const selectedEntry = getSelectedSubmodelEntry();
  const colors = normalizeColorList(selectedEntry?.colors ?? []);
  const previousColor = carColorSelect.value;

  carColorSelect.innerHTML = [
    '<option value="">เลือกสีรถ</option>',
    ...colors.map((color) => `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`)
  ].join("");

  if (colors.includes(previousColor)) {
    carColorSelect.value = previousColor;
    return;
  }

  carColorSelect.value = colors.length === 1 ? colors[0] : "";
}

function applySelectedSubmodelPrice(options = {}) {
  const selectedModel = carModelInput.value.trim();
  const selectedSubmodel = carSubmodelInput.value.trim();
  const entries = TOYOTA_MODEL_DATA[selectedModel] ?? [];
  const matchedEntry = entries.find((entry) => entry.name === selectedSubmodel);

  if (!matchedEntry) {
    populateCarColors();
    return false;
  }

  formatInputValue(carPriceInput, matchedEntry.price);
  populateCarColors();

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


function toggleCalculationType() {
  const isBalloon = isBalloonCalculationSelected();
  const loanTermMonths = Math.max(parseNumber(loanTermSelect.value), 0);
  const installmentEndMonth = Math.max(loanTermMonths - 1, 1);

  setBalloonVisibility(isBalloon);
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


function calculateStandardPayment(principal, annualRatePercent, loanTermMonths) {
  if (principal <= 0 || loanTermMonths <= 0) {
    return 0;
  }

  const loanTermYears = loanTermMonths / 12;
  return ((principal * loanTermYears * (annualRatePercent / 100)) + principal) / loanTermMonths;
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
  saveCalculatorFormState();
}

function removeGiftOption(label) {
  giftOptions = giftOptions.filter((option) => option !== label);
  selectedGifts = selectedGifts.filter((gift) => gift.label !== label);
  buildGiftOptionMarkup();
  renderSelectedGifts();
  calculateLoan();
  saveGiftState();
  saveCalculatorFormState();
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
  saveCalculatorFormState();
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
  saveCalculatorFormState();
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
  saveCalculatorFormState();
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




function syncDownPaymentHint() {
  const netCarPrice = getNetCarPrice();
  const percentValue = downPaymentPercentSelect.value;
  const adjustmentLabel = getAdjustmentLabel();

  if (percentValue === "custom") {
    if (netCarPrice > 0) {
      const currentPercent = (parseNumber(downPaymentInput.value) / netCarPrice) * 100;
      downPaymentPercentHint.textContent = `กำหนดเงินดาวน์เอง คิดเป็นประมาณ ${formatNumber(currentPercent)}% ของราคารถรวมสีพิเศษและ${adjustmentLabel}`;
    } else {
      downPaymentPercentHint.textContent = "กำหนดเงินดาวน์เอง";
    }
    return;
  }

  downPaymentPercentHint.textContent = `ระบบจะคำนวณยอดเงินดาวน์จาก ${percentValue}% ของราคารถรวมสีพิเศษและ${adjustmentLabel}`;
}

function handleManualDownPaymentChange() {
  const netCarPrice = getNetCarPrice();
  const downPayment = parseNumber(downPaymentInput.value);
  const adjustmentLabel = getAdjustmentLabel();

  downPaymentPercentSelect.value = "custom";

  if (netCarPrice > 0) {
    downPaymentPercentHint.textContent = `กำหนดเงินดาวน์เอง คิดเป็นประมาณ ${formatNumber((downPayment / netCarPrice) * 100)}% ของราคารถรวมสีพิเศษและ${adjustmentLabel}`;
  } else {
    downPaymentPercentHint.textContent = "กำหนดเงินดาวน์เอง";
  }

  calculateLoan();
}

function getCalculatorSummary() {
  const priceWithColor = getPriceWithColor();
  const carPrice = parseNumber(carPriceInput.value);
  const adjustmentAmount = parseNumber(accessoryInput.value);
  const isDiscountMode = isDiscountModeSelected();
  const accessoryAmount = isDiscountMode ? 0 : adjustmentAmount;
  const discountAmount = isDiscountMode ? adjustmentAmount : 0;
  const netCarPrice = getNetCarPrice();
  const downPayment = parseNumber(downPaymentInput.value);
  const supportDiscount = isDiscountMode ? 0 : parseNumber(supportDiscountInput.value);
  const annualRatePercent = parseNumber(interestRateInput.value);
  const loanTermMonths = parseNumber(loanTermSelect.value);
  const loanTermYears = loanTermMonths / 12;
  const isBalloon = isBalloonCalculationSelected();

  const loanAmount = Math.max(netCarPrice - downPayment, 0);
  const rvPercentage = parseNumber(rvPercentageInput.value);
  const balloonPayment = isBalloon ? carPrice * (rvPercentage / 100) : 0;

  let monthlyPayment = 0;
  if (isBalloon) {
    const monthlyInstallments = Math.max(loanTermMonths - 1, 1);
    monthlyPayment = ((loanAmount * (annualRatePercent / 100) * loanTermYears) + loanAmount - balloonPayment) / monthlyInstallments;
  } else {
    monthlyPayment = calculateStandardPayment(loanAmount, annualRatePercent, loanTermMonths);
  }

  const totalInterest = Math.max(loanAmount * loanTermYears * (annualRatePercent / 100), 0);
  const totalPayment = isBalloon
    ? (monthlyPayment * Math.max(loanTermMonths - 1, 0)) + balloonPayment
    : netCarPrice + totalInterest;

  const registrationFee = parseNumber(registrationFeeInput.value);
  const redPlateDeposit = parseNumber(redPlateDepositDisplay.textContent);
  const financeFee = parseNumber(financeFeeInput.value);
  const bookingDeposit = parseNumber(bookingDepositInput.value);
  const extraTransfer = parseNumber(extraTransferInput.value);
  const margin = parseNumber(marginInput.value);
  const giftTotal = getGiftTotal();

  const daySubtotal = isDiscountMode ? downPayment : downPayment - accessoryAmount - supportDiscount;
  const vatAmount = isDiscountMode ? 0 : (accessoryAmount + supportDiscount) * 0.03;
  const driveAwayTotal = daySubtotal + registrationFee + redPlateDeposit + financeFee + vatAmount;
  const remainingBalance = driveAwayTotal - bookingDeposit + extraTransfer;
  const remainingMargin = margin - giftTotal;

  return {
    priceWithColor,
    netCarPrice,
    accessoryAmount,
    adjustmentAmount,
    discountAmount,
    downPayment,
    supportDiscount,
    annualRatePercent,
    loanTermMonths,
    isBalloon,
    isDiscountMode,
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
    adjustmentAmount,
    downPayment,
    loanAmount,
    balloonPayment,
    monthlyPayment,
    totalPayment,
    totalInterest,
    isBalloon,
    isDiscountMode,
    vatAmount,
    driveAwayTotal,
    remainingBalance,
    remainingMargin,
    daySubtotal
  } = summary;
  const displayedMonthlyPayment = getDisplayedMonthlyPayment(monthlyPayment, isBalloon);

  setBalloonVisibility(isBalloon);
  updateAccessoryModeUI();
  monthlyPaymentDisplay.textContent = formatNumber(displayedMonthlyPayment);
  balloonPaymentDisplay.textContent = formatNumber(balloonPayment);
  loanAmountDisplay.textContent = formatNumber(loanAmount);
  formPriceWithColorDisplay.textContent = formatNumber(priceWithColor);
  formNetPriceDisplay.textContent = formatNumber(netCarPrice);
  totalInterestDisplay.textContent = formatNumber(totalInterest);
  totalPaymentDisplay.textContent = formatNumber(totalPayment);

  dayDownPaymentDisplay.textContent = formatNumber(downPayment);
  daySupportDisplay.textContent = formatNumber(isDiscountMode ? adjustmentAmount : accessoryAmount);
  daySubtotalDisplay.textContent = formatNumber(daySubtotal);
  vatDisplay.textContent = formatNumber(vatAmount);
  driveAwayTotalDisplay.textContent = formatNumber(driveAwayTotal);
  remainingBalanceDisplay.textContent = formatNumber(remainingBalance);
  remainingMarginDisplay.textContent = formatNumber(remainingMargin);
}

function buildTopSummaryText() {
  const summary = getCalculatorSummary();
  const customerName = customerNameInput.value.trim();
  const customerPhone = customerPhoneInput.value.trim();
  const customerChannel = customerChannelInput.value.trim();
  const deliveryDate = deliveryDateInput.value.trim();
  const financeProvider = financeProviderInput.value.trim();
  const modelText = [carModelInput.value.trim(), carSubmodelInput.value.trim()].filter(Boolean).join(" ");
  const headline = modelText || "รุ่นรถที่เลือก";
  const carColor = carColorSelect.value.trim();
  const carPrice = parseNumber(carPriceInput.value);
  const specialColor = parseNumber(specialColorInput.value);
  const hasSpecialColor = specialColorInput.value.trim() !== "";
  const hasAdjustment = accessoryInput.value.trim() !== "";
  const shouldShowNetPrice = hasSpecialColor || hasAdjustment;
  const adjustmentLine = summary.isDiscountMode
    ? `ส่วนลด ${formatSummaryNumber(summary.discountAmount)} บาท`
    : `บวกอุปกรณ์ ${formatSummaryNumber(summary.accessoryAmount)} บาท`;
  const campaignLabel = calculationTypeSelect.value === "standard"
    ? "แคมเปญดอกเบี้ยพิเศษ"
    : "แคมเปญสบายดี";
  const downPaymentPercent = downPaymentPercentSelect.value === "custom"
    ? (summary.netCarPrice > 0 ? (summary.downPayment / summary.netCarPrice) * 100 : 0)
    : parseNumber(downPaymentPercentSelect.value);
  const loanYears = summary.loanTermMonths / 12;
  const installmentLines = summary.isBalloon
    ? [
        `งวดที่ 1-${Math.max(summary.loanTermMonths - 1, 1)} (${formatPercent(summary.annualRatePercent)}%) = ${formatSummaryNumber(getDisplayedMonthlyPayment(summary.monthlyPayment, true))} บาท`,
        `งวดที่ ${summary.loanTermMonths} (RV${formatPercent(summary.rvPercentage)}%) = ${formatSummaryNumber(summary.balloonPayment)} บาท`
      ]
    : [
        `งวดที่ 1-${summary.loanTermMonths} (${formatPercent(summary.annualRatePercent)}%) = ${formatSummaryNumber(summary.monthlyPayment)} บาท`
      ];
  const customerLines = [
    customerName ? `👩🏻👦🏻 ข้อมูลลูกค้าคนพิเศษ: ${customerName}  💖✨` : "",
    customerPhone ? `📞 โทร: ${customerPhone}` : "",
    customerChannel ? `📍 ช่องทาง: ${customerChannel}` : "",
    deliveryDate ? `📆 รับรถ: ${deliveryDate}` : "",
    financeProvider ? `🏦 Finance: ${financeProvider}` : ""
  ].filter(Boolean);

  return [
    ...customerLines,
    ...(customerLines.length > 0 ? [""] : []),
    `🚗 ${headline} 💨`,
    ...(carColor ? [`🎨 สีรถ ${carColor}`] : []),
    `(🌼 ${campaignLabel} 🌼)`,
    `💵 ราคารถ ${formatSummaryNumber(carPrice)} บาท`,
    ...(hasSpecialColor ? [`บวกสีพิเศษ ${formatSummaryNumber(specialColor)} บาท`] : []),
    ...(hasSpecialColor ? [`= ${formatSummaryNumber(summary.priceWithColor)} บาท`] : []),
    ...(hasAdjustment ? [adjustmentLine] : []),
    ...(shouldShowNetPrice ? [`ราคาสุทธิ ${formatSummaryNumber(summary.netCarPrice)} บาท`] : []),
    `🌟ดาวน์ ${formatPercent(downPaymentPercent)}% = ${formatSummaryNumber(summary.downPayment)} บาท`,
    `ยอดจัด ${formatSummaryNumber(summary.loanAmount)} บาท`,
    `ผ่อน ${formatPercent(loanYears)} ปี`,
    ...installmentLines
  ].join("\n");
}

function buildSummaryText() {
  const summary = getCalculatorSummary();
  const customerName = customerNameInput.value.trim();
  const customerPhone = customerPhoneInput.value.trim();
  const customerChannel = customerChannelInput.value.trim();
  const deliveryDate = deliveryDateInput.value.trim();
  const financeProvider = financeProviderInput.value.trim();
  const campaignLabel = calculationTypeSelect.options[calculationTypeSelect.selectedIndex]?.text ?? "";
  const modelText = [carModelInput.value.trim(), carSubmodelInput.value.trim()].filter(Boolean).join(" ");
  const carColor = carColorSelect instanceof HTMLSelectElement ? carColorSelect.value.trim() : "";
  const headline = modelText || "รุ่นรถที่เลือก";
  const carPrice = parseNumber(carPriceInput.value);
  const specialColor = parseNumber(specialColorInput.value);
  const downPaymentPercent = downPaymentPercentSelect.value === "custom"
    ? (summary.netCarPrice > 0 ? (summary.downPayment / summary.netCarPrice) * 100 : 0)
    : parseNumber(downPaymentPercentSelect.value);
  const loanYears = summary.loanTermMonths / 12;
  const giftsText = selectedGifts.length > 0
    ? selectedGifts.map((gift) => gift.label).join("\n")
    : "- ยังไม่ได้เลือกของแถม";
  const hasSpecialColor = specialColorInput.value.trim() !== "";
  const hasAdjustment = accessoryInput.value.trim() !== "";
  const shouldShowNetPrice = hasSpecialColor || hasAdjustment;
  const hasSupportDiscount = !summary.isDiscountMode && supportDiscountInput.value.trim() !== "";
  const hasRegistrationFee = registrationFeeInput.value.trim() !== "";
  const hasFinanceFee = financeFeeInput.value.trim() !== "";
  const hasBookingDeposit = bookingDepositInput.value.trim() !== "";
  const hasExtraTransfer = extraTransferInput.value.trim() !== "";
  const adjustmentLine = summary.isDiscountMode
    ? `💰 ส่วนลด ${formatSummaryNumber(summary.discountAmount)} บาท`
    : `บวกอุปกรณ์ ${formatSummaryNumber(summary.accessoryAmount)} บาท`;
  const vatBase = summary.accessoryAmount + summary.supportDiscount;

  const installmentLines = summary.isBalloon
    ? [
        `งวดที่ 1-${Math.max(summary.loanTermMonths - 1, 1)} (${formatPercent(summary.annualRatePercent)}%) = ${formatSummaryNumber(getDisplayedMonthlyPayment(summary.monthlyPayment, true))} บาท`,
        `งวดที่ ${summary.loanTermMonths} (RV${formatPercent(summary.rvPercentage)}%) = ${formatSummaryNumber(summary.balloonPayment)} บาท`
      ]
    : [
        `งวดที่ 1-${summary.loanTermMonths} (${formatPercent(summary.annualRatePercent)}%) = ${formatSummaryNumber(summary.monthlyPayment)} บาท`
      ];

  const customerLines = [
    customerName ? `👩🏻👦🏻 ข้อมูลลูกค้าคนพิเศษ: ${customerName}  💖✨` : "",
    customerPhone ? `📞 โทร: ${customerPhone}` : "",
    customerChannel ? `📍 ช่องทาง: ${customerChannel}` : "",
    deliveryDate ? `📆 รับรถ: ${deliveryDate}` : "",
    financeProvider ? `🏦 Finance: ${financeProvider}` : ""
  ].filter(Boolean);

  return [
    ...customerLines,
    ...(customerLines.length > 0 ? [""] : []),
    `🚗 ${headline} 💨`,
    ...(carColor ? [`🎨 สีรถ ${carColor}`] : []),
    `(🌼 ${campaignLabel} 🌼)`,
    `💵 ราคารถ ${formatSummaryNumber(carPrice)} บาท`,
    ...(hasSpecialColor ? [`บวกสีพิเศษ ${formatSummaryNumber(specialColor)} บาท`] : []),
    ...(hasSpecialColor ? [`= ${formatSummaryNumber(summary.priceWithColor)} บาท`] : []),
    ...(hasAdjustment ? [adjustmentLine] : []),
    ...(shouldShowNetPrice ? [`ราคาสุทธิ ${formatSummaryNumber(summary.netCarPrice)} บาท`] : []),
    `🌟ดาวน์ ${formatPercent(downPaymentPercent)}% = ${formatSummaryNumber(summary.downPayment)} บาท`,
    `ยอดจัด ${formatSummaryNumber(summary.loanAmount)} บาท`,
    `ผ่อน ${formatPercent(loanYears)} ปี`,
    ...installmentLines,
    "",
    "🌼✨ ของแถม ✨🌼",
    giftsText,
    "",
    "✨🎀 ค่าใช้จ่ายวันรับรถ 🎀✨",
    `1. 🌟เงินดาวน์ ${formatSummaryNumber(summary.downPayment)} บาท`,
    ...(!summary.isDiscountMode && hasAdjustment ? [`บวกอุปกรณ์ ${formatSummaryNumber(summary.accessoryAmount)} บาท`] : []),
    ...(!summary.isDiscountMode && hasSupportDiscount ? [`ส่วนลดช่วยดาวน์ ${formatSummaryNumber(summary.supportDiscount)} บาท`] : []),
    ...(!summary.isDiscountMode ? [`= ${formatSummaryNumber(summary.daySubtotal)} บาท`] : []),
    ...(hasRegistrationFee ? [`2. 📘ค่าจดทะเบียน = ${formatSummaryNumber(summary.registrationFee)} บาท`] : []),
    `3. 📕ค่ามัดจำป้ายแดง = ${formatSummaryNumber(summary.redPlateDeposit)} บาท (ได้คืน)`,
    ...(hasFinanceFee ? [`4. ค่าธรรมเนียมไฟแนนซ์ = ${formatSummaryNumber(summary.financeFee)} บาท`] : []),
    ...(!summary.isDiscountMode && vatBase > 0 ? [`5. VAT 3% (${formatSummaryNumber(vatBase)}) = ${formatSummaryNumber(summary.vatAmount)} บาท`] : []),
    `รวมค่าใช้จ่ายออกรถ = ${formatSummaryNumber(summary.driveAwayTotal)} บาท`,
    ...(hasBookingDeposit ? [`📝 หักเงินจอง = ${formatSummaryNumber(summary.bookingDeposit)} บาท`] : []),
    ...(hasExtraTransfer ? [`ผ่านไฟแนนซ์ลูกค้าโอนเพิ่ม ${formatSummaryNumber(summary.extraTransfer)} บาท`] : []),
    `✨💖 เหลือยอดชำระ = ${formatSummaryNumber(summary.remainingBalance)} บาท 💖✨`
  ].join("\n");
}

async function copyTextToClipboard(text, successMessage) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }

    setMessage(successMessage);
  } catch (error) {
    setMessage("ไม่สามารถคัดลอกข้อความสรุปได้");
  }
}

async function copySummaryText() {
  await copyTextToClipboard(buildSummaryText(), "คัดลอกข้อความสรุปแล้ว");
}

async function copyTopSummaryText() {
  await copyTextToClipboard(buildTopSummaryText(), "คัดลอกข้อความสรุปด้านบนแล้ว");
}

function resetFormState() {
  form.reset();

  selectedGifts = [];
  giftCustomInput.value = "";
  selectedGiftsContainer.className = "gift-list empty-state";
  selectedGiftsContainer.textContent = "ยังไม่ได้เลือกของแถม";

  carModelInput.value = "";
  carSubmodelInput.value = "";
  if (carSubmodelInput instanceof HTMLSelectElement) {
    carSubmodelInput.innerHTML = '<option value="">เลือกรุ่นย่อย</option>';
  }
  if (carColorSelect instanceof HTMLSelectElement) {
    carColorSelect.innerHTML = '<option value="">เลือกสีรถ</option>';
    carColorSelect.value = "";
  }
  customerNameInput.value = "";
  customerPhoneInput.value = "";
  customerChannelInput.value = "";
  deliveryDateInput.value = "";
  financeProviderInput.value = "";

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
  accessoryModeToggleButton.dataset.mode = "accessory";

  calculationTypeSelect.value = "balloon";
  downPaymentPercentSelect.value = "15";
  loanTermSelect.value = "84";

  giftOptionsContainer.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  closeGiftModal();
  toggleCalculationType();
  updateAccessoryModeUI();
  clearResults();
  calculateLoan();
  syncDownPaymentHint();
  setMessage("");
  clearCalculatorFormState();
}

async function handleModelChange() {
  populateCarSubmodels();
  populateCarColors();

  const entries = getSelectedModelEntries();
  const hasMatchingSubmodel = entries.some((entry) => entry.name === carSubmodelInput.value.trim());

  if (!hasMatchingSubmodel) {
    carSubmodelInput.value = "";
    populateCarColors();
  }

  if (entries.length === 1) {
    carSubmodelInput.value = entries[0].name;
    applySelectedSubmodelPrice();
    saveCalculatorFormState();
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

  saveCalculatorFormState();
}

async function handleSubmodelChange() {
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

  saveCalculatorFormState();
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
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  loadCalculatorFormState();
  accessoryModeToggleButton.dataset.mode = accessoryModeToggleButton.dataset.mode || "accessory";
  refreshVehicleCatalogUI({ showSelectionMessage: false });
  renderSelectedGifts();
  toggleCalculationType();
  updateAccessoryModeUI();
  syncDownPaymentHint();
  calculateLoan();

  loadGiftStateFromFirebase();

  window.addEventListener("firebase-gift-store-ready", () => {
    loadGiftStateFromFirebase();
  }, { once: true });
}

function initializeCustomOptionLists() {
  loadOptionListsFromLocalStorage();
  refreshOptionListsUI();
  loadOptionListsFromFirebase();

  window.addEventListener("firebase-gift-store-ready", () => {
    loadOptionListsFromFirebase();
  }, { once: true });

  window.addEventListener("storage", (event) => {
    if (event.key !== OPTION_LISTS_STORAGE_KEY) {
      return;
    }

    loadOptionListsFromLocalStorage();
    refreshOptionListsUI();
  });

  window.addEventListener("option-lists-updated", () => {
    loadOptionListsFromLocalStorage();
    refreshOptionListsUI();
  });
}

function initializeVehicleCatalog() {
  loadVehicleCatalogFromLocalStorage();
  refreshVehicleCatalogUI({ showSelectionMessage: false });
  loadVehicleCatalogFromFirebase();

  window.addEventListener("firebase-gift-store-ready", () => {
    loadVehicleCatalogFromFirebase();
  }, { once: true });

  window.addEventListener("storage", (event) => {
    if (event.key !== VEHICLE_CATALOG_STORAGE_KEY) {
      return;
    }

    loadVehicleCatalogFromLocalStorage();
    refreshVehicleCatalogUI({ showSelectionMessage: false });
  });

  window.addEventListener("vehicle-catalog-updated", () => {
    loadVehicleCatalogFromLocalStorage();
    refreshVehicleCatalogUI({ showSelectionMessage: false });
  });
}

modelCreateForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  addVehicleModel();
});

modelEditForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  renameVehicleModel();
});

deleteModelButton?.addEventListener("click", () => {
  deleteVehicleModel();
});

submodelCreateForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  addVehicleSubmodel();
});

channelCreateForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const wasAdded = await addOptionListItem("customerChannels", newChannelNameInput?.value ?? "");
  if (wasAdded && newChannelNameInput instanceof HTMLInputElement) {
    newChannelNameInput.value = "";
  }
});

financeCreateForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const wasAdded = await addOptionListItem("financeProviders", newFinanceNameInput?.value ?? "");
  if (wasAdded && newFinanceNameInput instanceof HTMLInputElement) {
    newFinanceNameInput.value = "";
  }
});

modelAdminList?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("[data-select-model]");
  if (!(button instanceof HTMLElement)) {
    return;
  }

  selectedCatalogModel = button.dataset.selectModel ?? "";
  renderVehicleCatalogManager();
});

submodelAdminList?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;
  if (!(formElement instanceof HTMLFormElement)) {
    return;
  }

  const nameInput = formElement.querySelector('input[name="submodel-name"]');
  const priceInput = formElement.querySelector('input[name="submodel-price"]');
  if (!(nameInput instanceof HTMLInputElement) || !(priceInput instanceof HTMLInputElement)) {
    return;
  }

  updateVehicleSubmodel(
    nameInput.dataset.originalSubmodel ?? "",
    nameInput.value.trim(),
    parseNumber(priceInput.value)
  );
});

submodelAdminList?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("[data-delete-submodel]");
  if (!(button instanceof HTMLElement)) {
    return;
  }

  deleteVehicleSubmodel(button.dataset.deleteSubmodel ?? "");
});

channelAdminList?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formElement = event.target;
  if (!(formElement instanceof HTMLFormElement)) {
    return;
  }

  const nameInput = formElement.querySelector('input[name="option-name"]');
  if (!(nameInput instanceof HTMLInputElement)) {
    return;
  }

  await updateOptionListItem(
    "customerChannels",
    nameInput.dataset.originalOption ?? "",
    nameInput.value.trim()
  );
});

financeAdminList?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formElement = event.target;
  if (!(formElement instanceof HTMLFormElement)) {
    return;
  }

  const nameInput = formElement.querySelector('input[name="option-name"]');
  if (!(nameInput instanceof HTMLInputElement)) {
    return;
  }

  await updateOptionListItem(
    "financeProviders",
    nameInput.dataset.originalOption ?? "",
    nameInput.value.trim()
  );
});

channelAdminList?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("[data-delete-option]");
  if (!(button instanceof HTMLElement)) {
    return;
  }

  deleteOptionListItem(
    button.dataset.deleteOption ?? "",
    button.dataset.optionValue ?? ""
  );
});

financeAdminList?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("[data-delete-option]");
  if (!(button instanceof HTMLElement)) {
    return;
  }

  deleteOptionListItem(
    button.dataset.deleteOption ?? "",
    button.dataset.optionValue ?? ""
  );
});

newSubmodelPriceInput?.addEventListener("blur", handleFormattedNumericInput);
submodelAdminList?.addEventListener("blur", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) || target.name !== "submodel-price") {
    return;
  }

  handleFormattedNumericInput(event);
}, true);

adminConfirmCloseButton?.addEventListener("click", closeAdminConfirmationModal);
adminConfirmCancelButton?.addEventListener("click", closeAdminConfirmationModal);
adminConfirmSubmitButton?.addEventListener("click", submitAdminConfirmation);
adminConfirmModal?.addEventListener("click", (event) => {
  if (event.target === adminConfirmModal) {
    closeAdminConfirmationModal();
  }
});
syncToyotaDataButton?.addEventListener("click", handleToyotaThailandSync);

adminTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveAdminTab(button.dataset.adminTab ?? "vehicle");
  });
});

if (form instanceof HTMLFormElement) {
  calculationTypeSelect.addEventListener("change", () => {
    if (isBalloonCalculationSelected()) {
      accessoryModeToggleButton.dataset.mode = "accessory";
    }

    toggleCalculationType();
    updateAccessoryModeUI();
    syncDownPaymentHint();
    calculateLoan();
  });

  accessoryModeToggleButton.addEventListener("click", () => {
    accessoryModeToggleButton.dataset.mode = isDiscountModeSelected() ? "accessory" : "discount";

    if (downPaymentPercentSelect.value !== "custom") {
      syncDownPaymentWithPercent();
      saveCalculatorFormState();
      return;
    }

    syncDownPaymentHint();
    calculateLoan();
    saveCalculatorFormState();
  });

  carModelInput.addEventListener("change", handleModelChange);
  carSubmodelInput.addEventListener("change", handleSubmodelChange);
  carColorSelect?.addEventListener("change", saveCalculatorFormState);

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
      saveCalculatorFormState();
    });

    input.addEventListener("blur", (event) => {
      handleFormattedNumericInput(event);
      saveCalculatorFormState();
    });
  });

  interestRateInput.addEventListener("input", () => {
    calculateLoan();
    saveCalculatorFormState();
  });

  interestRateInput.addEventListener("blur", () => {
    formatInterestRateInput(interestRateInput, interestRateInput.value);
    calculateLoan();
    saveCalculatorFormState();
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
    saveCalculatorFormState();
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
    saveCalculatorFormState();
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

  loanTermSelect.addEventListener("change", () => {
    calculateLoan();
    saveCalculatorFormState();
  });
  loanTermSelect.addEventListener("change", () => {
    toggleCalculationType();
    saveCalculatorFormState();
  });
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

  copyTopSummaryButton.addEventListener("click", () => {
    copyTopSummaryText();
  });

  [
    customerNameInput,
    customerPhoneInput,
    customerChannelInput,
    deliveryDateInput,
    financeProviderInput,
    calculationTypeSelect,
    carModelInput,
    carSubmodelInput,
    carColorSelect,
    downPaymentPercentSelect
  ].forEach((input) => {
    input?.addEventListener("input", saveCalculatorFormState);
    input?.addEventListener("change", saveCalculatorFormState);
  });

  window.addEventListener("beforeunload", saveCalculatorFormState);
}

initializeVehicleCatalog();
initializeCustomOptionLists();
initializeCalculator();
setActiveAdminTab("vehicle");
