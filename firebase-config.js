export const firebaseConfig = {
  apiKey: "AIzaSyDSUvQKMNWe-Ps9x5JzkMrfdMHksrzUV2k",
  authDomain: "car-in-cal-project.firebaseapp.com",
  projectId: "car-in-cal-project",
  storageBucket: "car-in-cal-project.firebasestorage.app",
  messagingSenderId: "1015565172705",
  appId: "1:1015565172705:web:9c4bf4643cc4f118815ca0"
};

export const firebaseGiftDocument = {
  collection: "appState",
  document: "gifts"
};

export const firebaseVehicleCatalogDocument = {
  collection: "appState",
  document: "vehicleCatalog"
};

export function hasFirebaseConfig() {
  return Object.values(firebaseConfig).every((value) => typeof value === "string" && value.trim() !== "");
}
