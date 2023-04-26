<script lang="ts">
    export let barState : boolean = false;
    export let content:string;
    export let path:string;
</script>

<div class="w-full">
    <a href="/{path}" class="{barState?"":"justify-center"}   max-md:justify-center p-4 flex rounded items-center hover:text-violet-400 sm:space-x-5 sm:h-10 hover:bg-black/50">
        <div >
            <slot/>
        </div>
        <p class="{barState?"visibile opacity-100 translate-x-0 text-base w-0" : "absolute w-0 h-0 invisible opacity-0 -translate-x-10"} ease-in-out duration-500 max-md:invisible ">
            {content}
        </p>
    </a>
</div>