<script lang="ts">
	import { applyAction } from "$app/forms";
import UserButton from "../../../components/Button/UserButton.svelte";
import * as api from '$lib/api';
import {enhance} from '$app/forms'
import Modal from '../../../components/Modal.svelte'
	import EditButton from "../../../components/Button/EditButton.svelte";
	import DeleteButton from "../../../components/Button/DeleteButton.svelte";
	import CreateButton from "../../../components/Button/CreateButton.svelte";
  import Input from "../../../components/Input.svelte";
  import Errors from '$lib/Error.svelte';
  import LoginButton from "../../../components/Button/LoginButton.svelte";

/** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;

let showModal = false;
let modalType= false;

$: if(!showModal){
  modalType = false;
}


</script>

{#if !data.users}
  <h1>There are no registered users</h1>
{:else if form?.user}
  <Modal bind:showModal>
  {form.user._id}
  </Modal>
{:else if modalType}
<Modal bind:showModal>
  <div class="flex flex-col justify-center items-center py-8 px-14 space-y-10">
    <h1 class="font-mono text-white text-6xl text-center">Create user</h1>
    <form use:enhance method="POST" action="?/createUser" class="flex flex-col items-center space-y-10">
        <div class="flex flex-row max-md:flex-col max-md:space-y-10 md:space-x-32 items-center">      
            <div class="flex flex-col items-center h-full space-y-10">
                <Input value="" name="first_name" id="first_name" label="" type="text" placeholder="First Name"></Input>
                <Input value="" name="last_name" id="last_name" label="" type="text" placeholder="Last Name"></Input>
                <Input value="" name="mobile" id="mobile" label="" type="text" placeholder="Phone No."></Input>
            </div>
            <Errors errors={form?.errors} />
            <div class="flex flex-col h-full space-y-10">
                <Input value="" name="password" id="password" label="" type="password" placeholder="Password"></Input>
                <Input value="" name="confirm" id="confirm_password" label="" type="password" placeholder="Confirm Password"></Input>
                <Input value="" name="email" id="email" label="" type="email" placeholder="Email address"></Input>
            </div>
        </div>
        <div class="flex flex-col items-center space-y-5">
            <LoginButton>Create</LoginButton>
        </div>
    </form>
  </div>

</Modal>
{/if}
<div class="py-10 mb-24 min-w-fit bg-card-indigo h-fit flex justify-center w-full flex-col items-center">
  <CreateButton on:event={()=>{showModal=!showModal; form=null; modalType=true}}>Create User</CreateButton>
  <div class="flow-root">
    <div class="-my-2 mx-6lg:-mx-24">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-fit divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-6 pr-3 text-left text-lg font-bold text-white sm:pl-0">Name</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Role</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Phone</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Deparment</th>
              <th scope="col" class="py-3.5 px-3 text-center text-base font-semibold text-white">Action</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-6 sm:pr-0"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            {#each data.users as user}
            <tr>
              <td class="whitespace-nowrap py-4 pl-6 pr-3 text-base font-medium text-white sm:pl-0">{user.first_name} {user.last_name} {user.username}</td>
              <td class="whitespace-nowrap py-4 px-3 text-base text-white">{user.role}</td>
              <td class="whitespace-nowrap py-4 px-3 text-base text-white">{user.mobile}</td>
              <td class="whitespace-nowrap py-4 px-3 text-base text-white">{user.department_id}</td>
              <td class="whitespace-nowrap py-4 flex flex-row pl-3 pr-6 text-right text-base font-medium sm:pr-0 space-x-2">
                <form action="?/getUser" method="POST" use:enhance>
                  <UserButton on:event={()=>showModal=!showModal}/>
                  <input type="hidden" name="id" value="{user.user_id}">
                </form>
                <form action="?/getUser" method="POST" use:enhance>
                  <EditButton on:event={()=>showModal=!showModal}/>
                  <input type="hidden" name="id" value="{user.user_id}">
                </form>
                <form action="?/deleteUser" method="POST" use:enhance>
                  <DeleteButton on:event={()=>showModal=!showModal}/>
                  <input type="hidden" name="id" value="{user.user_id}">
                </form>
              </td>
            </tr>
            {/each}
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


