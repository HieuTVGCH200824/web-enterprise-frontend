<script lang="ts">
	import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import Userbar from "../../components/Userbar/Userbar.svelte";
    import Searchbar from "../../components/SearchBar/Searchbar.svelte";
    let userBar : boolean =false;
</script>
<div class="from-violet-200 to-violet-800 bg-gradient-to-tr h-full w-full fixed flex items-center justify-center">
    <div class="w-[97%] h-full md:mt-12 max-md:w-full sm:rounded-xl flex bg-card-indigo bg-opacity-50 relative">
        <Sidebar />
        <div class="w-full p-0 h-full flex flex-col">
            <Searchbar state={userBar}/>
            <div class="overflow-y-scroll bg-background-indigo h-full text-white pt-10 max-md:mb-16">
                <slot/>
            </div>
        </div>
        <Userbar on:event={()=>{userBar=!userBar}}/>
    </div>
</div>