<script lang="ts">
	import { onMount } from "svelte";


    export let idea : Object;
    export let categories : any;
    export let events : any;


    $: category = categories?.find((category:any) => category._id == idea.category_id)
    $: event = events?.find((event:any) => event._id == idea.event_id)



</script>
<div class="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full h-48 rounded-3xl flex items-center flex-col justify-end shadow-2xl shadow-black bg-center bg-cover bg-no-repeat" style={idea.image?`background-image: url('${idea.image}')`:""}>
    <div class="w-full h-[60%] rounded-b-3xl flex flex-col justify-end space-y-4 bg-card-indigo/50">
        <div class=" flex flex-col pl-4 pt-2 w-full">
            <p class="font-bold text-xl">
                {idea.title}
            </p>
            <p>
                {category?.name} - {event?.name}
            </p>     
        </div>
        <div class="flex flex-row rounded-b-3xl justify-between items-end px-5 py-2">
            <p>
                {idea.up_vote} Likes
            </p>
            <p>
                {idea.views} Views
            </p>
        </div>
    </div>
</div>