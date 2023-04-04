<script lang="ts">
    import IdeaPost from "../../components/IdeaPost.svelte";
    import Search from "../../components/SearchBar/Search.svelte";
    import Pagination from "../../components/Pagination.svelte";

/** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;


let search = "";

$: if(form?.success){
    alert("Action performed successfully");
}

$: if(form?.error){
    alert("Action failed");
}

let getComment :any = null;

$: if(form?.getComment){
    getComment = form.getComment;
}

let ideas : any = [];

let paginatedIdeas = ideas;

$: if (search) {
    ideas = data.body.ideas.filter((obj) => {
        return (
        obj.title.toLowerCase().includes(search.toLowerCase())
        );
    });
    }else{
        ideas = data.body.ideas;
    }

let toggleSort = false;

let selectedSort = "Sort"

</script>
<div class="h-full w-full text-white"><div class="mx-10">
    {#if data.body.ideas}
    <div class="w-full pb-12 flex items-center justify-center">
        <div class="w-3/5">
            <Search bind:value={search}></Search>
        </div>
    </div>
    <div class="space-y-10 pb-12">
        {#if ideas.length >0}

            <div class="flex items-center justify-end relative pr-10">
                <button class="flex items-center" on:click={()=>{toggleSort=!toggleSort}}>
                    <span>{selectedSort}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" text-violet-400 w-5 h-5 pt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <div class="absolute ease-in-out duration-700 top-8 {toggleSort?"block":"hidden"}">
                    <div class="flex flex-col justify-center items-center bg-gray-500 p-2 rounded">
                        <a href="?sort=" class="{selectedSort === "Sort"?"text-violet-400":"text-gray-200"}" on:click={()=>{selectedSort = "";toggleSort=false}}>Sort</a>
                        <a href="?sort=most-viewed-ideas" class="{selectedSort === "Most views"?"text-violet-400":"text-gray-200"}" on:click={()=>{selectedSort = "Most views";toggleSort=false}}>Most views</a>
                        <a href="?sort=most-upvote-ideas" class="{selectedSort === "Up votes"?"text-violet-400":"text-gray-200"}" on:click={()=>{selectedSort = "Up votes";toggleSort=false}}>Up votes</a>
                    </div>
                </div>
            </div>
            {#each paginatedIdeas as idea}
                <IdeaPost files={data.body.documents} allUser={data.body.allUser} votes={data.body.votes} user={data.body.user} getComment={getComment} idea={idea} comments={data.body.comments}></IdeaPost>
            {/each}
            <Pagination bind:data={ideas} bind:paginatedData={paginatedIdeas}></Pagination>
        {:else}
            <div class="flex items-center justify-center">
                <h1 class="text-2xl font-semibold">No Ideas Found</h1>
            </div>
        {/if}
    </div>
    {/if}
</div></div>