<script lang="ts">
  import Icon from "$lib/components/icon/Icon.svelte";
  import IconButton from "$lib/components/icon/IconButton.svelte";
  import { isNavDropDownOpen } from '$lib/components/nav/dropdown';
  import NavLink from "./NavLink.svelte";
  import NavDropDown from "./NavDropDown.svelte";
  import NavDropDownItem from "./NavDropDownItem.svelte";
  import IoIosPlayCircle from "svelte-icons/io/IoIosPlayCircle.svelte";
  import FaBars from "svelte-icons/fa/FaBars.svelte";
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaLock from "svelte-icons/fa/FaLock.svelte";
  import FaTimes from "svelte-icons/fa/FaTimes.svelte";
  import FaEnvelopeOpenText from 'svelte-icons/fa/FaEnvelopeOpenText.svelte'
  import { mediaQuery } from "$lib/media-query";

  $: isMobile = $mediaQuery?.isMobile as boolean;
  $: showDropDownContents = isMobile && $isNavDropDownOpen;
</script>

<nav class="fixed flex flex-row items-center justify-center pt-3 pb-3 pl-5 pr-5 overflow-y-hidden">
  <div class="layout-container">
    <div class="flex flex-col w-full">
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center justify-start gap-x-4">
          <Icon icon={IoIosPlayCircle} />
          <p class="text-xl mr-6">Stoma</p>
          {#if !isMobile}
            <NavLink href="/">Home</NavLink>
            <NavLink href="/privacy">Privacy Policy</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          {/if}
        </div>
        {#if isMobile}
          <div class="drop-down-icon">
            <IconButton 
              icon={!$isNavDropDownOpen ? FaBars : FaTimes}
              on:click={isNavDropDownOpen.toggleDropDown} 
            />
          </div>
        {/if}
      </div>
      <NavDropDown isOpen={showDropDownContents}>
        <NavDropDownItem href="/" title="Home" icon={FaHome} />
        <NavDropDownItem href="/privacy" title="Privacy Policy" icon={FaEnvelopeOpenText} />
        <NavDropDownItem href="/contact" title="Contact" icon={FaLock} />
      </NavDropDown>
    </div>
  </div>
</nav>

<style>
  nav {
    z-index: 1;
    width: 100%;
    background-color: white;
  }

  .drop-down-icon {
    transition: transform 0.25s ease-in-out;
  }

  .drop-down-icon:active {
    transform: rotate(90deg);
  }
</style>
