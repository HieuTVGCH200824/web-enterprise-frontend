<script lang="ts">
	import Sidebar from "../../components/Sidebar/Sidebar.svelte";
    import Userbar from "../../components/Userbar/Userbar.svelte";
    import Searchbar from "../../components/SearchBar/Searchbar.svelte";
    let userBar : boolean =true;

    /** @type {import('./$types').PageData} */
export let data:any;

</script>

<svelte:head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3F18XVREL6"></script>
<script>
 try {
        if(typeof window !== 'undefined' 
        && window) {
            const googleAnalyticsId = 'G-3F18XVREL6'
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', googleAnalyticsId);
        }
    } catch(error) {
		console.error("Failed to initialize Analytics")
	}
</script>
</svelte:head>
<div class="from-violet-200 to-violet-800 bg-gradient-to-tr h-full w-full fixed flex items-center justify-center">
    <div class="w-[97%] h-full md:mt-12 max-md:w-full sm:rounded-xl flex bg-card-indigo bg-opacity-50 relative">
        <Sidebar />
        <div class="w-full p-0 h-full flex flex-col">
            <Searchbar bind:state={userBar}/>
            <div class="overflow-y-scroll bg-background-indigo h-full text-white pt-10 max-md:mb-16">
                <slot/>
            </div>
        </div>
        <Userbar user={data} on:event={()=>{userBar=!userBar}}/>
    </div>
</div>