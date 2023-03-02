<script lang="ts">
    export let label:string;
    export let value:any;
    export let id:string;
    export let placeholder:string;
    export let name:string;
    

</script>

{#if label}
    <label for={id}>{label}</label>
{/if}
    <textarea required id={id} name={name} bind:value={value} class="w-full h-60 rounded-2xl bg-transparent border-2 border-[#5B5F81] pl-5 pt-2 capitalize" placeholder={placeholder}/>