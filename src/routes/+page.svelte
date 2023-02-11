<script>
	import Sidebar from "../components/Sidebar/Sidebar.svelte";
    import Userbar from "../components/Userbar/Userbar.svelte";
    import Searchbar from "../components/Searchbar.svelte";
</script>
<div class="from-violet-200 to-violet-800 bg-gradient-to-tr h-full w-full fixed flex items-center justify-center">
    <div class="w-[97%] h-full md:mt-12 max-sm:w-full max-sm:h-full md:rounded-xl flex bg-card-indigo bg-opacity-50 relative">
        <Sidebar />
        <div class="w-full h-full flex flex-col">
            <Searchbar></Searchbar>
            <div class=""></div>
        </div>
        <Userbar/>
    </div>
</div>