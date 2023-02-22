<script lang="ts">
	import { applyAction } from "$app/forms";
import UserDetailButton from "../../../components/Button/UserDetailButton.svelte";
import * as api from '$lib/api';
import {enhance} from '$app/forms'


  /** @type {import('./$types').PageData} */
	export let data:any;


</script>

{#if !data.users}
<h1>There are no registered users</h1>
{:else}
<div class="py-10 mb-24 min-w-fit bg-card-indigo h-fit flex justify-center w-full">
  <div class="flow-root">
    <div class="-my-2 mx-6 overflow-x-scroll lg:-mx-24">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-fit divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-6 pr-3 text-left text-lg font-bold text-white sm:pl-0">Name</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Role</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Phone</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Deparment</th>
              <th scope="col" class="py-3.5 px-3 text-left text-base font-semibold text-white">Action</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-6 sm:pr-0"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            {#each data.users as user}
            <tr>
              <td class="whitespace-nowrap py-4 pl-6 pr-3 text-base font-medium text-white sm:pl-0">{user.first_name} {user.last_name}</td>
              <td class="whitespace-nowrap py-4 px-3 text-base text-white">{user.role}</td>
              <td class="whitespace-nowrap py-4 px-3 text-base text-white">{user.mobile}</td>
              <td class="whitespace-nowrap py-4 px-3 text-base text-white">{user.department_id}</td>
              <td class="relative whitespace-nowrap py-4 flex flex-row pl-3 pr-6 text-right text-base font-medium sm:pr-0">
                <form action="?/getUser" method="POST" use:enhance>
                  <UserDetailButton />
                  <input type="hidden" name="id" value="{user.user_id}">
                </form>
                <a href="#" class="text-white hover:text-indigo-900">Edit</a>
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
{/if}


