<script lang="ts">
	import { applyAction } from '$app/forms';
	import chartjs from 'chart.js/auto';
	import { onMount } from 'svelte';
    import * as api from '$lib/api';
    // import { writable } from 'svelte/store';



    
    
    // export let ideas:any;
    export let user:any;
    let ideas: any;
	let upVotes = []
    let downVotes = []
    //loop through ideas, get each up_vote value and put it into charValues array
    let chartLabels = [];
  

    async function callAPI(){
        const response = await api.get('5-highest-upvote-ideas',user.Token)
        ideas = await response.data;
        //set upVotes value to every upvotes in ideas
        //clear upVotes array
        ideas.forEach((idea) => {upVotes.push(idea.up_vote)});
        ideas.forEach((idea) => {downVotes.push(idea.down_vote)});
        ideas.forEach((idea) => {chartLabels.push(idea.title)});
    }

       

	let ctx;
	let chartCanvas;

	onMount(async (promise) => {
        await callAPI()
		  ctx = chartCanvas.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'bar',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Up Vote',
								backgroundColor: 'purple',
								borderColor: 'rgb(255, 99, 132)',
								data: upVotes
						},{
                            label: 'Down Vote',
								backgroundColor: 'red',
								borderColor: 'rgb(255, 99, 132)',
								data: downVotes
                        }]
				},
                options: {
			responsive: true,
			maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Most upvoted ideas'
                }
            }
		} 
		});
	});
</script>

<canvas bind:this={chartCanvas} id="myChart"></canvas>
