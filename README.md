# 2BrainsTestSPA

> 2Brains Test - FrontEnd

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deployment

Escogí Heroku por la familiaridad al hacer deploy de apps (ninguna de js hasta ahora XD)

### Procfile y package.json

- Agregue un nuevo script en package.json para el build en heroku
- Cree un fichero Procfile en la raiz del proyecto para especificar el dino a utilizar en heroku

### How To

- Lo que realice fue crear el proyecto en heroku y asociar el repositorio de github al mismo.
  Configure la rama a deployar (master) y setie las variables de entorno que utiliza la app tanto node (ENVIRONMENT y HOST) y las de firebase ( FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID )

> Al sincronizar la rama, por cada push a ella, Heroku hace un build de los nuevos cambios de manera automatica

> Material de apoyo deploy: [Nuxt.js Deploy docs](https://nuxtjs.org/faq/heroku-deployment/).
