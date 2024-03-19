import { defineStore } from 'pinia';
import { doc, getDoc } from 'firebase/firestore';

// models
import type { IBlogConfig } from '~/models';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    config: {
      showBlog: false
    } as IBlogConfig
  }),
  actions: {
    async fetchConfig (): Promise<void> {
      const { $firestore } = useNuxtApp();
      const docRef = doc($firestore, 'configuration', 'blog');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.config = docSnap.data() as IBlogConfig;
      }
    }
  }
});
