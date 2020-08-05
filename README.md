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


## Spotify API

(Spotify Web API)[https://api.spotify.com/] provides endpoints to retrieve information about songs, albums and artists.

There's an attached Postman collection used during development for testing purposes. Import it from (spotifind.postman.json)[src/spotifind.postman.json].

The used authorization guide is (Spotify Web API Client Credentials Flow)[https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow]. Click to see further information.

There are two variables set in a (.env)[src/.env] file:

VUE_APP_SPOTIFY_CLIENT_ID
VUE_APP_SPOTIFY_CLIENT_SECRET

*NOTE: This is not a good practice because environment variables are embedded into the build, so anyone can view them inspecting app's files. But it was the faster way to integrate the API for the code test. The best approach would be injecting these keys throw execution container variables or creating a proxy API to perfom token actions.*

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

## i18n

Even though only one language is used (Spanish), vue-i18n lib allows you to manage static text without hard coding the data.

The plugin used is from the most used i18n vue library (kazupon vue-i18n lib)[https://kazupon.github.io/vue-i18n/].

## SVG Icons


## Project
