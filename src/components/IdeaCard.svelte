<script lang="ts">
    export let idea : Object;
</script>
<div class="bg-gray-400 w-full h-48 rounded-3xl flex items-center flex-col justify-end shadow-2xl shadow-black">
    <div class="w-full h-[60%] rounded-b-3xl flex flex-col justify-end space-y-4 bg-card-indigo/50">
        <div class=" flex flex-col pl-4 pt-2 w-full">
            <p class="font-bold text-xl">
                {idea.title}
            </p>
            <p>
                {idea.category}
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