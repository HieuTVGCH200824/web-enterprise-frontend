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
    <input use:handleType id={id} bind:value={value} class="p-3 text-white outline-none focus:outline-violet-500 focus:outline-3 bg-gray-400 placeholder:text-white h-8 rounded shadow-md shadow-left-10 shadow-slate-900 border-b-2 focus:border-0 border-purple-600" placeholder={placeholder}/>