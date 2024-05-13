<template>
  <div class="chart">
    <client-only>
      <VueApexCharts
        type="pie"
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
  categories as allCategories
} from '~/assets/data';

// models
import { type ICategory } from '@/models';

// constants
const categories: ICategory[] = allCategories.filter(
  item => item.count > 0
);

// computed
const chartOptions = {
  chart: {
    id: 'categories-chart'
  },
  dataLabels: {
    enabled: true
  },
  labels: categories.map(item => item.name),
  subtitle: {
    text: 'Chart showing the number of startups by category.'
  },
  title: {
    text: 'Startup categories'
  }
};
const series = categories.map(item => item.count);
</script>

<style lang="scss" scoped>

</style>
