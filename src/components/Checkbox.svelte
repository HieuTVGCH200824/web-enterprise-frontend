<script lang="ts">
    export let label:string;
    export let value:any;
    export let id:string;
</script>

{#if label}
    <label for={id}>{label}</label>
{/if}
    <input class="h-4 w-4" type="checkbox" id={id} bind:value={value} />