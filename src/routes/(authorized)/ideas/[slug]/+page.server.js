import * as api from '$lib/api.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {    
	const res = await api.get(`ideas/${params.slug}`, locals.user.token);
    const idea = await res.data
	return { idea :idea }
}

