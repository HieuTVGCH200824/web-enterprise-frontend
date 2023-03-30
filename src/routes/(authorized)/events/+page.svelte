<script lang="ts">
import Search from "../../../components/SearchBar/Search.svelte";
import CreateButton from "../../../components/Button/CreateButton.svelte";
import EditButton from "../../../components/Button/EditButton.svelte"
import DeleteButton from "../../../components/Button/DeleteButton.svelte"
import { enhance } from '$app/forms';
import Pagination from "../../../components/Pagination.svelte";
import Modal from '../../../components/Modal.svelte'
import Input from "../../../components/Input.svelte";
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
$: if(form?.error){
        alert(form.error)
    }

let events  = data.events;
let paginatedEvents = events

$: if(search){
    events = data.events.filter((event:any) => event.event_name.toLowerCase().includes(search.toLowerCase()));
}else{
    events = data.events;
}


$: if(events){
    events.forEach((event:any) => {
        event.first_closure = new Date(event.first_closure).toLocaleString();
        event.final_closure = new Date(event.final_closure).toLocaleString();
    })
}


</script>

{#if showModal}
<Modal bind:showModal>
    <div class=" bg-[#393D5D] h-fit flex items-center flex-col pt-5 pb-10 w-full space-y-10">
    <div>
        <h1 class="text-3xl font-semibold font-mono">{modalType=="edit"?"Edit event":"Create event"}</h1>
    </div>
    <div class=" flex flex-col items-center justify-center space-y-10 w-[60%] ">
        <form action="{modalType=="edit"?`?/editEvent`:`?/createEvent`}" use:enhance method="POST" class="w-full space-y-5">
            {#if modalType=="edit"}
            <input type="hidden" value={form?.event._id} id="id" name="id"/>
            {/if}
            <Input label="" type="text" value="{modalType=="edit"?`${form?.event.event_name}`:""}" id="event_name" name="event_name" placeholder="Event Name"></Input>
            <div class="flex flex-row justify-around items-center space-x-5">
              <div>
                <Input required={false} label="Start Date" type="datetime-local" value="{modalType=="edit"?`${form?.event.first_closure.slice(0,16)}`:""}" id="first_closure" name="first_closure" placeholder="first"></Input>
              </div>
              <div>
                <Input required={false} label="End Date" type="datetime-local" value="{modalType=="edit"?`${form?.event.final_closure.slice(0,16)}`:""}" id="final_closure" name="final_closure" placeholder="final"></Input>
              </div>
            </div>
            <div class="w-full px-2 flex justify-center pt-5">
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
    <CreateButton on:event={()=>{showModal=true}}>Create event</CreateButton>
    {#if events?.length > 0}
    <div class="flow-root">
        <div class="-my-2 mx-6lg:-mx-24">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class=" divide-y divide-gray-300">
                <thead>
                <tr>
                    <th scope="col" class="py-3.5 pl-6 pr-3 text-left text-lg font-bold text-white sm:pl-0">Name</th>
                    <th scope="col" class="py-3.5 px-3 text-center text-lg font-bold text-white">Start Date</th>
                    <th scope="col" class="py-3.5 px-3 text-center text-lg font-bold text-white">End Date</th>
                    <th scope="col" class="py-3.5 px-3 text-center text-base font-semibold text-white">Action</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-6 sm:pr-0"></th>
                </tr>
                </thead>
              <tbody class="divide-y divide-gray-200">
                {#each paginatedEvents as event}
                <tr>
                  <td class="whitespace-nowrap py-4 pl-6 pr-3 text-base font-medium text-white sm:pl-0">{event.event_name}</td>
                  <td class="whitespace-nowrap py-4 px-3 text-center text-base font-medium text-white">{event.first_closure}</td>
                  <td class="whitespace-nowrap py-4 px-3 text-center text-base font-medium text-white">{event.final_closure}</td>
                  <td class="whitespace-nowrap py-4 flex flex-row pl-3 pr-6 text-right text-base font-medium sm:pr-0 space-x-2">
                    <div class="self-start pl-5 pt-4 flex flex-row space-x-3">
                        <form action="?/getEvent" method="POST" use:enhance>
                            <input type="hidden" name="id" value ="{event._id}">
                            <EditButton on:event={()=>{showModal=true;modalType="edit"}}></EditButton>
                        </form>
                        <form action="?/deleteEvent" method="POST" use:enhance>
                            <input type="hidden" name="id" value="{event._id}">
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
    <Pagination bind:data={events} bind:paginatedData={paginatedEvents}></Pagination>

    {:else}
    <div class="flex flex-col items-center justify-center space-y-5">
        <h1 class="text-3xl font-semibold font-mono">No event found</h1>
    </div>
    {/if}
</div>