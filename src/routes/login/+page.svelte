<script lang="ts">
	import Button from '../../components/Button.svelte';
    import Checkbox from '../../components/Checkbox.svelte';
import Input from '../../components/Input.svelte';
</script>
<div class="flex items-center justify-center h-full">
    <div class="flex md:justify-around max-md:h-full max-md:items-center w-full max-md:flex-col max-md:pt-10">
        <img class="h-[600px] max-md:h-48" src="login.png" alt="">
        <div class="min-w-fit bg-card-indigo w-1/4 shadow-2xl shadow-black rounded-3xl flex flex-col items-center">
            <div class="py-8 px-14 flex flex-col space-y-10 items-center">
                <p class="text-white text-6xl font-mono">Login</p>
                <form class="flex flex-col space-y-8">
                    <Input label="" value="" type="text" id="username" placeholder="Username"></Input>
                    <Input label="" value="" type="text" id="password" placeholder="Password"></Input>
                    <div class="flex flex-row items-center space-x-4">
                        <Checkbox label="" value="" id="rememberPwd"/>
                        <p class="text-white text-lg">Remember Password</p>
                    </div>
                    <div class="self-center flex flex-col items-center space-y-2">
                        <Button>Login</Button>
                        <a href="" class="text-white">Forgot password?</a>
                        <a href="" class="text-white">Don't have account? Register now!</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>