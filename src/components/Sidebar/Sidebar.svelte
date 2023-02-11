<script lang="ts">
    import SidebarButton from "../Button/SidebarButton.svelte";
    let state: boolean = true;
import Nav from "./Nav.svelte";
</script>
<div class="text-white font-sans h-screen w-20 fixed z-20 hover:w-48 ease-out group duration-700  md:rounded-tl-xl">
    <div class="border-b-2 border-white/10 h-11 flex items-center justify-center md:group-hover:space-x-8 bg-card-indigo md:rounded-tl-xl bg-opacity-25">
        <p class="font-bold hidden group-hover:block">Explore</p>
        <SidebarButton on:event={()=>{state=!state}}></SidebarButton>
    </div>
    <div class="pt-2 space-y-3 w-full bg-card-indigo bg-opacity-50 h-full">
        <Nav content="Home"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </Nav>
        <Nav content="Create Idea">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
        </Nav>
        <Nav content="Submitted Ideas">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>              
        </Nav>
    </div>
</div>