# spotify-ui

Author: David Manso Fernández
Email: d.mansofernandez@gmail.com

## Project stack

- TypeScript.
- PUG Preprocessor.
- Notifications: (noty)[https://ned.im/noty/] lib and custom wrapper for use it with Vue.

## Styles

Colors are from Spotify branding guidelines.

(Spotify Branding guidelines)[https://developer.spotify.com/branding-guidelines/].

## Notifications

Notifications can be thrown using a custom plugin which is a wrapper of (noty)[https://ned.im/noty/] lib.

How? The plugin is accesible referencing to *this.$noty*. There are four different methods available. Each method has his
own configuration, mainly styles, according to the type of notification that want to be displayed. A custom object is passed
as argument and overwrites the method configuration but it's not necessary. It's important to pass key-value *text* inside this
object with the text to be printed.

```
this.$noty.success({ text:  })
this.$noty.error({ text:  })
this.$noty.warning({ text:  })
this.$noty.info({ text:  })
```

See (noty plugin folder)[src/plugins] for further info.

## Project
