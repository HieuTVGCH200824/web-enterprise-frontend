<script lang="ts">
    export let label:string;
    export let type :string;
    export let value:any;
    export let id:string;
    export let placeholder:string;
    export let name:string;
    export let required:boolean = true;
    
    function handleType(node:any) {
		node.type = type;
	}
</script>

{#if label}
    <label for={id}>{label}</label>
{/if}
    <input required={required} use:handleType id={id} name={name} bind:value={value} class="p-3 w-full text-white outline-none focus:outline-violet-500 focus:outline-3 bg-gray-500 placeholder:text-white h-8 rounded shadow-md shadow-left-10 shadow-slate-900 border-b-2 focus:border-0 border-purple-600" placeholder={placeholder}/>