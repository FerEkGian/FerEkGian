// Importa los módulos de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-functions.js";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCpIQj5At4olD4qI0xkX6dcAty91Jqspf0",
    authDomain: "web-duttonpower.firebaseapp.com",
    projectId: "web-duttonpower",
    storageBucket: "web-duttonpower.appspot.com",
    messagingSenderId: "50017749392",
    appId: "1:50017749392:web:056235a067c131ca360b15",
    measurementId: "G-GKVG3S32KF"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
