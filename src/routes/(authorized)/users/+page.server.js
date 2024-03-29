import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
	if (locals.user.role !== "Admin") throw redirect(302, `/`);
     
    const {users} = await api.get('users',locals.user.Token );
    const resDepartment= await api.get('departments',locals.user.Token )
    const departments = resDepartment.data
    if (users.error || resDepartment.error) {
        return {error: users.error || resDepartment.error}
    }

    return { users , departments}
    
}



/** @type {import('./$types').Actions} */
export const actions = {
	getUser: async ({ request,locals }) => {
		const data = await request.formData();
        const {user} = await api.get(`users/${data.get('id')}`,locals.user.Token)
        const department = await api.get(`departments/${user.department}`,locals.user.Token)
        if (user.error||department.error) {
            return {error: user.error|| department.error}
        }
        return{user,department: department.data}
	},
    editUser: async ({ request,locals }) => {
		const data = await request.formData();
        const image = data.get('image')
        const form = {
            _id: data.get('id'),
            username: data.get('email'),
            first_name: data.get('first_name'),
            last_name: data.get('last_name'),
            password: data.get('password'),
            mobile: data.get('mobile'),
            role: data.get('role'),
            department_id: data.get('department'),
        }

        if(form.role == "Admin" || form.role == "Manager"){
            form.department_id = null
        }
        if(image?.name == "undefined" ){
            const res = await api.get(`users/${form._id}`, locals.user.token);
            const user= res.user
            // @ts-ignore
            form.image = user.image
        }else{
            const imageRes = await api.uploadImage(image);
            const imageLink = imageRes.link
            // @ts-ignore
            form.image = imageLink
        }
        
     
        const body = await api.put(`users/${data.get('id')}`,form,locals.user.Token);
        if (body.error) {
            return {error: body.error}
        }else{
            return{success: true}
        }
        
	},
    deleteUser : async ({ request,locals }) => {
        const data = await request.formData();
        const message = await api.del(`users/${data.get('id')}`,locals.user.Token)
    },
    createUser : async ({ request , cookies }) => {
            const data = await request.formData();
            const imageRes = await api.uploadImage(data.get('image'))
            const image = imageRes.link
            const form = {
                username: data.get('email'),
                first_name: data.get('first_name'),
                last_name: data.get('last_name'),
                password: data.get('password'),
                mobile: data.get('mobile'),
                role: data.get('role'),
                department_id: data.get('department'),
                image: image
            }
            if(form.role == "Admin" || form.role == "Manager"){
                form.department_id = null
            }

            const body = await api.post('users/signup', form);
            if (body.error) {
                return {error: body.error}
            }else{
                return{success: true}
            }
    }
};
