import chartjs from 'chart.js/auto';
import * as api from '$lib/api.js';
import {writable} from 'svelte/store';

export const votes = writable ([]);
export const weekly = writable ([]);
export const department = writable ([]);
//ChartJS function for creating, updating. Delete chart when there's no param
export function chartJS(node, config) {
    let chart;
    const ctx = node.getContext('2d');
    chart = new chartjs(ctx, config)
    return {
        update(newConfig) {
            chart.data = newConfig.data;
            Object.assign(chart.options, newConfig.options);
            chart.update();
        },
        destroy() {
            chart.destroy();
        }
    }
}

export async function fetchVoteChart(token) {
    const intervalId= setInterval( async ()=>{
        const res = await api.get('5-highest-upvote-ideas',token);
        const data = await res.data
        votes.set(data);
    },1000)
    return intervalId;
}
export async function fetchDepartmentChart(token) {
    const intervalId= setInterval( async ()=>{
        const res = await api.get('ideas-by-department',token);
        const data = await res.data
        department.set(data);
    },1000)
    return intervalId;
}
export async function weeklyIdeaChart(token){
    const intervalId= setInterval( async ()=>{
        const res = await api.get('number-of-ideas-each-day',token);
        const data = await res.data
        weekly.set(data.slice(-7));
    },1000)
    return intervalId;
}