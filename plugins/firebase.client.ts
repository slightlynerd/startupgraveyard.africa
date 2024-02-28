import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from '~/services';

export default defineNuxtPlugin(() => {
  const firebase = initializeApp(firebaseConfig);
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
