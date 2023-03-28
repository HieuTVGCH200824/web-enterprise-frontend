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

let ideas : any  = data.body.ideas;
let paginatedIdeas = ideas;

$: if (search) {
    ideas = data.body.ideas.filter((obj) => {
        return (
        obj.title.toLowerCase().includes(search.toLowerCase())
        );
    });
    }



</script>
<div class="h-full w-full text-white"><div class="mx-10">
    {#if data.body.ideas}
    <div class="w-full pb-12 flex items-center justify-center">
        <div class="w-3/5">
            <Search bind:value={search}></Search>
        </div>
    </div>
    <div class="space-y-10">
        {#if ideas}
        <Pagination bind:data={ideas} bind:paginatedData={paginatedIdeas}></Pagination>
            {#each paginatedIdeas as idea}
                <IdeaPost votes={data.body.votes} user={data.body.user} getComment={getComment} idea={idea} comments={data.body.comments}></IdeaPost>
            {/each}
        {:else}
            <div class="flex items-center justify-center">
                <h1 class="text-2xl font-semibold">No Ideas Found</h1>
            </div>
        {/if}
    </div>
    {/if}
</div></div>