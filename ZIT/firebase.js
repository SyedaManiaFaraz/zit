import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTubnRAT4uoiczWei_GGRpBbon2Pg2VzE",
  authDomain: "authentication-bd915.firebaseapp.com",
  projectId: "authentication-bd915",
  storageBucket: "authentication-bd915.firebasestorage.app",
  messagingSenderId: "240032788349",
  appId: "1:240032788349:web:305714a01e1816ace76614"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const submit = document.getElementById("submit");

submit.addEventListener("click", function(event){
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Sign Up successful!");
      window.location = "page.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

