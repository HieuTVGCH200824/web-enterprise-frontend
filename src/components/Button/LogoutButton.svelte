<script lang="ts">
    import {enhance} from "$app/forms"
    export let barState:boolean = false;
</script>

<form use:enhance method="POST" action="/?/logout" class="">
    <button class="{barState?"":"justify-center"}  w-full max-md:justify-center p-4 flex rounded items-center hover:text-violet-400 sm:space-x-5 sm:h-10 hover:bg-black/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <p class="{barState?"visibile opacity-100 translate-x-0 text-base w-0" : "absolute w-0 h-0 invisible opacity-0 -translate-x-10"} whitespace-nowrap ease-in-out duration-500 max-md:invisible ">
                Log Out
        </p>
    </button>
</form>