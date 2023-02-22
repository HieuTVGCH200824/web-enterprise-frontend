import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {

    const {users} = await api.get('users',locals.user.Token )
    
    return {users}
    
}



/** @type {import('./$types').Actions} */
export const actions = {
	getUser: async ({ request,locals }) => {
		const data = await request.formData();
        // console.log(data);
        const res = await api.get(`users/${data.get('id')}`,locals.user.Token)
        const user = await JSON.stringify(res)
        console.log(user)
		return user
	}
};
