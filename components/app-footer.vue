<template>
  <footer class="container col-md-8 my-5">
    <h2 class="h5 fw-bold footer-text text-uppercase mx-auto pt-5">
      💀 Startup Graveyard
    </h2>
    <p class="footer-text small mx-auto my-3">
      <strong>Disclaimer: </strong>
      <span>
        While this site offers valuable insights, remember it's not a definitive
        truth machine. Companies are intricate entities shaped by a web of
        long-term influences, making simple pronouncements risky.
      </span>
    </p>
    <substack-iframe />
    <social-icons :facebook="FACEBOOK_URL" :x="X_URL" :linkedin="LINKEDIN_URL" />
    <div class="pt-4">
      <p class="text-center small">
        &copy; {{ new Date().getFullYear() }} Startup Graveyard
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FACEBOOK_URL, X_URL, LINKEDIN_URL } from '@/models';
</script>
