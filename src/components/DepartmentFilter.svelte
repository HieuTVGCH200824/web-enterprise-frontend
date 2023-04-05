<script lang="ts">
    import { createEventDispatcher } from "svelte";
    let toggleSort = false;
    export let departments :any;
    let selectedSort : Object = {_id:null, name:"Department"};

    const dispatch = createEventDispatcher();
    function handleEvent(obj){
        selectedSort = obj;
        toggleSort = false;
        dispatch("event", {selectedSort});
    }

</script>


<div class="flex items-center justify-end relative whitespace-nowrap">
    <button class="flex items-center" on:click={()=>{toggleSort=!toggleSort}}>
        <span>{selectedSort?.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" text-violet-400 w-5 h-5 pt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    </button>
    <div class="absolute ease-in-out duration-700 top-8 {toggleSort?"block":"hidden"}">
        <div class="flex flex-col justify-center items-center bg-gray-500 p-2 rounded">
            <button class="{selectedSort?.name=="Department"?"text-violet-400":"text-gray-200"}" on:click={()=>{handleEvent({_id:null,name:"Department"})}}>All</button>
            {#each departments as dep}
            <button class="{selectedSort == dep?"text-violet-400":"text-gray-200"}" on:click={()=>{handleEvent(dep)}}>{dep.name}</button>
            {/each}
        </div>
    </div>
</div>