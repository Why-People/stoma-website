<script lang="ts">
  import Navbar from "$lib/components/nav/Navbar.svelte";
  import '../app.css';
</script>

<Navbar />
<main class="layout-navigation">
  <div class="content">
    <slot />
  </div>
</main>

<style>
  .content {
    padding-top: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
