<script lang="ts">
    import CreateButton from "../../../components/Button/CreateButton.svelte";
    import TagButton from "../../../components/Button/TagButton.svelte";
	import Input from "../../../components/Input.svelte";
    import Modal from '../../../components/Modal.svelte'
    import LoginButton from '../../../components/Button/LoginButton.svelte'
    import { enhance } from '$app/forms';
    import Search from "../../../components/SearchBar/Search.svelte";

/** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;

let showModal :boolean = false;
let modalType : string= "";

let search : string= "";

$: if(!showModal){
  modalType = "";
}

$: if(form?.success){
  showModal =false;
  form=null;
}

let categories  = data.categories;

$: if(search){
    categories = data.categories.filter((category:any) => category.name.toLowerCase().includes(search.toLowerCase()));
}else{
    categories = data.categories;
}



</script>


{#if !data.categories}
  <h1>There are no categories</h1>
{:else if modalType}
<Modal bind:showModal>
    <div class="flex justify-center flex-col items-center space-y-5 px-3 pb-5 w-96">
        <h1 class="text-2xl font-semibold">
            {modalType=="edit"?"Edit Category":"Create Category"}
        </h1>
        <form method="POST" use:enhance class="flex flex-col items-center justify-center space-y-4 w-full"> 
            <Input label="" type="text" value="{modalType=="edit"?`${form?.category.data.name}`:""}" id="category" name="name" placeholder=""></Input>
            {#if modalType=="edit"}
            <input type="hidden" name="id" value={form?.category.data._id}>
            {/if}
            <div class="flex flex-row space-x-8 justify-center items-center">
                <div class="w-32">
                    <LoginButton formaction={modalType=="edit"?"?/editCategory":"?/createCategory"}>
                        {modalType=="edit"?"Edit":"Create"}
                    </LoginButton>
                </div>
                {#if modalType=="edit"}
                <div class="w-32">

                <LoginButton formaction="?/deleteCategory">
                    {modalType=="edit"?"Delete":""}
                </LoginButton>
                </div>
                {/if}
            </div>
        </form>
    </div>
</Modal>
{/if}

<div class="flex flex-col justify-center w-full items-center space-y-10">
    <div class="w-[40%] h-10">
        <Search bind:value={search}></Search>
    </div>
        <CreateButton on:event={()=>{showModal=true;modalType="create"}}>Create</CreateButton>
    <div class="grid grid-cols-4 gap-x-5 sm:gap-x-20 gap-y-5">
        {#each categories as category}
        <form action="?/getCategory" method="POST" use:enhance>
        <TagButton on:event={()=>{showModal=true;modalType="edit"}}>
            <p>{category.name}</p>
        </TagButton>
                <input type="hidden" name="id" value="{category._id}">
              </form>
        {/each}
    </div>
</div>