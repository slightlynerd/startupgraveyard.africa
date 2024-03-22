import { defineStore } from 'pinia';
import { doc, getDoc } from 'firebase/firestore';

// models
import { FirestoreCollection, type IBlogConfig } from '~/models';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    isLoading: false,
    config: {
      showBlog: false,
      testShowBlog: false
    } as IBlogConfig
  }),
  actions: {
    setLoading (loading: boolean): void {
      this.isLoading = loading;
    },
    async fetchConfig (): Promise<void> {
      const { $firestore } = useNuxtApp();
      const docRef = doc($firestore, FirestoreCollection.Configuration, FirestoreCollection.Blog);
      this.setLoading(true);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.config = docSnap.data() as IBlogConfig;
        }
      } catch (error) {
        // TODO: handle error
      } finally {
        this.setLoading(false);
      }
    }
  }
});
