import { error } from '@sveltejs/kit';

const base ='http://localhost:8080';


async function send({ method, path, data, token }) {
	try{
		const opts = { method, headers: {} };
		if (data) {
			opts.headers['Content-Type'] = 'application/json';
			opts.body = JSON.stringify(data);
		}
		
		if (token) {
			opts.headers['Authorization'] = `Token ${token}`;
		}
		const res = await fetch(`${base}/${path}`, opts);
		const body = await res.json();
		
		
		return body;
	}catch(error){
		console.log(error)
	}
	

}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}


export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}

export async function getImage(id) {
	const imageRes = await fetch(`https://api.imgur.com/3/image/${id}`,{
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID 611da03d2b6e91c'
            },
        })
        const imageData = await imageRes.json()
		return imageData.data
}

export async function uploadImage(image) {
	const imageForm = new FormData();
    imageForm.append('image', image)
	const imageRes = await fetch("https://api.imgur.com/3/upload",{
            method: 'POST',
            headers: {
                'Authorization': 'Client-ID 611da03d2b6e91c'
            },
            body:imageForm
        })
		
        const imageData = await imageRes.json()
		return imageData.data
	}

