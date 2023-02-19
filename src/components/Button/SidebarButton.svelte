<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch=createEventDispatcher();
    export let barState:boolean = false;
    function handleEvent(){
        barState=!barState;
    }
</script>
<button on:click={handleEvent} class="h-6 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="{barState?" rotate-0":" rotate-[-180deg]"} ease-in-out	rotate-0 duration-500 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>
</button>