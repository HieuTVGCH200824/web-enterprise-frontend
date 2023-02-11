<script>
	import Sidebar from "../components/Sidebar/Sidebar.svelte";

</script>
<div class="from-violet-200 to-violet-800 bg-gradient-to-tr h-full w-full fixed flex items-center justify-center">
    <div class="w-[95%] h-[95%] max-sm:w-full max-sm:h-full rounded-xl bg-opacity-20 bg-black flex">
        <Sidebar />
        <div class="max-sm:w-full max-sm:fixed z-10 w-1/2 bg-black h-full"></div>
        <div class="max-sm:w-full max-sm:fixed z-0"></div>
    </div>
</div>