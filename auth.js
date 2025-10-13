// auth.js

// Firebase Config (your project details)
const firebaseConfig = {
    apiKey: "AIzaSyBNl9NMqKrmYqY9WPG-v-jAFbiv5d-vef8",
    authDomain: "jackspot-bd84f.firebaseapp.com",
    databaseURL: "https://jackspot-bd84f-default-rtdb.firebaseio.com",
    projectId: "jackspot-bd84f",
    storageBucket: "jackspot-bd84f.firebasestorage.app",
    messagingSenderId: "740333832481",
    appId: "1:740333832481:web:89c6c084af318ed1c01660",
    measurementId: "G-H4QH4TR65X"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Now db is defined after init
const db = firebase.database();

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login(email, password, callback) {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => callback(true))
        .catch(err => {
            alert("Login failed: " + err.message);
            callback(false);
        });
}

// Logout function
function logout() {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
}

// Protect admin page
function protectAdminPage() {
    auth.onAuthStateChanged(user => {
        if (!user) {
            window.location.href = "login.html";
        }
    });
}

// Redirect logged in users (for login.html)
function redirectIfLoggedIn() {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.location.href = "admin.html";
        }
    });
}