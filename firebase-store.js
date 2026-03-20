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
  hasFirebaseConfig
} from "./firebase-config.js";

function buildFirebaseGiftStore() {
  if (!hasFirebaseConfig()) {
    return null;
  }

  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);
  const documentRef = doc(
    database,
    firebaseGiftDocument.collection,
    firebaseGiftDocument.document
  );

  return {
    async loadGiftState() {
      const snapshot = await getDoc(documentRef);
      if (!snapshot.exists()) {
        return null;
      }

      const data = snapshot.data();
      return {
        giftOptions: Array.isArray(data?.giftOptions) ? data.giftOptions : []
      };
    },
    async saveGiftState(state) {
      await setDoc(documentRef, {
        giftOptions: Array.isArray(state?.giftOptions) ? state.giftOptions : [],
        selectedGifts: deleteField(),
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
