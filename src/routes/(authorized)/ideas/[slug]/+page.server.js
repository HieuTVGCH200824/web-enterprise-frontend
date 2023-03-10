import * as api from '$lib/api.js';
import { redirect,fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {    
	const res = await api.get(`ideas/${params.slug}`, locals.user.token);
    const idea = await res.data
	const user = await locals.user
	return { idea :idea, user:user };
}

/** @type {import('./$types').Actions}*/
export const actions = {
	async addComment ({request, locals}) {
		const data = await request.formData();
		const form = {
			user_id: locals.user._id,
			idea_id: data.get('ideaId'),
			comment: data.get('comment')
		}
		console.log(form)
		const res = await api.post(`comments`,form,locals.user.token );
		if (res.error) {
			return fail(400, res);
		}else{
			return{success: true}
		}
	},
}