<script lang="ts">
	import { goto } from '$app/navigation';
  import { isNavDropDownOpen } from '$lib/components/nav/dropdown';
  import type { SvelteComponent } from 'svelte/internal';
	import NavLink from './NavLink.svelte';
  import Icon from '../icon/Icon.svelte';

	export let href: string;
	export let title: string;
	export let icon: SvelteComponent;

	const navigate = () => {
		isNavDropDownOpen.closeDropDown();
		goto(href);
	};
</script>

<div
	on:click={navigate}
  class="flex flex-row justify-between items-center px-4 py-2 text-sm leading-5 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
>
	<NavLink {href}>{title}</NavLink>
  <Icon icon={icon} />
</div>