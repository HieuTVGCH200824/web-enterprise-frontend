<script lang="ts">
	import CommentButton from '../../../../components/Button/CommentButton.svelte';
	import DislikeButton from '../../../../components/Button/DislikeButton.svelte';
	import LikeButton from '../../../../components/Button/LikeButton.svelte';
	import Textarea from '../../../../components/Textarea.svelte';
	import LoginButton from '../../../../components/Button/LoginButton.svelte';

	import { enhance } from '$app/forms';
	import DeleteButton from '../../../../components/Button/DeleteButton.svelte';
	import IdeaPost from '../../../../components/IdeaPost.svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	/** @type {import('./$types').ActionData} */
	export let form: any;

	$: if (form?.success) {
		form = null;
	}

	$: if (form?.error) {
		alert(form.error);
	}

	let getComment :any = null;
	$: if(form?.getComment){
    getComment = form.getComment;
	}

	
</script>

<div class="h-full">
	<IdeaPost files={data.documents} allUser={data.allUser} votes={data.votes} user={data.user} idea={data.idea} getComment={getComment} comments={data.comments} />
</div>
