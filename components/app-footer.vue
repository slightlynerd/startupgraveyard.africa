<template>
  <footer class="container my-5">
    <h2 class="h6 footer-text mx-auto pt-5">
      💀 startupgraveyard.africa
    </h2>
    <p class="footer-text small mx-auto my-3">
      <strong>Disclaimer: </strong>
      <span>
        While this site offers valuable insights, remember it's not a definitive
        truth machine. Companies are intricate entities shaped by a web of
        long-term influences, making simple pronouncements risky.
      </span>
    </p>
    <iframe
      src="https://startupgraveyardafrica.substack.com/embed"
      width="480"
      height="320"
      frameborder="0"
      scrolling="no"
    />
    <social-icons />
    <div class="pt-4">
      <p class="text-center small">
        &copy; 2023. Contributions are welcome on
        <a
          href="https://github.com/slightlynerd/startupgraveyard.africa"
          target="_blank"
          class="text-decoration-underline"
        >
          GitHub.
        </a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  max-width: 75%;
}

@media screen and (max-width: 768px) {
  footer {
    max-width: 100%;
  }
}
</style>
