<template>
  <div class="chart">
    <client-only>
      <VueApexCharts
        type="bar"
        height="300"
        :options="chartOptions"
        :series="series"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';

// data
import {
  countries as allCountries
} from '~/assets/data';

// models
import { type ICountry } from '@/models';

// constants
const countries: ICountry[] = allCountries.filter(
  item => item.count > 0
);

// computed
const chartOptions = {
  chart: {
    id: 'countries-chart'
  },
  dataLabels: {
    enabled: false
  },
  subtitle: {
    text: 'Chart showing the number of startups by country.'
  },
  title: {
    text: 'Countries'
  },
  xaxis: {
    categories: countries.map(item => item.name)
  }
};
const series = [
  {
    name: 'Startups',
    data: countries.map(item => item.count)
  }
];
</script>

<style lang="scss" scoped>

</style>
