import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    if (locals.user.role !== "Manager") throw redirect(302, `/`);

    const res = await api.get('departments',locals.user.Token )
    if(res.error){
        return {error: res.error}
    }
    const departments = res.data
    return {departments :departments}
}

/** @type {import('./$types').Actions} */
export const actions = {
    async createDepartment({request, locals}) {
        const data = await request.formData();
        const form = {
            name: data.get('name')
        }
        const body = await api.post(`departments`,form,locals.user.Token );
        if (body.status == 0) {
            return {error: body.message}
        }else{
            return{success: true}
        }
    },
    async getDepartment({request, locals}) {
        const data = await request.formData();
        const form = data.get('id')
        const department = await api.get(`departments/${form}`,locals.user.Token );
        if(department.error){
            return {error: department.error}
        }
        return {department :department.data}
    },
    async editDepartment({request, locals}) {
        const data = await request.formData();
        const form = {
            _id: data.get('id'),
            name: data.get('name')
        }
        const res = await api.put(`departments/${form._id}`,form,locals.user.Token );
        if (body.status == 0) {
            return {error: body.message}
        }else{
            return{success: true}
        }
    },
    async deleteDepartment({request, locals}) {
        const data = await request.formData();
        const form = data.get('id')
        const res = await api.del(`departments/${form}`,locals.user.Token );
        if (body.status == 0) {
            return {error: body.message}
        }else{
            return{success: true}
        }
    }
}