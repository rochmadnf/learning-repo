importScripts(
    "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyBZ3FmFlHNgpj9xz3mrkBoLbr79fOxNqRk",
    authDomain: "wpn-test-30acb.firebaseapp.com",
    projectId: "wpn-test-30acb",
    storageBucket: "wpn-test-30acb.appspot.com",
    messagingSenderId: "278017263965",
    appId: "1:278017263965:web:79696ff7291ed1aeaa40b4",
    measurementId: "G-J12X99ZLJB",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/firebase-logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
