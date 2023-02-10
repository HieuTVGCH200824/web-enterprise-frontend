<script lang="ts">
    export let label:string;
    export let type :string;
    export let value:any;
    export let id:string;
    export let placeholder:string;
    
    function handleType(node:any) {
		node.type = type;
	}
</script>

{#if label}
    <label for={id}>{label}</label>
{/if}
    <input use:handleType id={id} bind:value={value} class="bg-gray-400 placeholder:text-white placeholder:p-3 h-8 rounded shadow-md shadow-left-10 shadow-slate-900 border-b-2 border-purple-600" placeholder={placeholder}/>