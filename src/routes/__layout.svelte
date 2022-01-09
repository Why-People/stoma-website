<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/nav/Navbar.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Stoma</title>
  <meta name="description" content="End Your Arguments and Find a Place to Eat" />
</svelte:head>

<Navbar />
<main class="flex flex-col justify-center items-center">
  <div class="layout-container">
    <div class="flex flex-col w-full pt-16 pb-16 content-padding">
      <slot />
    </div>
  </div>
</main>
<Footer />

<style>
  @media screen and (max-width: 1280px) {
    .content-padding {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
</style>
