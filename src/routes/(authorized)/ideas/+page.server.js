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
    if (res.error || category.error) {
        return {error: res.error || category.error}
    }

    return {body}
}

/** @type {import('./$types').Actions} */
export const actions = {
    getIdea: async ({ request,locals }) => {
        const req = await request.formData();
        const form= {
            id: req.get('id'),
        }
        const res = await api.get(`ideas/${form.id}`, locals.user.token);
        const idea = res.data
        if (res.error) {
            return {error: res.error}
        }
        return {idea : idea}
    },
    createIdea: async ({ request, locals }) => {
		const data = await request.formData();
        const imageForm = new FormData();
        const image = await data.get('image')
		const isAnonymous = data.get('isAnonymous') === "true" ? true : false
        imageForm.append('image', image)
		const form = {
			title: data.get('title'),
			content: data.get('content'),
			department: locals.user.department,
			username: locals.user.username,
            category: data.get('category'),
            is_anonymous: isAnonymous
		}

        
            const imageRes = await api.uploadImage(image);
            const imageLink = imageRes.link
            // @ts-ignore
            form.image = imageLink
        
        
		const res = await api.post('ideas', form, locals.user.token);
            if (res.error) {
                return {error: res.error}
            }else{
                return{success: true}
            }
	},
    updateIdea: async ({ request, locals }) => {
        const data = await request.formData();
        const imageForm = new FormData();
        const image = await data.get('image')
        let form = {
            _id: data.get('id'),
            title: data.get('title'),
            content: data.get('content'),
            category: data.get('category'),
        }
       
        
        if(image?.name == "undefined" ){
            const res = await api.get(`users/${form._id}`, locals.user.token);
            const idea = res.data
            // @ts-ignore
            form.image = idea.image
        }else{
            const imageRes = await api.uploadImage(image);
            const imageLink = imageRes.link
            // @ts-ignore
            form.image = imageLink
        }
        
    const res = await api.put(`ideas/${form._id}`, form, locals.user.token);
    if (res.error) {
        return {error: res.error}
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
        return {error: res.error}
    }else{
        return{success: true}
    }
    },
}


