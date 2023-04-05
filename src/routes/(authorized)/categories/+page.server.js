import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    if (locals.user.role !== "Manager") throw redirect(302, `/`);
    const res = await api.get('categories',locals.user.Token )
    if(res.error){
        return {error: res.error}
    }
    const categories = res.data
    return {categories :categories}
}

/** @type {import('./$types').Actions} */
export const actions = {
    async createCategory({request, locals}) {
        const data = await request.formData();
        const form = {
            name: data.get('name')
        }
        const body = await api.post(`categories`,form,locals.user.Token );
        if (body.error) {
            return {error: body.error}
        }else{
            return{success: true}
        }
    },
    async getCategory({request, locals}) {
        const data = await request.formData();
        const form = data.get('id')
        const category = await api.get(`categories/${form}`,locals.user.Token );
        if(category.error){
            return {error: category.error}
        }
        return {category :category.data}
    },
    async editCategory({request, locals}) {
        const data = await request.formData();
        const form = {
            _id: data.get('id'),
            name: data.get('name')
        }
        const res = await api.put(`categories/${form._id}`,form,locals.user.Token );
        if (res.error) {
            return {error: res.error}
        }else{
            return{success: true}
        }
    },
    async deleteCategory({request, locals}) {
        const data = await request.formData();
        const form = data.get('id')
        const res = await api.del(`categories/${form}`,locals.user.Token );
        if (res.error) {
            return {error: res.error}
        }else{
            return{success: true}
        }
    }
}