<script lang="ts">
    import LogoutButton from "../Button/LogoutButton.svelte";
import SidebarButton from "../Button/SidebarButton.svelte";
    let state: boolean = false;


import Nav from "./Nav.svelte";
</script>
<div class="{state?"sm:w-60 max-sm:w-full absolute max-sm:bg-opacity-100 z-50":"min-w-[5rem] w-20 z-0 fixed max-sm:w-full"} max-sm:bottom-0 max-sm:h-16 max-sm:bg-card-indigo text-white font-sans h-screen sm:sticky ease-in-out duration-700 bg-card-indigo bg-opacity-50 sm:rounded-tl-xl">
    <div class="{state?"space-x-8":""} max-sm:hidden border-b-2 border-white/10 py-3 flex items-center justify-center sm:rounded-tl-xl">
        <p class="{state?"block":"hidden"} font-bold">Explore</p>
        <SidebarButton bind:barState={state}></SidebarButton>
    </div>
    <div class="{state?"sm:pl-5":""} flex flex-col max-sm:flex-row max-sm:items-center sm:py-2 sm:space-y-3 w-full h-full">
        <Nav path={""} bind:barState={state} content="Home"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </Nav>
        <Nav path={""} bind:barState={state} content="Create Idea">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
        </Nav>
        <Nav path={""} bind:barState={state} content="Submitted Ideas">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>              
        </Nav>
        <LogoutButton bind:barState={state}></LogoutButton>
    </div>
</div>