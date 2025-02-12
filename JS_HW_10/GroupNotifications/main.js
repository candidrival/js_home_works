function groupNotificationsBySource(notifications) {
    return notifications.reduce((acc, notification) => {
        const { source } = notification;
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push(notification);
        return acc;
    }, {});
}

const notificationsList = [
    { source: "email", text: "New email from John", date: "2025-01-31" },
    { source: "sms", text: "New SMS from Mom", date: "2025-01-30" },
    { source: "email", text: "Newsletter update", date: "2025-01-29" },
    { source: "app", text: "App notification", date: "2025-01-28" },
    { source: "sms", text: "Bank alert", date: "2025-01-27" }
];

console.log(groupNotificationsBySource(notificationsList));
  
groupNotificationsBySource(notificationsList)[Symbol.iterator] = function() {
    const allNotifications = Object.values(this).flat();
    let index = 0;
  
    return {
      next: () => {
        if (index < allNotifications.length) {
          return { value: allNotifications[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  for (const notification of notificationsList) {
    console.log(notification);
  }