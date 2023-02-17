/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		user: locals.user && {
			email: locals.user.email,
			password: locals.user.password
		}
	};
}
