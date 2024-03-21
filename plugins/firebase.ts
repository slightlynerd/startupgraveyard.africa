import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

import { FIREBASE_CONFIG } from '~/models';

export default defineNuxtPlugin(() => {
  const firebase = initializeApp(FIREBASE_CONFIG);
  const firestore = getFirestore(firebase);

  if (process.env.NODE_ENV !== 'development') {
    getAnalytics(firebase);
  }

  return {
    provide: {
      firestore
    }
  };
});
