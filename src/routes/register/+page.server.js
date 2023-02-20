import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const body = await api.post('users/signup', {
			username: data.get('email'),
			first_name: data.get('first_name'),
			last_name: data.get('last_name'),
			password: data.get('password'),
			mobile: data.get('mobile'),
			image: 'text.png',
			department_id: 'aaa-bb-cc'
		});
		const message =  await body.json();
		if (body.error) {
			return fail(401, body);
		}

		const value = btoa(JSON.stringify(body.user));
		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, '/');
}};