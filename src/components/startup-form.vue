<template>
  <form @submit.prevent="onSubmit()">
    <p>Don't see a startup on the list? Fill the form below.</p>
    <div class="d-sm-flex">
      <input
        aria-label="Startup Name"
        class="form-control bg-transparent me-3 mt-3"
        type="text"
        placeholder="Enter Startup Name" />
      <select
        v-model="selectedCountry"
        aria-label="Countries"
        class="form-control bg-transparent mt-3">
        <option value="" disabled>Select Country</option>
        <option
          v-for="(item, index) in countries"
          :key="index"
          :value="item.name">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="d-sm-flex">
      <input
        aria-label="Founding Year"
        class="form-control bg-transparent me-3 mt-3"
        type="text"
        placeholder="Enter Founding Year" />
      <input
        aria-label="Funding Amount"
        class="form-control bg-transparent mt-3"
        type="text"
        placeholder="Enter Funding Amount" />
    </div>
    <div class="d-sm-flex">
      <input
        aria-label="News Publication"
        class="form-control bg-transparent me-3 mt-3"
        type="text"
        placeholder="Enter News Publication" />
      <input
        aria-label="News Publication Link"
        class="form-control bg-transparent mt-3"
        type="text"
        placeholder="Enter News Publication Link" />
    </div>
    <input
      aria-label="Shut Down Date"
      class="form-control bg-transparent me-3 mt-3"
      type="text"
      placeholder="Enter Shut Down Date (yyyy-mm)" />
    <textarea
      aria-label="Startup Description"
      class="form-control bg-transparent mt-3"
      placeholder="Enter Short Description of Startup"
      cols="30"
      rows="5"></textarea>
    <button type="submit" class="btn mt-3">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// data
import { countries as allCountries } from '@/assets/data';

// models
import { ICountry } from '@/models';

export default defineComponent({
  name: 'StartupForm',
  setup() {
    // common
    const countries: ICountry[] = allCountries.filter(item => item.count > 0);

    // refs
    const selectedCountry = ref<string>('');

    // methods
    function onSubmit(): void {
      console.log('onSubmit');
    }

    return {
      countries,
      selectedCountry,
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
  select.form-control {
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
