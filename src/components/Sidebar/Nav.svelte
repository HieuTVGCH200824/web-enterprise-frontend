<script lang="ts">


    export let content:string;
</script>

<div class="w-full">
    <a href="/" class="p-4 flex rounded items-center justify-center group-hover:justify-start hover:text-violet-400 group-hover:ml-5 space-x-5 text-sm h-10 hover:bg-black/50">
        <slot/>
        <p class="hidden group-hover:block">
            {content}
        </p>
    </a>
</div>