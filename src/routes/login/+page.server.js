import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}


/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const body = await api.post('users/login', {
				username: data.get('email'),
				password: data.get('password')
		});

		if (body.error) {
			return fail(400, body);
		}

		const value = JSON.stringify(body.user);
		cookies.set('jwt', value, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 // 1 day
		  });


		throw redirect(307, '/');
	}
};
