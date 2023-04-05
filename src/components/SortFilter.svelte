<script>
    let toggleSort = false;
    let selectedSort = "Sort"
</script>


<div class="flex items-center justify-end relative whitespace-nowrap">
    <button class="flex items-center" on:click={()=>{toggleSort=!toggleSort}}>
        <span>{selectedSort}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" text-violet-400 w-5 h-5 pt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    </button>
    <div class="absolute ease-in-out duration-700 top-8 {toggleSort?"block":"hidden"}">
        <div class="flex flex-col justify-center items-center bg-gray-500 p-2 rounded">
            <a href="?sort=" class="{selectedSort === "Sort"?"text-violet-400":"text-gray-200"}" on:click={()=>{selectedSort = "Sort";toggleSort=false}}>All</a>
            <a href="?sort=most-viewed-ideas" class="{selectedSort === "Most views"?"text-violet-400":"text-gray-200"}" on:click={()=>{selectedSort = "Most views";toggleSort=false}}>Most views</a>
            <a href="?sort=most-upvote-ideas" class="{selectedSort === "Up votes"?"text-violet-400":"text-gray-200"}" on:click={()=>{selectedSort = "Up votes";toggleSort=false}}>Up votes</a>
        </div>
    </div>
</div>