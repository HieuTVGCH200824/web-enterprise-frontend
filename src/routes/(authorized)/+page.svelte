<script lang="ts">
import LikeButton from "../../components/Button/LikeButton.svelte";
import DislikeButton from "../../components/Button/DislikeButton.svelte";
import CommentButton from "../../components/Button/CommentButton.svelte";
import Textarea from "../../components/Textarea.svelte";
import LoginButton from "../../components/Button/LoginButton.svelte";
import {enhance} from "$app/forms";
	import IdeaPost from "../../components/IdeaPost.svelte";

/** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;


$: if(form?.success){
    alert("Action performed successfully");
}

$: if(form?.error){
    alert("Action failed");
}

let getComment :any = null;
$: if(form?.getComment){
    getComment = form.getComment;
}



</script>
<div class="h-full w-full text-white"><div class="mx-10">
    {#if data.body.ideas}
    <div class="space-y-10">
    {#each data.body.ideas as idea}
        <IdeaPost votes={data.body.votes} user={data.body.user} getComment={getComment} idea={idea} comments={data.body.comments}></IdeaPost>
    {/each}
    </div>
    {/if}
</div></div>