importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: "123425094011"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then((payload) => {
      console.log('setBackground', payload);
      const title = 'Smart Sauna App';
      const options = {
          body: payload.data.description
      }
      return registration.showNotification(title, options);
    });
  return promiseChain;
});

self.addEventListener('notificationclick', (event) => {
    if (event.action) {
        clients.openWindow(event.action);
    }
    event.notification.close();
}); 