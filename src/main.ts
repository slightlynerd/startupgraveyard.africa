import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import VueSelect from 'vue-select';
import 'bootstrap';

import { firebaseConfig } from './services';

import App from './app.vue';

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

if (process.env.NODE_ENV !== 'development') {
  getAnalytics(firebase);
}

const app = createApp(App);

app.provide('firestore', firestore);
app.component('VueSelect', VueSelect);

app.mount('#app');
