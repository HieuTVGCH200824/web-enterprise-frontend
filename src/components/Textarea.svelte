<script lang="ts">
    export let label:string;
    export let value:any;
    export let id:string;
    export let placeholder:string;
    export let name:string;
    export let className:string;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();


</script>

{#if label}
    <label for={id}>{label}</label>
{/if}
    <textarea required id={id} name={name} bind:value={value} class="{className} w-full h-full rounded-2xl bg-transparent border-2 border-[#5B5F81] pl-5 py-2 " placeholder={placeholder}/>