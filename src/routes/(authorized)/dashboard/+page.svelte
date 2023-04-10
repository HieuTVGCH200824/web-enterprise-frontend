<script lang="ts">
    import Chart from "../../../components/Chart.svelte";


    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;
</script>

<div class="bg-white rounded-3xl p-10 w-1/2 h-3/4">
    <Chart user={data.user} ></Chart>
</div>
<!-- ideas={data.highVotes} -->