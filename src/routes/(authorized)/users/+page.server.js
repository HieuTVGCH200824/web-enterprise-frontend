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
        const {user} = await api.get(`users/${data.get('id')}`,locals.user.Token)
        console.log(user)
        return{user}
	},
    // editUser: async ({ request,locals }) => {
	// 	const data = await request.formData();
    //     const {user} = await api.put(`users/${data.get('id')}`,locals.user.Token)
    //     console.log(user)
    //     return{user}
	// }
    deleteUser : async ({ request,locals }) => {
        const data = await request.formData();
        const {message} = await api.del(`users/${data.get('id')}`,locals.user.Token)
        console.log(message)
    },
    createUser : async ({ request , cookies }) => {
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
            if (body.error) {
                return fail(401, body);
            }
    
            const value = btoa(JSON.stringify(body.user));
            cookies.set('jwt', value, { path: '/' });
    
            throw redirect(307, '/');
    }
};
