<script lang="ts">
  export let href: string = "#";
</script>

<a class={`text-lg no-underline hover:text-primary`} href={href}>
  <slot />
</a>