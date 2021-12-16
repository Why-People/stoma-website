<script lang="ts">
  import type { SvelteComponent } from 'svelte/internal';
  import Icon from './Icon.svelte';

  export let icon: SvelteComponent;
</script>

<button class="p-1 hover:bg-hover transition ease-linear duration-300 rounded" on:click>
  <Icon {icon} />
</button>
