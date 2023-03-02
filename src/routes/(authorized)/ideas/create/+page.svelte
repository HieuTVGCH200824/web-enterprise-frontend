<script lang="ts">
	import LoginButton from "../../../../components/Button/LoginButton.svelte";
	import Checkbox from "../../../../components/Checkbox.svelte";
    import Input from "../../../../components/Input.svelte";
	import Textarea from "../../../../components/Textarea.svelte";
    import { enhance } from '$app/forms';

/** @type {import('./$types').PageData} */
export let data:any;
</script>

<div class="w-full bg-[#393D5D] h-fit flex items-center flex-col pt-5 pb-10">
    <div>
        <h1 class="text-3xl font-semibold font-mono">Create Idea</h1>
    </div>
    <div class=" flex flex-col items-center justify-center w-[60%] ">
        <form use:enhance method="POST" class="w-full space-y-5">
        <p class="self-start">
            {data.user.first_name} {data.user.last_name}
        </p>
        <Input label="" type="text" value="" id="title" name="title" placeholder="Title"></Input>
        <div class="w-full relative">
            <Textarea name="content" label="" value="" id="" placeholder="{data.user.first_name} {data.user.last_name}, what are you thinking?"/>
            <div class="flex flex-row justify-center items-center space-x-3 absolute right-4 bottom-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>

            </div>
                
        </div>
        <div class="flex justify-center items-center space-x-5">
            <Checkbox label="" value="" id=""></Checkbox><p>Agree to the terms & conditions</p>
        </div>
        <div class="w-full px-2 flex justify-center">
            <LoginButton>Post</LoginButton>
        </div>
        </form>
    </div>
</div>