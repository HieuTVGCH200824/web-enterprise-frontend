<script lang="ts">
    export let barState : boolean = false;
    export let content:string;
</script>

<div class="w-full">
    <a href="/" class="{barState?" justify-start ml-5":"justify-center"} align-center max-sm:flex-col-reverse sm:p-4 flex rounded items-center hover:text-violet-400 sm:space-x-5 h-10 hover:bg-black/50">
        <slot/>
        <p class="{barState?" block" : " hidden"} max-sm:block max-sm:text-sm">
            {content}
        </p>
    </a>
</div>