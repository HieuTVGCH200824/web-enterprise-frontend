import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    const res = await api.get('ideas-not-paging',locals.user.token )
    const category = await api.get('categories',locals.user.token )
    const event = await api.get('closures',locals.user.token )
    const body = {
        ideas: res.data,
        user: locals.user,
        category: category.data,
        event: event.data.map((event)=>{return {_id: event._id, name: event.event_name,first_closure: event.first_closure,final_closure: event.final_closure}})
    }
    if (res.error || category.error||event.error) {
        return {error: res.error || category.error||event.error}
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
        const event = await api.get(`closures/${idea.event_id}`, locals.user.token);
        console.log(event.data)
        if (res.error) {
            return {error: res.error}
        }
        return {idea : idea,event: event.data}
    },
    createIdea: async ({ request, locals }) => {
		const data = await request.formData();
        const image = await data.get('image')
        const attachment =  data.get('attachment')
		const isAnonymous = data.get('isAnonymous') === "true" ? true : false

        if(data.get('term') !="agree"){
            return {error: "You must agree to the terms and conditions"}
        }

      
		const form = {
			title: data.get('title'),
			content: data.get('content'),
			department_id: locals.user.department_id,
			user_id: locals.user._id,
            event_id: data.get('eventId'),
            category_id: data.get('category'),
            is_anonymous: isAnonymous
		}
            console.log(form)

            const imageRes = await api.uploadImage(image);
            const imageLink = imageRes.link
            // @ts-ignore
            form.image = imageLink
            const res = await api.post('ideas', form, locals.user.token);
            const uploadForm = {
                idea_id: await res.data._id,
                created_by: await locals.user._id,
            }
            const resAttachtment = await api.uploadFile(attachment,uploadForm.idea_id,uploadForm.created_by, locals.user.token)
            console.log(res)
            console.log(resAttachtment)
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
            category_id: data.get('category'),
            event_id: data.get('eventId'),
            is_anonymous: data.get('isAnonymous') === "true" ? true : false,
            department_id: locals.user.department,
            user_id: locals.user._id,
        }
       
        
        if(image?.name == "undefined" ){
            const res = await api.get(`ideas/${form._id}`, locals.user.token);
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


