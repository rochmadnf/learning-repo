import "./bootstrap";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ3FmFlHNgpj9xz3mrkBoLbr79fOxNqRk",
    authDomain: "wpn-test-30acb.firebaseapp.com",
    projectId: "wpn-test-30acb",
    storageBucket: "wpn-test-30acb.appspot.com",
    messagingSenderId: "278017263965",
    appId: "1:278017263965:web:79696ff7291ed1aeaa40b4",
    measurementId: "G-J12X99ZLJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

function requestSubs() {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            alert("Notification permission granted.");
        } else {
            alert("Silakan subscribe");
        }
    });
}

onMessage(messaging, (payload) => {
    console.log("data : ", payload);
    new Notification(payload?.data?.title, {
        body: payload?.data?.body,
        icon: "https://rochmadnf.my.id/assets/images/logoku.jpg",
        data: {
            url: "https://rochmadnf.my.id",
            status: "open",
        },
    });
});

getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_KEY_PAIR })
    .then(async (currentToken) => {
        if (currentToken) {
            console.info(currentToken);
            await fetch(`${import.meta.env.VITE_APP_URL}/api/token`, {
                method: "POST",
                headers: {
                    Accept: "application.json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ web_token: currentToken }),
            });
        } else {
            requestSubs();
        }
    })
    .catch((err) => {
        console.log(err);
    });
