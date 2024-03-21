<template>
  <form @submit.prevent="onSubmit()">
    <p>Don't see a startup on the list? Fill the form below.</p>
    <div class="d-lg-flex">
      <div class="form-group">
        <input
          v-model="form.startupName"
          aria-label="Startup Name"
          class="form-control bg-transparent me-3 mt-3"
          type="text"
          placeholder="Enter Startup Name"
          :class="{
            'is-invalid': v$.$dirty && v$.startupName.$invalid
          }"
        >
        <div v-for="(error, i) of v$.startupName.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger mb-2"
          >
            This field is required
          </p>
        </div>
      </div>
      <div class="form-group">
        <input
          v-model="form.newsPublicationLink"
          aria-label="News Publication Link"
          class="form-control bg-transparent mt-3"
          type="text"
          placeholder="Enter News Publication Link"
          :class="{
            'is-invalid': v$.$dirty && v$.newsPublicationLink.$invalid
          }"
        >
        <div v-for="(error, i) of v$.newsPublicationLink.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger mb-2"
          >
            This field is required
          </p>
          <p v-if="error.$validator === 'url'" class="text-danger mb-2">
            Please enter a valid URL.
          </p>
        </div>
      </div>
    </div>
    <div class="d-lg-flex">
      <div class="form-group">
        <client-only>
          <date-picker
            v-model:value="form.shutdownDate"
            format="YYYY-MM"
            value-type="format"
            aria-label="Shut Down Date"
            placeholder="Enter Shut Down Date"
            class="form-control bg-transparent me-3 mt-3 py-0"
            :class="{
              'is-invalid': v$.$dirty && v$.shutdownDate.$invalid
            }"
          />
        </client-only>
        <div v-for="(error, i) of v$.shutdownDate.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger mb-2"
          >
            This field is required
          </p>
        </div>
      </div>
      <div class="form-group">
        <client-only>
          <vue-select
            v-model="form.category"
            label="name"
            class="form-control bg-transparent mt-3"
            placeholder="Select Category"
            :clear-on-select="false"
            :clearable="false"
            :reduce="category => category.name"
            :options="categories"
          />
        </client-only>
        <div v-for="(error, i) of v$.category.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger mb-2"
          >
            This field is required
          </p>
        </div>
      </div>
    </div>
    <button type="submit" class="btn mt-3" :disabled="isProcessing">
      Submit
    </button>
    <p v-if="isFormSubmitted" class="text-success mt-4">
      Submitted successful! Your submission will be reviewed and added to the
      list if approved.
    </p>
    <p v-if="errorMessage" class="text-danger mt-4">
      {{ errorMessage }}
    </p>
  </form>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';
import { collection, addDoc } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

// data
import {
  categories as allCategories
} from 'assets/data';

// models
import { type ICategory, Category } from '@/models';

// common
const { $firestore } = useNuxtApp();
const categories: ICategory[] = allCategories.filter(
  category => category.name !== Category.All
);
const rules = {
  startupName: { required },
  shutdownDate: { required },
  category: { required },
  newsPublicationLink: { required, url }
};

// refs
const form = ref({
  startupName: '',
  shutdownDate: '',
  category: '',
  newsPublicationLink: ''
});
const isFormSubmitted = ref<boolean>(false);
const isProcessing = ref<boolean>(false);
const errorMessage = ref<string>('');

const v$ = useVuelidate(rules, form);

// lifecycle hooks
onMounted(() => {
  const analytics = getAnalytics();
  logEvent(analytics, 'startup_form_viewed');
});

// methods
async function onSubmit (): Promise<void> {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }

  isProcessing.value = true;
  errorMessage.value = '';

  try {
    await addDoc(collection($firestore, 'pendingStartups'), {
      ...form.value,
      shutdownDate: new Date(form.value.shutdownDate).toISOString()
    });
    isFormSubmitted.value = true;
    form.value = {
      startupName: '',
      shutdownDate: '',
      category: '',
      newsPublicationLink: ''
    };
    v$.value.$reset();
    const analytics = getAnalytics();
    logEvent(analytics, 'startup_form_submitted');
  } catch (e) {
    errorMessage.value = (e as Error).message;
  } finally {
    isProcessing.value = false;
  }
}
</script>

<style lang="scss" scoped>
form {
  max-width: 75%;

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }

  input.form-control,
  select.form-control,
  div.form-control {
    display: block;
    width: 23rem;

    @media screen and (max-width: 412px) {
      width: 100%;
    }
  }

  textarea.form-control {
    display: block;
    width: 70%;

    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
}
</style>
