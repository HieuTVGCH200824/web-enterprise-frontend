<script lang="ts">
	import Input from "../../components/Input.svelte";
    import LoginButton from  "../../components/Button/LoginButton.svelte";
    import { enhance } from '$app/forms';
    import Errors from '$lib/Error.svelte';

	/** @type {import('./$types').ActionData} */
	export let form :any;

</script>
<div class="flex items-center fixed w-full h-full justify-center bg-background-indigo">
    <div class="rounded-3xl shadow-2xl shadow-black bg-card-indigo flex flex-col justify-center items-center py-8 px-14 space-y-10">
        <h1 class="font-mono text-white text-6xl">Register</h1>
        <form use:enhance method="POST" class="flex flex-col items-center space-y-10">
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
                <LoginButton>Register</LoginButton>
                <a href="/login" class="text-white">Already have an account? Login</a>
            </div>
        </form>
    </div>
</div>