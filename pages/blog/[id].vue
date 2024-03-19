<template>
  <article :style="{ marginBottom: `${blogContentHeight}px` }">
    <img src="/graveyard.jpeg" alt="graveyard" class="blog-image">
    <div ref="blogContent" class="blog-content">
      <h1 class="mb-3">
        How Startups Can Succeed
      </h1>
      <p class="small mb-0">
        Written By: <span class="text-muted">Kelvin Gobo</span>
      </p>
      <p class="small mb-3">
        <time datetime="2022-03-01">
          Published on: <span class="text-muted">March 1, 2022</span>
        </time>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius porro rem dolorem, minima temporibus placeat, neque facere, debitis itaque dolores delectus reprehenderit fuga. Pariatur voluptas quisquam magni reprehenderit ut?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est beatae ducimus porro assumenda cumque aperiam ratione deleniti vel earum, odio veniam dolorum sunt voluptate illo vitae nemo? Neque, ullam?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, incidunt dicta odit, quos, at neque facere libero voluptas eos tenetur reprehenderit sapiente impedit voluptatum excepturi quaerat eveniet natus itaque modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius porro rem dolorem, minima temporibus placeat, neque facere, debitis itaque dolores delectus reprehenderit fuga. Pariatur voluptas quisquam magni reprehenderit ut?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est beatae ducimus porro assumenda cumque aperiam ratione deleniti vel earum, odio veniam dolorum sunt voluptate illo vitae nemo? Neque, ullam?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, incidunt dicta odit, quos, at neque facere libero voluptas eos tenetur reprehenderit sapiente impedit voluptatum excepturi quaerat eveniet natus itaque modi.</p>

      <h6 class="mt-5">
        Share this article
      </h6>
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
    </div>
  </article>
</template>

<script setup lang="ts">
// refs
const pageUrl = ref<string>('');
const blogContent = ref<HTMLElement | null>(null);

// computed
const blogContentHeight = computed(() => blogContent.value?.offsetHeight);

// lifecycle hooks
onMounted(() => {
  pageUrl.value = `https://startupgraveyard.africa${window.location.pathname}`;
  const script = document.createElement('script');
  script.src = 'https://platform.twitter.com/widgets.js';
  document.head.appendChild(script);
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

article {
  position: relative;

  .blog-image {
    width: 100%;
    max-height: 24rem;
    object-fit: cover;
  }

  .blog-content {
    position: absolute;
    top: 20rem;
    max-width: 60%;
    background-color: $sg-secondary-color;
    padding: 3rem;
    margin-left: 2rem;

    @media screen and (max-width: 768px) {
      position: relative;
      top: 0;
      max-width: 100%;
      margin-left: 0;
    }

    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
