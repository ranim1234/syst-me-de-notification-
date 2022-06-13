  
importScripts("https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js");
//const firebase = require('firebase/app').default;
//require('firebase/auth');
//require('firebase/database'); 

firebase.initializeApp({


        apiKey: "AIzaSyDx2BfKbmGzrf3bgPCobVR5-NMzVjHhjaI",
        authDomain: "push-46201.firebaseapp.com",
        projectId: "push-46201",
        storageBucket: "push-46201.appspot.com",
        messagingSenderId: "928270663295",
        appId: "1:928270663295:web:7c4dcd9d8eb84d659cc94a",
        measurementId: "G-EDBEEK2417"
})
    
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
    const messaging= firebase.messaging();
   