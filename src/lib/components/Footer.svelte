<script lang="ts">
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import IconButton from './icon/IconButton.svelte';
</script>

<footer class="flex flex-row items-center justify-center px-2 bottom-0">
  <div class="layout-container">
    <div class="flex flex-row w-max items-center justify-center">
      <p>© 2022 Matthew Hayes</p>
      <a href="https://github.com/Why-People/stoma-website" class="ml-2">
        <IconButton on:click={() => console.log('Github url')} icon={FaGithub} />
      </a>
    </div>
  </div>
</footer>
