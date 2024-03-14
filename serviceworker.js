self.addEventListener("push", function (event) {
  const options = {
    body: "這是一個通知示例。",
    icon: "images/icon.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "探索這個通知",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "關閉", icon: "images/xmark.png" },
    ],
  };

  event.waitUntil(self.registration.showNotification("你好！", options));
});
