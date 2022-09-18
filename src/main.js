import { createApp } from 'vue'
import { Quasar } from 'quasar'
// Pinia
import { createPinia } from "pinia"
// Router
import router from "../src/router/index.js";
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)
const pinia = createPinia()

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
});

//pinia
myApp.use(pinia);

//vue router
myApp.use(router);

myApp.mount("#app");