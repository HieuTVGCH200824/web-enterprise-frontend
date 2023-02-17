<script lang="ts">
	import Input from "../../components/Input.svelte";
    import Button from  "../../components/Button/Button.svelte";
    import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;

   
    

    function handleSubmit(e){
		const formData = new FormData(e.target)
        e.preventDefault()
		let json = Object.fromEntries(formData.entries())
        console.log(json)
    }

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
                <div class="flex flex-col h-full space-y-10">
                    <Input value="" name="password" id="password" label="" type="password" placeholder="Password"></Input>
                    <Input value="" name="confirm" id="confirm_password" label="" type="password" placeholder="Confirm Password"></Input>
                    <Input value="" name="email" id="email" label="" type="email" placeholder="Email address"></Input>
                </div>
            </div>
            <div class="flex flex-col items-center space-y-5">
                <Button>Register</Button>
                <a href="/login" class="text-white">Already have an account? Login</a>
            </div>
            <!-- <label for="username">Username:</label>
            <input type="text" id="username" name="username">
          
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
          
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
          
            <button type="submit">Submit</button> -->
        </form>
    </div>
</div>