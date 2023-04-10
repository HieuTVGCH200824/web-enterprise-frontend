import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';
import { writable } from 'svelte/store';



/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    if (locals.user.role !== "Manager") throw redirect(302, `/`);

    return {user:locals.user}

    // setInterval(async()=>{
    //     const resHighVote = await api.get('5-highest-upvote-ideas',locals.user.Token )
    //     if(resHighVote.error){
    //         return {error: resHighVote.error}
    //     }
    //     highVotes.set(resHighVote.data)
    // }, 1000);
    // return { highVotes }
}
