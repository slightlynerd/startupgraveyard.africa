<template>
  <div>
    <div class="startup-card">
      <a target="_blank" :href="startup.newsSource">
        <h2 class="h4">{{ startup.name }}</h2>
      </a>
      <p class="text-muted mb-1">{{ startup.location }}</p>
      <div class="row align-items-center justify-content-between">
        <div class="col">
          <p class="text-muted small">❌ {{ startup.shutdownDate }}</p>
        </div>
        <div class="col">
          <p class="text-muted text-end small">
            raised: <span class="text-success">{{ startup.raised }}</span>
          </p>
        </div>
      </div>
      <p class="mt-2">
        Founded in {{ startup.founded }}.
        {{ truncatedDescription }}
        <span v-if="showReadMoreLink">
          <a class="read-more-link" :href="startup.newsSource" target="_blank"
            >Read more</a
          >
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// models
import { IStartup } from '@/models';

export default defineComponent({
  name: 'StartupBio',
  props: {
    startup: {
      type: Object as () => IStartup,
      required: true
    }
  },
  data() {
    return {
      showReadMoreLink: false,
      truncatedDescription: '',
    };
  },
  watch: {
    'startup.description': 'truncateDescription',
  },
  mounted() {
    this.truncateDescription();
  },
  methods: {
    truncateDescription() {
      const maxLength = 80;
      this.showReadMoreLink = this.startup.description.length > maxLength;
      this.truncatedDescription = this.startup.description.slice(0, maxLength);
    },
  },
});
</script>

<style lang="scss" scoped>
.startup-card {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  height: 300px;
}
.h4 {
  display: inline-block;
  border-bottom: 1px solid;
}

.read-more-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.read-more-link:hover {
  text-decoration: none;
}
</style>
