<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    import {chartJS,weekly,weeklyIdeaChart} from '$lib/action.js'



    
    
    // export let ideas:any;
    export let user:any;
    let inertvalId:any;

    let dataset =[];
    let labels =[];
	

    $: if($weekly) {
        dataset = $weekly.map((daily:any) => daily.Value)
        labels = $weekly.map((daily:any) =>  new Date(daily.Key).toLocaleDateString())
        data.data.datasets[0].data = dataset
        data.data.labels = labels
    }
    
    
    onMount(async()=>{
        inertvalId = weeklyIdeaChart(user.Token);
    })
    onDestroy(()=>{
        clearInterval(inertvalId)
    })

    let data = {
		type: 'bar',
		data: {
			//X axis data label
			labels: labels,
			//set default dataset as CPU
			datasets: [
				{
					label: 'Number of ideas',
					backgroundColor: 'green',
					borderColor: 'rgb(255, 99, 132)',
					data: dataset,
				},
         
			]
		},
		options: {
			fill: true,
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Number of ideas weekly'
				}
			},
		
		}
	};

</script>

<canvas  use:chartJS={data} id="myChart" />
