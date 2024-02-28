import DatePicker from 'vue-datepicker-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DatePicker', DatePicker);
});
