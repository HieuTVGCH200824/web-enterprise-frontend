<script lang="ts">
    import SidebarButton from "../Button/SidebarButton.svelte";
    let state: boolean = true;
import Nav from "./Nav.svelte";
</script>
<div class="text-white font-sans w-1/4 max-sm:h-screen max-sm:w-screen max-sm:fixed z-20 max-sm:bg-violet-500 md:rounded-xl">
    <div class="border-b-2 border-white/10 w-[75%] h-11 flex items-center justify-between">
        <p class="font-bold m-5">Explore</p>
        <SidebarButton on:event={()=>{state=!state}}></SidebarButton>
    </div>
    <div class="mx-5 pt-2 space-y-3 w-full">
        <Nav content="Home"></Nav>
        <Nav content="Create Idea"></Nav>
        <Nav content="All Submitted Ideas"></Nav>
    </div>
</div>