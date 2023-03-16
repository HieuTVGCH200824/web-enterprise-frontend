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
            title: req.get('title'),
            category: req.get('category'),
            content: req.get('content'),
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
        imageForm.append('image', image)

        const imageRes = await fetch("https://api.imgur.com/3/upload",{
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID 611da03d2b6e91c'
            },
            body:imageForm
        })
        const imageData = await imageRes.json()
        const imageLink = imageData.data.link

		const form = {
			title: data.get('title'),
			content: data.get('content'),
			department: locals.user.department,
			user_id: locals.user._id,
            category: data.get('category'),
            image: imageLink
		}

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
        imageForm.append('image', image)

        const imageRes = await fetch("https://api.imgur.com/3/upload",{
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID 611da03d2b6e91c'
            },
            body:imageForm
        })
        const imageData = await imageRes.json()
        const imageLink = imageData.data.link

        const form = {
            _id: data.get('id'),
            title: data.get('title'),
            content: data.get('content'),
            category: data.get('category'),
            image: imageLink
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


