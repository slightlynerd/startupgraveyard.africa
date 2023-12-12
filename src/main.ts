import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import 'bootstrap';

import { firebaseConfig } from './services';

import App from './app.vue';

if (process.env.NODE_ENV !== 'development') {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}

createApp(App).mount('#app');
