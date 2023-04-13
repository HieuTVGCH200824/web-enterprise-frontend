<script lang="ts">
    import VoteChart from "../../../components/Chart/VoteChart.svelte";
    import WeeklyChart from "../../../components/Chart/WeeklyChart.svelte";


    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;
</script>

<div class="flex flex-col items-center justify-around max-2xl:space-y-5 2xl:flex-row h-full">
    <div class="bg-white rounded-3xl p-8 lg:min-w-[30rem] min-h-fit h-3/4">
        <VoteChart user={data.user} ></VoteChart>
    </div>
    <div class="bg-white rounded-3xl p-8 lg:min-w-[30rem] min-h-fit h-3/4">
        <WeeklyChart user={data.user} ></WeeklyChart>
    </div>
</div>
