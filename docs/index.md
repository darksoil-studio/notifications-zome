---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Notifications Zome"
  text: ""
  tagline: Plug-and-play in-app notifications for your hApps
  actions:
    - theme: brand
      text: Setup
      link: /setup.md
    - theme: alt
      text: Integrity Zome API
      link: "/backend/doc/notifications_integrity/index.html"
      target: "_blank"
    - theme: alt
      text: Coordinator Zome API
      link: "/backend/doc/notifications/index.html"
      target: "_blank"
    - theme: alt
      text: Frontend API
      link: "/notifications-store.md"

features:
  - title: UI + Integrity + Coordinator Zomes
    details: Following the TNESH stack guidelines
    link: https://darksoil.studio/tnesh-stack
  - title: Send private in-app notifications
    details: Call `NotificationsClient.sendNotification(recipient, notification)` to send immediate in-app notifications.
  - title: Plug-and-play UI elements
    details: Use "<my-notifications-icon-button>" to include the desktop in-app notifications experience, read and dismiss notifications.
    link: "/elements/my-notifications-icon-button.md"
  - title: Compatible with mobile push-notifications
    details: Notification management is done in the coordinator zome to enable compatibility with push-notifications.
---
