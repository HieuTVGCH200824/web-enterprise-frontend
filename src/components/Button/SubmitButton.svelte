<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    const dispatch=createEventDispatcher();
    function handleEvent(){
        dispatch('event');
    }
</script>
<button on:click={handleEvent} type="submit" class="hover:scale-105 ease-out duration-500 from-violet-500 to-violet-400 bg-gradient-to-r rounded-sm w-32 h-8 text-white">
    <slot />
</button>