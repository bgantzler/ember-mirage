---
layout: default
title: "Installation"
nav_order: 2
permalink: /installation/
---
MirageJS is considered a peer dependency. You must install mirageJS
```yaml
ember install miragejs
```

Then install this addon to include MirageJS in your tests
```yaml
ember install ember-mirage
```

Ember should install the addon and add a /mirage directory to the root of your project.

## Note for FastBoot users

You might expect Mirage to serve network requests made by your FastBoot app, but because Mirage runs only in the browser, it currently disables itself if your app is being served by FastBoot.

[MirageJS Node Support](https://github.com/miragejs/miragejs/issues/210) is currently being worked on. In the meantime, you'll need to develop your FastBoot pages against a local server.

You can always bypass FastBoot page generation locally by running

```sh
FASTBOOT_DISABLED=true ember serve
```

Mirage will then run in the browser as expected, and you can develop your client app as normal.
