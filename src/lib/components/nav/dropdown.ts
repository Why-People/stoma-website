import { writable } from 'svelte/store';

// Needed to apply pos-fixed on root element when nav dropdown is open to prevent scrolling
const { subscribe, set, update } = writable(false);

const toggleDropDown = () => update((isDropDownOpen) => !isDropDownOpen);
const openDropDown = () => set(true);
const closeDropDown = () => set(false);

export const isNavDropDownOpen = {
	subscribe: subscribe,
	toggleDropDown: toggleDropDown,
	openDropDown: openDropDown,
	closeDropDown: closeDropDown
};
