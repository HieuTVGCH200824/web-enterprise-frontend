<script lang="ts">
	import IdeaPost from '../../../../components/IdeaPost.svelte';
	import Loader from '../../../../components/Loader.svelte';
    import {navigating} from '$app/stores';

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
{#if $navigating}
<Loader></Loader>
{/if}
<div class="h-full">
	<IdeaPost categories={data.categories} departments={data.departments} files={data.documents} allUser={data.allUser} votes={data.votes} user={data.user} idea={data.idea} getComment={getComment} comments={data.comments} />
</div>
