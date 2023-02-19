<script lang="ts">
    export let barState : boolean = false;
    export let content:string;
</script>

<div class="w-full">
    <a href="/" class="{barState?" justify-start ml-5":"justify-center"} p-4 flex rounded items-center hover:text-violet-400 space-x-5 text-sm h-10 hover:bg-black/50">
        <slot/>
        <p class="{barState?" block" : " hidden"}">
            {content}
        </p>
    </a>
</div>