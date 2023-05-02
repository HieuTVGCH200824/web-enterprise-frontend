<script lang="ts">
    import CreateButton from "../../../components/Button/CreateButton.svelte";
    import TagButton from "../../../components/Button/TagButton.svelte";
	import Input from "../../../components/Input.svelte";
    import Modal from '../../../components/Modal.svelte'
    import { enhance } from '$app/forms';
    import Search from "../../../components/SearchBar/Search.svelte";
    import DeleteButton from "../../../components/Button/DeleteButton.svelte";
    import EditButton from "../../../components/Button/EditButton.svelte";
	import SubmitButton from "../../../components/Button/SubmitButton.svelte";
    import Pagination from "../../../components/Pagination.svelte";
    import { navigating } from '$app/stores'
    import Loader from '../../../components/Loader.svelte';

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
$: if(form?.error){
        alert(form.error)
        form = null;
    }

let departments  = data.departments;
let paginatedDepartments = departments

$: if(search){
    departments = data.departments.filter((department:any) => department.name.toLowerCase().includes(search.toLowerCase()));
}else{
    departments = data.departments;
}



</script>

{#if $navigating}
<Loader></Loader>
{/if}{#if showModal}
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
    {#if departments.length > 0}
    <div class="flow-root">
        <div class="-my-2 mx-6lg:-mx-24">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class=" divide-y divide-gray-300">
                <thead>
                <tr>
                    <th scope="col" class="py-3.5 pl-6 pr-3 text-left text-lg font-bold text-white sm:pl-0">Name</th>

                    <th scope="col" class="py-3.5 px-3 text-center text-base font-semibold text-white">Action</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-6 sm:pr-0"></th>
                </tr>
                </thead>
              <tbody class="divide-y divide-gray-200">
                {#each paginatedDepartments as department}
                <tr>
                  <td class="whitespace-nowrap py-4 pl-6 pr-3 text-base font-medium text-white sm:pl-0">{department.name}</td>

                  <td class="whitespace-nowrap py-4 flex flex-row pl-3 pr-6 text-right text-base font-medium sm:pr-0 space-x-2">
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
                  </td>
                </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
    </div>
    <Pagination bind:data={departments} bind:paginatedData={paginatedDepartments}></Pagination>

    {:else}
    <div class="flex flex-col items-center justify-center space-y-5">
        <h1 class="text-3xl font-semibold font-mono">No departments found</h1>
    </div>
    {/if}
</div>
