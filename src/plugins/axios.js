import axios from 'axios';
import {store} from '../store/store.js'

// se aggiungo 'Access-Control-Allow-Origin': '*' mi da errore di CORS policy
const axiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}` == 'undefined' || `${process.env.VUE_APP_API_URL}` == '' ? 'http://localhost:8000/api' : `${process.env.VUE_APP_API_URL}`,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

/************* INTERCEPTORS  **************/

// Add a REQUEST interceptor
axiosInstance.interceptors.request.use(function (config) {
  console.log('interceptor - REQUEST OK')
  store.commit('startProgress')

  console.log(config.headers)
  // attach token to header request if needed (always except for login and signup)
  if(config.url != '/login/' && config.url != '/signup/'){
    const token = localStorage.getItem("token")
    config.headers.Authorization =  "Token " + token;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a RESPONSE interceptor
axiosInstance.interceptors.response.use(function (response) {
  console.log('interceptor - RESPONSE OK')
  store.commit('finishProgress')
  return response;
  
}, function (error) {
  // Do something with response error
  console.log('interceptor - response KO')  
  
  // finish loader progress
  store.commit('finishProgress')
  
  // show error alert 
  store.commit('errorAlert', error)
  return Promise.reject(error);
});

export default axiosInstance;