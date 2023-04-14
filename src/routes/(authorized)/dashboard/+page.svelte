<script lang="ts">
    import VoteChart from "../../../components/Chart/VoteChart.svelte";
    import WeeklyChart from "../../../components/Chart/WeeklyChart.svelte";
    import DepartmentChart from "../../../components/Chart/DepartmentChart.svelte"



    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;
</script>

<div class="flex flex-col justify-center items-center space-y-5 mb-10">
    <div class="flex flex-col md:flex-row space-y-5 justify-around items-center w-full">
        <div class="bg-white rounded-3xl p-8 lg:min-w-[30rem] min-h-[25rem] h-3/4">
            <VoteChart user={data.user}></VoteChart>
        </div>
        <div class="bg-white rounded-3xl p-8 lg:min-w-[30rem] min-h-[25rem] h-3/4">
            <WeeklyChart user={data.user} ></WeeklyChart>
        </div>
    </div>
    <div class="bg-white rounded-3xl p-8 lg:min-w-[30rem] w-fit min-h-fit h-3/4">
        <DepartmentChart user={data.user} ></DepartmentChart>
    </div>
</div>
