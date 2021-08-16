import axios from 'axios';
import {store} from '../store/store.js'

// se aggiungo 'Access-Control-Allow-Origin': '*' mi da errore di CORS policy
const axiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}` == 'undefined' || `${process.env.VUE_APP_API_URL}` == '' ? 'http://localhost:8000/api' : `${process.env.VUE_APP_API_URL}`,
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

/************* INTERCEPTORS  **************/

// Add a REQUEST interceptor
axiosInstance.interceptors.request.use(function (config) {
  console.log('interceptor - REQUEST OK')
  store.dispatch('activeStartProgress')

  console.log(config.headers)
  
  //attach token to header request if needed (always except for login and signup)
  if(config.url != '/auth/api-token-auth/' && config.url != '/auth/signup/'){
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
  store.dispatch('activeFinishProgress')
  return response;
  
}, function (error) {
  // Do something with response error
  console.log('interceptor - RESPONSE KO')  
  
  // finish loader progress
  store.dispatch('activeFinishProgress')
  
  // show error alert 
  store.dispatch('activeErrorAlert', error)
  return Promise.reject(error);
});

export default axiosInstance;