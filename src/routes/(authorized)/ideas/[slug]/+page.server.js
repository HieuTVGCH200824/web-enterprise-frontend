import * as api from '$lib/api.js';
import { redirect,fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {    
	const res = await api.get(`ideas/${params.slug}`, locals.user.token);
	const comments = await api.get(`ideas/comments/${params.slug}`, locals.user.token);
	if(res.error || comments.error){
		return {error: res.error || comments.error}
	}
    const idea = await res.data
	const user = await locals.user
	return { idea :idea, user:user, comments: comments.data };
}

/** @type {import('./$types').Actions}*/
export const actions = {
	async addComment ({request, locals}) {
		const data = await request.formData();
		const form = {
			user_id: locals.user._id,
			username: locals.user.username,
			idea_id: data.get('ideaId'),
			comment: data.get('comment')
		}
		const res = await api.post(`comments`,form,locals.user.token );
		if (res.error) {
			return {error: res.error}
		}else{
			return{success: true}
		}
	},
}