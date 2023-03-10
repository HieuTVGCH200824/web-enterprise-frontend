<script lang="ts">
    export let title : string;

</script>
<div class="bg-gray-400 w-full h-48 rounded-3xl flex items-center flex-col justify-end shadow-2xl shadow-black">
    <div class="w-full h-[60%] rounded-b-3xl flex flex-col justify-start space-y-4 bg-card-indigo/50">
        <div class=" flex flex-col pl-4 pt-2 w-full">
            <p class="font-bold text-xl">
                {title}
            </p>

        </div>
    </div>
</div>