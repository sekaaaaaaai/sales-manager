import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-QSikilz_IIIpH7_Wb6z0eRo4ok0NpaQ",
  authDomain: "fir-sales-manager.firebaseapp.com",
  projectId: "fir-sales-manager",
  storageBucket: "fir-sales-manager.appspot.com",
  messagingSenderId: "612341315184",
  appId: "1:612341315184:web:723280cc50fb53281666b5"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const app = createApp(App)
app.use(router) // router追加
app.use(vuetify) // vuetify追加
app.mount('#app')

export { db };