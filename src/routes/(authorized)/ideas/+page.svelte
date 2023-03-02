<script lang="ts">
    import DeleteButton from '../../../components/Button/DeleteButton.svelte';
    import IdeaCard from '../../../components/IdeaCard.svelte';
    import Search from '../../../components/SearchBar/Search.svelte';
    import EditButton from '../../../components/Button/EditButton.svelte';

    /** @type {import('./$types').PageData} */
export let data:any;


let search : string= "";
let ideas  = data.ideas;
$: if (search) {
    ideas = data.ideas.filter((obj) => {
        return (
        obj.title.toLowerCase().includes(search.toLowerCase()) ||
        obj.category.toLowerCase().includes(search.toLowerCase())
        );
    });
    } else {
        ideas = data.ideas;
    }

</script>

<div class="bg-card-indigo flex items-center justify-center flex-col space-y-10 w-full h-fit py-10">
    <div class="w-[40%]">
        <Search bind:value={search}></Search>
      </div>
    <div class="md:w-[60%] w-full">
        <div class="w-full grid grid-cols-2 auto-rows-max gap-x-14 gap-y-10 justify-center">
            {#each ideas as idea}
            <div class="col-span-1 row-span-1 flex items-center justify-center flex-col">
                    <a href="/ideas/{idea._id}" class="h-full w-full">
                    <IdeaCard idea={idea}></IdeaCard>
                </a>
                    <div class="self-start pl-5 pt-4">
                        <EditButton></EditButton>
                        <DeleteButton></DeleteButton>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>