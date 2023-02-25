<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    export let formaction:string=""
    const dispatch=createEventDispatcher();
    function handleEvent(){
        dispatch('event');
    }
</script>
<button formaction={formaction} on:click={handleEvent} class="hover:bg-violet-900 hover:scale-105 ease-out duration-500 bg-violet-700 rounded-3xl w-32 h-8 text-white">
    <slot />
</button>