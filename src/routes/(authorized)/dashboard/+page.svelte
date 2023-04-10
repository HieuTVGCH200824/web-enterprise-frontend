<script lang="ts">
    import VoteChart from "../../../components/Chart/VoteChart.svelte";
    import WeeklyChart from "../../../components/Chart/WeeklyChart.svelte";


    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;
</script>

<div class="bg-white rounded-3xl p-8 w-1/2 min-w-[30rem] h-3/4">
    <VoteChart user={data.user} ></VoteChart>
</div>
<div class="bg-white rounded-3xl p-8 w-1/2 min-w-[30rem] h-3/4">
    <WeeklyChart user={data.user} ></WeeklyChart>
</div>
