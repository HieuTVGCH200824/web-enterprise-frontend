/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, locals }) => {
		cookies.delete('jwt', { path: '/' });
		locals.user = null;
	}
}