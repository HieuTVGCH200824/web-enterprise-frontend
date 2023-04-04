import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {

    const res = await api.get('closures',locals.user.Token )
    if(res.error){
        return {error: res.error}
    }
    const events = res.data
    return {events:events}
}

/** @type {import('./$types').Actions} */
export const actions = {
    async createEvent({request, locals}) {
        const data = await request.formData();
        const form = {
            event_name: data.get('event_name'),
            first_closure: data.get('first_closure'),
            final_closure: data.get('final_closure'),
        }
        form.first_closure = new Date(form.first_closure).toISOString()
        form.final_closure = new Date(form.final_closure).toISOString()
        const body = await api.post(`closures`,form,locals.user.Token );
        if (body.error) {
            return {error: body.error}
        }else{
            return{success: true}
        }
    },
    async getEvent({request, locals}) {
        const data = await request.formData();
        const form = data.get('id')
        const event = await api.get(`closures/${form}`,locals.user.Token );
        event.data.first_closure = new Date(event.data.first_closure).toISOString()
        event.data.final_closure = new Date(event.data.final_closure).toISOString()
        if(event.error){
            return {error: event.error}
        }
        return {event :event.data}
    },
    async editEvent({request, locals}) {
        const data = await request.formData();
        const form = {
            _id: data.get('id'),
            event_name: data.get('event_name'),
            first_closure: data.get('first_closure'),
            final_closure: data.get('final_closure'),
        }
        form.first_closure = new Date(form.first_closure).toISOString()
        form.final_closure = new Date(form.final_closure).toISOString()
        const res = await api.put(`closures/${form._id}`,form,locals.user.Token );
        if (res.error) {
            return {error: res.error}
        }else{
            return{success: true}
        }
    },
    async deleteEvent({request, locals}) {
        const data = await request.formData();
        const form = data.get('id')
        const res = await api.del(`closures/${form}`,locals.user.Token );
        if (res.error) {
            return {error: res.error}
        }else{
            return{success: true}
        }
    }
}