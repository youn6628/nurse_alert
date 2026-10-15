self.addEventListener("push", event => {

  const data = event.data ? event.data.json() : {};

  const title = data.title || "🏥 Nurse Alert";

  const options = {
    body: data.body || "새로운 간호사 채용공고가 있습니다!",
    data: {
      url: data.url || "./"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );

});

self.addEventListener("notificationclick", event => {

  event.notification.close();

  const url = event.notification.data.url;

  event.waitUntil(
    clients.openWindow(url)
  );

});
