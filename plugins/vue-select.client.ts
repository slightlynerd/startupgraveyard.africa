import VueSelect from 'vue-select';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueSelect', VueSelect);
});
