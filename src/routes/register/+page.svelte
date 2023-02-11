<script>
	import Input from "../../components/Input.svelte";
    import Button from "../../components/Button.svelte";

</script>
<div class="flex items-center fixed w-full h-full justify-center bg-background-indigo">
    <div class="rounded-3xl shadow-2xl shadow-black bg-card-indigo flex flex-col justify-center items-center py-8 px-14 space-y-10">
        <h1 class="font-mono text-white text-6xl">Register</h1>
        <form action="" class="flex flex-col items-center space-y-10">
            <div class="flex flex-row max-md:flex-col max-md:space-y-10 md:space-x-32">      
                <div class="flex flex-col h-full space-y-10">
                    <Input id="fullname" label="" type="text" value="" placeholder="Full Name"></Input>
                    <Input id="gender" label="" type="text" value="" placeholder="Gender"></Input>
                    <Input id="pwd" label="" type="text" value="" placeholder="Password"></Input>
                </div>
                <div class="flex flex-col h-full space-y-10">
                    <Input id="email" label="" type="text" value="" placeholder="Email address"></Input>
                    <Input id="phone" label="" type="text" value="" placeholder="Phone No."></Input>
                    <Input id="confirmPwd" label="" type="text" value="" placeholder="Confirm Password"></Input>
                </div>
            </div>
            <div class="flex flex-col items-center space-y-5">
                <Button>Register</Button>
                <a href="/login" class="text-white">Already have an account? Login</a>
            </div>
        </form>
    </div>
</div>