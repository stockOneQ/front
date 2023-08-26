importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js',
);

// 이곳에 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
const config = {
  apiKey: 'AIzaSyDJrLnEK1zsvrbwvP9LsTQVO7qRd_3KP6w',
  authDomain: 'stockoneq-fcm.firebaseapp.com',
  projectId: 'stockoneq-fcm',
  storageBucket: 'stockoneq-fcm.appspot.com',
  messagingSenderId: '935948153821',
  appId: '1:935948153821:web:fb6cad88cf6ac72849bc34',
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();
