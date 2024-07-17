<template>
  <div>
    <div v-if="showTotal" class="d-flex mb-2">
      <p id="totalStartups" class="text-muted h6">
        {{ totalStartups }}
      </p>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-12 col-md-6 col-lg-4 mb-3"
      >
        <startup-bio :startup="item" @handle-click="handleStartupClick" />
      </div>
    </div>
    <newsletter-modal v-if="showNewsletter" @close="showNewsletter = false" />
  </div>
</template>

<script lang="ts" setup>
// models
import { type IStartup } from '@/models';

// props
const props = withDefaults(defineProps<{
  list: IStartup[];
  total: number;
  showTotal?: boolean;
}>(), {
  showTotal: true
});

// refs
const showNewsletter = ref<boolean>(false);

// computed
const totalStartups = computed(() => {
  return `${props.total} startup${props.total > 1 ? 's' : ''}`;
});

// methods
function handleStartupClick (link: string): void {
  // check if internal link
  if (!link.startsWith('http')) {
    return;
  }

  // check if newsletter has been shown
  const newsletterStore = sessionStorage.getItem('newsletter') || 'false';
  if (!newsletterStore || newsletterStore === 'false') {
    showNewsletter.value = true;
    sessionStorage.setItem('newsletter', 'true');
    window.open(link, '_blank');
  }
}
</script>
