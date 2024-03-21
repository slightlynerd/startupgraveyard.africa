import { defineStore } from 'pinia';
import { doc, getDoc } from 'firebase/firestore';

// models
import { FirestoreCollection, type IBlogConfig } from '~/models';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    config: {
      showBlog: false
    } as IBlogConfig
  }),
  actions: {
    async fetchConfig (): Promise<void> {
      const { $firestore } = useNuxtApp();
      const docRef = doc($firestore, FirestoreCollection.Configuration, FirestoreCollection.Blog);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.config = docSnap.data() as IBlogConfig;
      }
    }
  }
});
