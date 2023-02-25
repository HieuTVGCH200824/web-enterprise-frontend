<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleEvent() {
        dispatch("event");
        console.log("event")
    }
</script>
<button on:click={handleEvent} class="hover:bg-indigo-700 duration-500 hover:scale-105 bg-card-indigo rounded w-24 h-9">
    <slot/>    
</button>