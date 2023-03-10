<script lang="ts">
    import CreateButton from "../../../components/Button/CreateButton.svelte";
    import TagButton from "../../../components/Button/TagButton.svelte";
	import Input from "../../../components/Input.svelte";
    import Modal from '../../../components/Modal.svelte'
    import { enhance } from '$app/forms';
    import Search from "../../../components/SearchBar/Search.svelte";
    import DeleteButton from "../../../components/Button/DeleteButton.svelte";
    import EditButton from "../../../components/Button/EditButton.svelte";
    import CrudCard from "../../../components/CrudCard.svelte";
	import SubmitButton from "../../../components/Button/SubmitButton.svelte";

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

let departments  = data.departments;

$: if(search){
    departments = data.departments.filter((department:any) => department.name.toLowerCase().includes(search.toLowerCase()));
}else{
    departments = data.departments;
}



</script>

{#if showModal}
<Modal bind:showModal>
    <div class=" bg-[#393D5D] h-fit flex items-center flex-col pt-5 pb-10 w-full">
    <div>
        <h1 class="text-3xl font-semibold font-mono">{modalType=="edit"?"Edit department":"Create department"}</h1>
    </div>
    <div class=" flex flex-col items-center justify-center w-[60%] ">
        <form action="{modalType=="edit"?`?/editDepartment`:`?/createDepartment`}" use:enhance method="POST" class="w-full space-y-5">
            {#if modalType=="edit"}
            <input type="hidden" value={form?.department._id} id="id" name="id"/>
            {/if}
            <Input label="" type="text" value="{modalType=="edit"?`${form?.department.name}`:""}" id="name" name="name" placeholder="name"></Input>
            <div class="w-full px-2 flex justify-center">
                <SubmitButton>Submit</SubmitButton>
            </div>
        </form>
    </div>
</div>
</Modal>
{/if}

<div class="bg-card-indigo flex items-center justify-center flex-col space-y-10 w-full h-fit py-10">
    <div class="w-[40%]">
        <Search bind:value={search}></Search>
    </div>
    <CreateButton on:event={()=>{showModal=true}}>Create department</CreateButton>
    <div class="md:w-[60%] w-full">
        <div class="w-full grid grid-cols-2 auto-rows-max gap-x-14 gap-y-10 justify-center">
            {#each departments as department}
            <div class="col-span-1 row-span-1 flex items-center justify-center flex-col">
                    <CrudCard title={department.name}></CrudCard>
                    <div class="self-start pl-5 pt-4 flex flex-row space-x-3">
                        <form action="?/getDepartment" method="POST" use:enhance>
                            <input type="hidden" name="id" value ="{department._id}">
                            <EditButton on:event={()=>{showModal=true;modalType="edit"}}></EditButton>
                        </form>
                        <form action="?/deleteDepartment" method="POST" use:enhance>
                            <input type="hidden" name="id" value ="{department._id}">
                            <DeleteButton></DeleteButton>
                        </form>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>