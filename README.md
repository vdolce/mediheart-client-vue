

# mediheart-client-vue

This repo is the final version of the Mediheart client: 

Check it out **[Mediheart Demo](https://mediheart.netlify.app/)**

![alt text](https://github.com/vdolce/mediheart-landing-page/blob/main/src/assets/img/mediheart_screenshot.png)

## Information

The client is developed with Vue JS using the following technologies:

- **axios js**: for HTTP request, promises, interceptors
- **vuex**: state management library with a centralized store for all modules/components
- **vue-router**: routes manager for Single Page Application
- **Vuetify Js** as Material Design Framework
- **vue-i18n** as internationalization plugin

The frontend is **Dockerized** and deployed on **Netifly**.

Take a look at the **[Backend Mediheart Repo](https://github.com/gppmad/mediheart-server)**


## Usage

If you want to run the **Docker** container locally, please run
```
docker-compose up
```


Instead, if you want to run the client locally at "http://localhost:8080/" , please run
```
npm run serve
```
