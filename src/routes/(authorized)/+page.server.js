import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const res = await api.get('ideas', locals.user.token);
	const comments = await api.get('comments', locals.user.token);
	const body = {
		ideas: res.data,
		user: locals.user,
		comments: comments.data
	};
	if (res.error || comments.error) {
		return { error: res.error || comments.error };
	}
	console.log(body)
	return { body };
}

/** @type {import('./$types').Actions} */
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
	logout: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = null;
	}
	
}

