# NotificationsStore

The `NotificationsStore` is a typescript class that contains [signals](https://github.com/tc39/proposal-signals), to which you can subscribe to get reactive updates in your elements.

```js
import { NotificationsStore, NotificationsClient, NotificationsConfig } from "@darksoil-studio/notifications-zome";

const config: NotificationsConfig = {
  // TODO: fill this
};

const store = new NotificationsStore(new NotificationsClient(appClient, 'my-role-name'), config);
```

> Learn how to setup the `AppClient` object [here](https://www.npmjs.com/package/@holochain/client).

Learn more about the stores and how to integrate them in different frameworks [here](https://darksoil.studio/tnesh-stack/integrating-with-frameworks/).