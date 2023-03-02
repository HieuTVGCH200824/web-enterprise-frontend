import * as api from '$lib/api.js';
import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({locals }) {    
	const user = locals.user;
	return { user: user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, locals }) => {
		const data = await request.formData();
		const form = {
			title: data.get('title'),
			content: data.get('content'),
			department: locals.user.department_id,
			user_id: locals.user._id
		}
		console.log(form)
		console.log(locals.user)
		const res = await api.post('ideas', form, locals.user.token);
	}
};
