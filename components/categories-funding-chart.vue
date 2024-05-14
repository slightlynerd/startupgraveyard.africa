<template>
  <div class="chart">
    <client-only>
      <VueApexCharts
        type="pie"
        height="300"
        :options="chartOptions"
        :series="fundingByCategory"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';

// data
import {
  categories as allCategories,
  startups as allStartups
} from '~/assets/data';

// models
import { type ICategory, type IStartup } from '@/models';

// utils
import { formatAmountToCurrency } from '@/utils';

// constants
const categories: ICategory[] = allCategories.filter(
  item => item.count > 0
);
const startups: IStartup[] = allStartups.filter(
  item => item.raised && item.raised > 0
);

// computed
const fundingByCategory: number[] = categories.map((category) => {
  const startupsInCategory = startups.filter(
    startup => startup.category === category.name
  );
  return startupsInCategory.reduce((acc, startup) => acc + (startup?.raised || 0), 0);
});
const chartOptions = {
  chart: {
    id: 'countries-funding-chart'
  },
  dataLabels: {
    enabled: true
  },
  labels: categories.map(item => item.name),
  subtitle: {
    text: 'Chart showing funds raised by category.'
  },
  title: {
    text: 'Funding by categories'
  },
  tooltip: {
    y: {
      formatter: (value: number) => formatAmountToCurrency(value)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
