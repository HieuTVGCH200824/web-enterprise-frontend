<script lang="ts">
    import LogoutButton from "../Button/LogoutButton.svelte";
import SidebarButton from "../Button/SidebarButton.svelte";
    let state: boolean = false;


import Nav from "./Nav.svelte";
</script>
<div class="{state?"md:w-60 max-md:w-full absolute max-md:bg-opacity-100 z-50":"min-w-[5rem] w-20 z-0 fixed max-md:w-full"} max-md:bottom-0 max-md:h-20 max-md:bg-card-indigo text-white font-sans h-screen md:sticky ease-in-out duration-700 bg-card-indigo bg-opacity-50 md:rounded-tl-xl">
    <div class="{state?"space-x-8":""} max-md:hidden border-b-2 border-white/10 py-3 flex items-center justify-center sm:rounded-tl-xl">
        <p class="{state?"block":"hidden"} font-bold">Explore</p>
        <SidebarButton bind:barState={state}></SidebarButton>
    </div>
    <div class="{state?"sm:pl-5":""} flex flex-col max-md:flex-row max-md:items-center sm:py-2 sm:space-y-3 w-full h-full max-md:border-t-2 max-md:border-white/10">
        <Nav path={""} bind:barState={state} content="Home"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </Nav>
        <Nav path={"users"} bind:barState={state} content="Users ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              
        </Nav>
        <Nav path={"categories"} bind:barState={state} content="Categories">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
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