import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    const res = await api.get('ideas',locals.user.Token )
    const category = await api.get('categories',locals.user.Token )
    const body = {
        ideas: res.data,
        user: locals.user,
        category: category.data
    }
    return {body}
}

/** @type {import('./$types').Actions} */
export const actions = {
    getIdea: async ({ request,locals }) => {
        const req = await request.formData();
        const form= {
            id: req.get('id'),
            title: req.get('title'),
            category: req.get('category'),
            content: req.get('content'),
        }
        const res = await api.get(`ideas/${form.id}`, locals.user.token);
        const idea = res.data
        return {idea : idea}
    },
    createIdea: async ({ request, locals }) => {
		const data = await request.formData();
		const form = {
			title: data.get('title'),
			content: data.get('content'),
			department: locals.user.department_id,
			user_id: locals.user._id,
            category: data.get('category')
		}
		const res = await api.post('ideas', form, locals.user.token);
		console.log(res)
         if (res.error) {
            return fail(400, res);
        }else{
            return{success: true}
        }
	},
    updateIdea: async ({ request, locals }) => {
        const data = await request.formData();
        const form = {
            _id: data.get('id'),
            title: data.get('title'),
            content: data.get('content'),
            category: data.get('category'),
    }
    const res = await api.put(`ideas/${form._id}`, form, locals.user.token);
    if (res.error) {
        return fail(400, res);
    }else{
        return{success: true}
    }
    },
    deleteIdea: async ({ request, locals }) => {
        const data = await request.formData();
        const form = {
            _id: data.get('id')
    }
    const res = await api.del(`ideas/${form._id}`, locals.user.token);
    if (res.error) {
        return fail(400, res);
    }else{
        return{success: true}
    }
    },
}


