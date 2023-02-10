<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    const dispatch=createEventDispatcher();
    function handleEvent(){
        dispatch('event');
    }
</script>
<button on:click={handleEvent} class="bg-violet-700 rounded-3xl w-32 h-8 text-white">
    <slot />
</button>