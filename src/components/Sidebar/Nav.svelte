<script lang="ts">
    export let barState : boolean = false;
    export let content:string;
    export let path:string;
</script>

<div class="w-full">
    <a href="/{path}" class="{barState?" justify-start":"justify-center"}  duration-1000 ease-in-out max-md:justify-center p-4 flex rounded items-center hover:text-violet-400 sm:space-x-5 sm:h-10 hover:bg-black/50">
        <div>
            <slot/>
        </div>
        <p class="{barState?" visibile opacity-100" : "hidden invisible opacity-0"} max-md:invisible ">
            {content}
        </p>
    </a>
</div>