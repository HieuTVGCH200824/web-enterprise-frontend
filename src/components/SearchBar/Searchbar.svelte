<script lang="ts">
    import Search from "../SearchBar/Search.svelte"
export let state : boolean = false;
</script>
<div class="py-6 sticky sm:pl-11 w-full h-6 bg-card-indigo flex items-center justify-center group {state?"":"sm:rounded-tr-xl"} border-b-2 border-white/10 ">
</div>
