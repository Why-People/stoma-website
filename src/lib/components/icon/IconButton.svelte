<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";
  import Icon from "./Icon.svelte";

  export let icon: SvelteComponent;
</script>

<button on:click>
  <Icon icon={icon}></Icon>
</button>

<style>
  button {
    padding: 0.25rem;
  }

  button:hover {
    background-color: #d8d7d76b;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
</style>