import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  deleteField,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import {
  firebaseConfig,
  firebaseGiftDocument,
  firebaseVehicleCatalogDocument,
  hasFirebaseConfig
} from "./firebase-config.js";

function buildFirebaseGiftStore() {
  if (!hasFirebaseConfig()) {
    return null;
  }

  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);
  const giftDocumentRef = doc(
    database,
    firebaseGiftDocument.collection,
    firebaseGiftDocument.document
  );
  const vehicleCatalogDocumentRef = doc(
    database,
    firebaseVehicleCatalogDocument.collection,
    firebaseVehicleCatalogDocument.document
  );

  return {
    async loadGiftState() {
      const snapshot = await getDoc(giftDocumentRef);
      if (!snapshot.exists()) {
        return null;
      }

      const data = snapshot.data();
      return {
        giftOptions: Array.isArray(data?.giftOptions) ? data.giftOptions : []
      };
    },
    async saveGiftState(state) {
      await setDoc(giftDocumentRef, {
        giftOptions: Array.isArray(state?.giftOptions) ? state.giftOptions : [],
        selectedGifts: deleteField(),
        updatedAt: serverTimestamp()
      }, { merge: true });
    },
    async loadVehicleCatalog() {
      const snapshot = await getDoc(vehicleCatalogDocumentRef);
      if (!snapshot.exists()) {
        return null;
      }

      const data = snapshot.data();
      return {
        models: data?.models && typeof data.models === "object" ? data.models : null
      };
    },
    async saveVehicleCatalog(state) {
      await setDoc(vehicleCatalogDocumentRef, {
        models: state?.models && typeof state.models === "object" ? state.models : {},
        updatedAt: serverTimestamp()
      }, { merge: true });
    }
  };
}

try {
  window.firebaseGiftStore = buildFirebaseGiftStore();
} catch (error) {
  console.error("Firebase initialization failed:", error);
  window.firebaseGiftStore = null;
}

window.dispatchEvent(new CustomEvent("firebase-gift-store-ready"));
