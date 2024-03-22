import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

import { FIREBASE_CONFIG } from '~/models';

export default defineNuxtPlugin(async () => {
  const firebase = initializeApp(FIREBASE_CONFIG);
  const firestore = getFirestore(firebase);

  if (process.env.NODE_ENV !== 'development' && await isSupported()) {
    getAnalytics(firebase);
  }

  return {
    provide: {
      firestore
    }
  };
});
