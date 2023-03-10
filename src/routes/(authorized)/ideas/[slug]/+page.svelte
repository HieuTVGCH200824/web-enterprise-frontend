<script lang="ts">
	import CommentButton from "../../../../components/Button/CommentButton.svelte";
import DislikeButton from "../../../../components/Button/DislikeButton.svelte";
import LikeButton from "../../../../components/Button/LikeButton.svelte";
import Textarea from "../../../../components/Textarea.svelte";
import LoginButton from "../../../../components/Button/LoginButton.svelte";
import { enhance } from "$app/forms";

    /** @type {import('./$types').PageData} */
    export let data:any;

    /** @type {import('./$types').ActionData} */
    export let form:any;

    $: if(form?.success){
        form=null;
        alert("Successfully perform action")
    }

</script>

<div class="h-full">
    <div class="bg-card-indigo space-y-10">
        <div class="px-10 space-y-5 py-3">
            <div class="pl-10 flex flex-col justify-center items-start w-fit space-y-1">
                <h2 class="">
                    Anonymous
                </h2>
                <h4 class="text-xs">
                    {data.idea.created_at}
                </h4>
            </div>
            <div>
                <h1 class="text-xl">{data.idea.title}</h1>
            </div>
            <div>
                <p class="text-justify">{data.idea.content}</p>
            </div>
        </div>
        <div class="w-full flex items-center space-x-3 h-10 bg-[#393D5D] drop-shadow-[#fff] shadow-white px-10 z-50">
            <LikeButton></LikeButton>
            <DislikeButton></DislikeButton>
            <CommentButton></CommentButton>
        </div>
        <div class="h-3/4 px-10 pb-20 min-h-fit ">
            <div>
                <form action="?/addComment" use:enhance method="POST" class="relative flex items-center justify-end">
                    <input type="hidden" value={data.idea._id} id="id" name="ideaId"/>
                    <Textarea className="bg-white text-black" label="" value="" id="" placeholder="Comment" name="comment"></Textarea>
                    <div class="min-w-fit w-24 absolute pr-3">
                        <LoginButton formaction="?/addComment">Submit</LoginButton>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>