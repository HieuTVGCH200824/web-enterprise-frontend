import * as api from '$lib/api.js';
import { fail, redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
	if (locals.user.role !== "Manager") throw redirect(302, `/`);

    const res = await api.get('departments',locals.user.Token )
    if(res.error){
        return {error: res.error}
    }
    const departments = res.data
    return {departments:departments}
}
