<script lang="ts">
    import IdeaPost from "../../components/IdeaPost.svelte";
    import Search from "../../components/SearchBar/Search.svelte";
    import Pagination from "../../components/Pagination.svelte";
	import SortFilter from "../../components/SortFilter.svelte";
	import DepartmentFilter from "../../components/DepartmentFilter.svelte";
	import CategoryFilter from "../../components/CategoryFilter.svelte";

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

let categoryFilter : any= {_id:null, name: "Category"};
let departmentFilter : any={_id:null, name: "Department"};

function handleCategoryFilter(value){
    categoryFilter = value.detail.selectedSort;
}

function handleDepartmentFilter(value){
    departmentFilter = value.detail.selectedSort;
}

$: if (categoryFilter._id !== null || departmentFilter._id !== null) {
    ideas = data.body.ideas.filter((obj) => {
        return((categoryFilter._id == null ?  obj:obj.category_id == categoryFilter._id)
        && (departmentFilter._id == null ? obj :  obj.department_id == departmentFilter._id ))
    });
}else{
    ideas = data.body.ideas;
}





</script>
<div class="h-full w-full text-white"><div class="mx-10 space-y-10">
    {#if data.body.ideas}
    <div class="w-full pb-12 flex items-center justify-center">
        <div class="w-3/5">
            <Search bind:value={search}></Search>
        </div>
    </div>
    <div class="flex flex-row justify-end space-x-14 pr-10">
        <DepartmentFilter on:event={handleDepartmentFilter}  departments={data.body.departments}></DepartmentFilter>
        <CategoryFilter on:event={handleCategoryFilter} categories={data.body.categories}></CategoryFilter>
        <SortFilter></SortFilter>
    </div>
    <div class="space-y-10 pb-12">
        {#if ideas.length >0}
            {#each paginatedIdeas as idea}
                <IdeaPost departments={data.body.departments} categories={data.body.categories} files={data.body.documents} allUser={data.body.allUser} votes={data.body.votes} user={data.body.user} getComment={getComment} idea={idea} comments={data.body.comments}></IdeaPost>
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