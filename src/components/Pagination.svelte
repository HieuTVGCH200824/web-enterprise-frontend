
<script lang="ts">


    let currentPage = 1
    export let perPage = 5
    export let data = []
    export let paginatedData;

    $: startIndex = (currentPage - 1) * perPage
    $: endIndex = startIndex + perPage
    $: paginatedData = data.slice(startIndex, endIndex)
    
    


    function nextPage() {
    if (currentPage < totalPages()) {
        currentPage += 1
    }
    }

    function previousPage() {
    if (currentPage > 1) {
        currentPage -= 1
    }
    }

    function totalPages() {
        return Math.ceil(data.length / perPage)
    }

    function generatePageNumbers() {
        const pages = []
        const total = totalPages()
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
        return pages
    }

    function goToPage(page) {
        currentPage = page
    }

</script>
<nav class="flex justify-between border-t border-gray-400 px-12 sm:mx-20">
        <div class="flex-1">
            {#if currentPage > 1}
            <button on:click={previousPage}
			class="inline-flex border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-violet-500 hover:border-violet-400 hover:text-violet-700"
            >
			<svg
            class="mr-3 h-5 w-5 text-violet-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
					clip-rule="evenodd"
				/>
			</svg>
			Previous
		</button>
        {/if}
	</div>
	<div class="hidden md:-mt-px md:flex">

        {#each generatePageNumbers() as page}
            <button
            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            on:click={() => goToPage(page)}
            >
            <p class="{currentPage==page?"text-violet-700":""}">
                {page}
            </p>
            </button>
        {/each}
    </div>

	<div class="flex-1 flex justify-end">
        {#if currentPage < totalPages()}
		<button on:click={nextPage}
			class="inline-flex border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-violet-500 hover:border-violet-400 hover:text-violet-700"
		>
			Next
			<svg
				class="ml-3 h-5 w-5 text-violet-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
        {/if}
	</div>

</nav>

