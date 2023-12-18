<template>
  <form @submit.prevent="onSubmit()">
    <p>Don't see a startup on the list? Fill the form below.</p>
    <div class="d-sm-flex">
      <div class="form-group">
        <input
          v-model="form.startupName"
          aria-label="Startup Name"
          class="form-control bg-transparent me-3 mt-3"
          type="text"
          placeholder="Enter Startup Name"
          :class="{
            'is-invalid': v$.$dirty && v$.startupName.$invalid
          }" />
        <div v-for="(error, i) of v$.startupName.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
        </div>
      </div>
      <div class="form-group">
        <select
          v-model="form.country"
          aria-label="Countries"
          class="form-control bg-transparent mt-3"
          :class="{
            'is-invalid': v$.$dirty && v$.country.$invalid
          }">
          <option value="" disabled>Select Country</option>
          <option
            v-for="(item, index) in countries"
            :key="index"
            :value="item.name">
            {{ item.name }}
          </option>
        </select>
        <div v-for="(error, i) of v$.country.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
        </div>
      </div>
    </div>
    <div class="d-sm-flex">
      <div class="form-group">
        <input
          v-model="form.foundingYear"
          aria-label="Founding Year"
          class="form-control bg-transparent me-3 mt-3"
          type="text"
          placeholder="Enter Founding Year"
          :class="{
            'is-invalid': v$.$dirty && v$.foundingYear.$invalid
          }" />
        <div v-for="(error, i) of v$.foundingYear.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
        </div>
      </div>
      <div class="form-group">
        <input
          v-model="form.fundingAmount"
          aria-label="Funding Amount"
          class="form-control bg-transparent mt-3"
          type="text"
          placeholder="Enter Funding Amount"
          :class="{
            'is-invalid': v$.$dirty && v$.fundingAmount.$invalid
          }" />
        <div v-for="(error, i) of v$.fundingAmount.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
        </div>
      </div>
    </div>
    <div class="d-sm-flex">
      <div class="form-group">
        <date-picker
          v-model:value="form.shutdownDate"
          format="YYYY-MM"
          value-type="format"
          aria-label="Shut Down Date"
          class="form-control bg-transparent me-3 mt-3"
          :class="{
            'is-invalid': v$.$dirty && v$.shutdownDate.$invalid
          }" />
        <div v-for="(error, i) of v$.shutdownDate.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
        </div>
      </div>
      <div class="form-group">
        <select
          v-model="form.category"
          aria-label="Categories"
          class="form-control bg-transparent mt-3"
          :class="{
            'is-invalid': v$.$dirty && v$.category.$invalid
          }">
          <option value="" disabled>Select Category</option>
          <option
            v-for="(item, index) in categories"
            :key="index"
            :value="item.name">
            {{ item.name }}
          </option>
        </select>
        <div v-for="(error, i) of v$.category.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
        </div>
      </div>
    </div>
    <div class="d-sm-flex">
      <div class="form-group">
        <input
          v-model="form.newsPublication"
          aria-label="News Publication"
          class="form-control bg-transparent me-3 mt-3"
          type="text"
          placeholder="Enter News Publication"
          :class="{
            'is-invalid': v$.$dirty && v$.newsPublication.$invalid
          }" />
        <div v-for="(error, i) of v$.newsPublication.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
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
          }" />
        <div v-for="(error, i) of v$.newsPublicationLink.$errors" :key="i">
          <p
            v-if="error.$validator === 'required'"
            class="text-danger small mb-2">
            This field is required
          </p>
          <p v-if="error.$validator === 'url'" class="text-danger small mb-2">
            Please enter a valid URL.
          </p>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea
        v-model="form.description"
        aria-label="Startup Description"
        class="form-control bg-transparent mt-3"
        placeholder="Enter Short Description of Startup"
        cols="30"
        rows="5"
        maxlength="160"
        :class="{
          'is-invalid': v$.$dirty && v$.description.$invalid
        }"></textarea>
      <div v-for="(error, i) of v$.description.$errors" :key="i">
        <p
          v-if="error.$validator === 'required'"
          class="text-danger small mb-2">
          This field is required
        </p>
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

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';
import { collection, addDoc } from 'firebase/firestore';

// components
import DatePicker from 'vue-datepicker-next';

// data
import {
  countries as allCountries,
  categories as allCategories
} from '@/assets/data';

// models
import { Firestore } from 'firebase/firestore';
import { ICountry, ICategory } from '@/models';

export default defineComponent({
  name: 'StartupForm',
  components: {
    DatePicker
  },
  setup() {
    // common
    const firestore: Firestore = inject('firestore') as Firestore;
    const countries: ICountry[] = allCountries;
    const categories: ICategory[] = allCategories;
    const rules = {
      startupName: { required },
      country: { required },
      foundingYear: { required },
      fundingAmount: { required },
      shutdownDate: { required },
      category: { required },
      newsPublication: { required },
      newsPublicationLink: { required, url },
      description: { required }
    };

    // refs
    const form = ref({
      startupName: '',
      country: '',
      foundingYear: '',
      fundingAmount: '',
      shutdownDate: '',
      category: '',
      newsPublication: '',
      newsPublicationLink: '',
      description: ''
    });
    const isFormSubmitted = ref<boolean>(false);
    const isProcessing = ref<boolean>(false);
    const errorMessage = ref<string>('');

    const v$ = useVuelidate(rules, form);

    // methods
    async function onSubmit(): Promise<void> {
      v$.value.$touch();
      if (v$.value.$invalid) {
        return;
      }

      isProcessing.value = true;
      errorMessage.value = '';

      try {
        await addDoc(collection(firestore, 'pendingStartups'), {
          ...form.value,
          shutdownDate: new Date(form.value.shutdownDate).toISOString()
        });
        isFormSubmitted.value = true;
        form.value = {
          startupName: '',
          country: '',
          foundingYear: '',
          fundingAmount: '',
          shutdownDate: '',
          category: '',
          newsPublication: '',
          newsPublicationLink: '',
          description: ''
        };
        v$.value.$reset();
      } catch (e) {
        errorMessage.value = (e as Error).message;
      } finally {
        isProcessing.value = false;
      }
    }

    return {
      countries,
      categories,
      form,
      isFormSubmitted,
      isProcessing,
      errorMessage,
      v$,
      onSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
form {
  max-width: 75%;

  @media screen and (max-width: 768px) {
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

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
