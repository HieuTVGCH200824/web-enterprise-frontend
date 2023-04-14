<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    import {chartJS,department,fetchDepartmentChart} from '$lib/action.js'



    
    
    // export let ideas:any;
    export let user:any;
	

    //loop through ideas, get each up_vote value and put it into charValues array
    let dataset =[];
    let labels =[];
	let colors = []
    let inertvalId:any;

    //assign upvotes to array of $votes.up_vote
	function getColor(){
		let r = Math.floor(Math.random() * 200);
		let g = Math.floor(Math.random() * 200);
		let b = Math.floor(Math.random() * 200);
		let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
		return color
	}
	$: if(Object.keys($department).length > colors.length) {
		colors.push(getColor())
	}

    $: if($department) {
		//set dataset to value and label to keys for each attribute in the object
        dataset = Object.values($department)
		labels = Object.keys($department)
		data.data.datasets[0].backgroundColor = colors
        data.data.datasets[0].data = dataset
        data.data.labels = labels
    }
    
    onMount(async()=>{
        inertvalId = fetchDepartmentChart(user.Token);
    })
    onDestroy(()=>{
        clearInterval(inertvalId)
    })

    let data = {
		type: 'pie',
		data: {
			//X axis data label
			labels: labels,
			//set default dataset as CPU
			datasets: [
				{
					label: 'Department',
					backgroundColor: colors,
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
					text: 'Department ideas'
				}
			},
		
		}
	};

</script>

<canvas  use:chartJS={data} id="myChart" />
