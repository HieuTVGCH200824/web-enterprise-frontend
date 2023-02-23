<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleEvent() {
        dispatch("event");
    }
</script>
<button type="submit" on:click={handleEvent} class="bg-red-400 rounded p-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-width="2px" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
</button>