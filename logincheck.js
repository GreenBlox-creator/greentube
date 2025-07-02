import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 🔧 Konfiguracja Firebase (ta sama co w innych plikach)
const firebaseConfig = {
  apiKey: "AIzaSyDnGKAkzW9w2Y1NBeyasBTY29YYYzFok_A",
  authDomain: "greentube-b93d1.firebaseapp.com",
  projectId: "greentube-b93d1",
  storageBucket: "greentube-b93d1.appspot.com",
  messagingSenderId: "818380659407",
  appId: "1:818380659407:web:7ee71139590488d78e75ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Sprawdzenie logowania
onAuthStateChanged(auth, user => {
  if (!user) {
    // ⛔ Jeśli nie zalogowany — przekieruj do ekranu logowania
    window.location.href = "https://greenblox-creator.github.io/accounts";
  }
});
