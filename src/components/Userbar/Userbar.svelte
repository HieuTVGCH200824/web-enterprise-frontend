<script lang="ts">
	import Usergroupbutton from "../Button/Usergroupbutton.svelte";
    import { createEventDispatcher } from "svelte";
    let barState :boolean=false;
    export let user : any ;
    const dispatch = createEventDispatcher();
    function handleEvent() {
        dispatch("event");
    }
</script>

<div class="{barState?"w-96 h-full md:rounded-tr-xl border-l-2 border-white/10 z-50 max-md:w-full max-md:absolute":"border-t-2 border-l-2 border-white/20 z-0 rounded-tl-lg w-16 h-16 max-md:h-10 max-md:w-10 flex justify-center items-center absolute bottom-0 max-md:top-0 sm:bottom-6 right-0"} duration-700 ease-in-out bg-card-indigo">
    <div class="{barState?"border-b-2 py-3 border-white/10 w-full flex justify-center items-center":""}">
        <Usergroupbutton on:event={()=>{
            barState=!barState
            handleEvent()}
            }/>
    </div>
    {#if barState}
    <div class="flex items-center justify-center">
        <div class="flex flex-col items-center space-y-5 pt-10">
            <img src={user.image} class="w-20 h-20 rounded-full"/>
            <h1 class="text-white text-2xl">{user.first_name} {user.last_name}</h1>
            <h2 class="text-gray-400">{user.username}</h2>
        </div>
    </div>
    {/if}
</div>