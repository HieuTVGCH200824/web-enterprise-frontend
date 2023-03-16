<script lang="ts">
    export let type:string;
    export let accept: string;
    export let name:string;
</script>

<input
    name={name}
    type={type}
    accept={accept}
    class="mt-2 outline-none focus:outline-none block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
/>