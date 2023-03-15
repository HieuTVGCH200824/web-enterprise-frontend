<script lang="ts">
	import Button from '../../components/Button/LoginButton.svelte';
    import Checkbox from '../../components/Checkbox.svelte';
    import Input from '../../components/Input.svelte';
    import { enhance } from '$app/forms';
    import Errors from '$lib/Error.svelte';



	/** @type {import('./$types').ActionData} */
	export let form :any;

    $: if(form?.error){
        alert(form.error)
    }

    
</script>
<div class="flex items-center justify-center h-full w-full fixed bg-background-indigo">
    <div class="flex justify-center lg:space-x-40 max-lg:h-full items-center w-full max-lg:flex-col ">
        <img class="animate-[bounce_1500ms_ease-in-out] h-[600px] min-w-fit max-lg:h-48" src="login.png" alt="">
        <div class="min-w-fit bg-card-indigo w-1/4 shadow-2xl shadow-black rounded-3xl flex flex-col items-center">
            <div class="py-8 px-14 flex flex-col space-y-10 items-center">
                <p class="text-white text-6xl font-mono">Login</p>
                <form method="POST" use:enhance class="flex flex-col space-y-8">
                    <Input name="email" label="" value="" type="text" id="username" placeholder="Username"></Input>
                    <Input name="password" label="" value="" type="password" id="password" placeholder="Password"></Input>
                    <div class="flex flex-row items-center space-x-4">
                        <Checkbox label="" value="" id="rememberPwd"/>
                        <p class="text-white text-lg">Remember Password</p>
                    </div>
                    <div class="self-center flex flex-col items-center space-y-2">
                        <div class="w-32">
                            <Button>Login</Button>
                        </div>
                        <a href="/login" class="text-white">Forgot password?</a>
                        <a href="/register" class="text-white text-center">Don't have account? Register now!</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>