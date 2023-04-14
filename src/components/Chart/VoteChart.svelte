<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
    import {chartJS,votes,fetchVoteChart} from '$lib/action.js'



    
    
    // export let ideas:any;
    export let user:any;
	

    //loop through ideas, get each up_vote value and put it into charValues array
    let upVotes =[];
    let downVotes =[]
    let labels =[]
    let inertvalId:any;

    //assign upvotes to array of $votes.up_vote
   
    $: if($votes) {
        upVotes = $votes.map((vote:any) => vote.up_vote)
        downVotes = $votes.map((vote:any) => vote.down_vote)
        labels = $votes.map((vote:any) => vote.title)
        data.data.datasets[0].data = upVotes
        data.data.datasets[1].data = downVotes
        data.data.labels = labels
    }
    
    onMount(async()=>{
        inertvalId = fetchVoteChart(user.Token);
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
					label: 'Up Votes',
					backgroundColor: ' #E6E6FA',
					borderColor: 'rgb(255, 99, 132)',
					data: upVotes,
				},
                {
					label: 'Down Votes',
					backgroundColor: '#FFC0CB',
					borderColor: 'rgb(255, 99, 132)',
					data: downVotes,
				}
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
					text: 'Most voted ideas'
				}
			},
		
		}
	};

</script>

<canvas  use:chartJS={data} id="myChart" />
