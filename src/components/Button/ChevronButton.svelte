<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    const dispatch=createEventDispatcher();
    function handleEvent(){
        dispatch('event');
    }
</script>
<button on:click={handleEvent} type="submit" class="group ease-in-out duration-500 bg-violet-400/50 hover:bg-violet-500 rounded-xl space-x-5 w-full h-8 text-white flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ease-in-out duration-700 group-hover:rotate-[360deg] w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg> 
    <div>
        <slot />
    </div>     
</button>