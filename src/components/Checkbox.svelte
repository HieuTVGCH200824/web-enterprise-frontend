<script lang="ts">
    export let label:string;
    export let value:any;
    export let id:string;
    export let name: string;
</script>

{#if label}
    <label for={id}>{label}</label>
{/if}
    <input class="h-4 w-4" name={name} type="checkbox" id={id} bind:value={value} />