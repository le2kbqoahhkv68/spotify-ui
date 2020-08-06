# spotify-ui

Author: David Manso Fernández
Email: d.mansofernandez@gmail.com

## Project stack summary

- SCSS Preprocessor
- PUG Preprocessor
- TypeScript
- Axios
- Notifications: (noty)[https://ned.im/noty/] lib and custom wrapper for use it with Vue
- Lodash
- vue-i18n

## Styles

Colors are from Spotify branding guidelines.

(Spotify Branding guidelines)[https://developer.spotify.com/branding-guidelines/].

## API - http

API-http classes are under (src/api)[src/api] directory. Axios is used to wrap every request, but there are custom classes to perform these actions.

You can see two different folders:
- (src/api/core)[src/api/core] contains everything necessary to communicate:
  - http.js: exports an axios wrapped instance, which is common in the whole app.
  - auth.js: contains functions used to request and manage auth tokens. It's a different instance of axios because the request is made to a different API url than the rest of the services.
  - interceptor.js: contains interceptors set in http.js instance. Request interceptor adds auth token, and response interceptor handles errors.
- (src/api/services)[src/api/services] contains every request function separated by file.

The bearer token is stored in *session storage*. Why ? Because it has a short time of expiration (3600s), and the most common scenario would be that the token is expired when the user access again to the app.

## Spotify API

(Spotify Web API)[https://api.spotify.com/] provides endpoints to retrieve information about songs, albums and artists.

There's an attached Postman collection used during development for testing purposes. Import it from (spotifind.postman.json)[src/spotifind.postman.json].

The used authorization guide is (Spotify Web API Client Credentials Flow)[https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow]. Click to see further information.

There are two variables set in a (.env)[src/.env] file:

VUE_APP_SPOTIFY_CLIENT_ID
VUE_APP_SPOTIFY_CLIENT_SECRET

*NOTE: This is not a good practice because environment variables are embedded into the build, so anyone can view them inspecting app's files. But it was the faster way to integrate the API for the code test. The best approach would be injecting these keys throw execution container variables or creating a proxy API to perfom token actions.*

See (src/api/core/interceptors.js)[src/api/core/interceptors.js]. According to Spotify Web API documention, there are a few errores handled there.

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

You can see basic configuration under (plugins i18n folder)[src/plugins/i18n]

## SVG Icons

FontAwesome is installed as project dependency and then minified css file is imported in partial scss icons file (_icons.scss)[src/styles/app/_icons.scss] from the module.

You can place Font Awesome icons just about anywhere using a style prefix and the icon’s name. See the example below: 

```
i.fas.fa-camera
```

See (FontAwesome guide)[https://fontawesome.com/how-to-use/] for further info.
See (icons gallery)[https://fontawesome.com/icons?d=gallery].

You can modify its color or size modifying css properties as you do with fonts.

## Project
