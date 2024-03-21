<template>
  <div class="d-flex align-items-center">
    <a
      class="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=%22How Startups Can Succeed%22%20by%20@slightlynerd"
    >
      Tweet
    </a>
    <iframe
      :src="`https://www.facebook.com/plugins/share_button.php?href=${pageUrl}&layout=button&size=small&mobile_iframe=true&appId=821862128151423&width=59&height=20`"
      class="ms-2"
      width="60"
      height="20"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
    <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=How Startups Can Succeed&summary=startupgraveyard.africa&source=Startup Graveyard`" class="ms-2" onclick="window.open(this.href, 'mywin', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;">
      <img src="@/assets/images/linkedin-share.webp" alt="linkedIn share button" width="60">
    </a>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

// models
import type { IBlog } from '@/models';

defineProps<{
  blogData?: IBlog;
}>();

// common
const route = useRoute();

// refs
const pageUrl = ref<string>('');

// lifecycle hooks
onMounted(() => {
  pageUrl.value = `https://startupgraveyard.africa/blog/${route.params.id}`;
});

useHead({
  // title: blogData?.title,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  script: [{ src: 'https://platform.twitter.com/widgets.js' }]
});
</script>

<style scoped>

</style>
