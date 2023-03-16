<script lang="ts">
	import CommentButton from "../../../../components/Button/CommentButton.svelte";
import DislikeButton from "../../../../components/Button/DislikeButton.svelte";
import LikeButton from "../../../../components/Button/LikeButton.svelte";
import Textarea from "../../../../components/Textarea.svelte";
import LoginButton from "../../../../components/Button/LoginButton.svelte";

import { enhance } from "$app/forms";
	import DeleteButton from "../../../../components/Button/DeleteButton.svelte";

    /** @type {import('./$types').PageData} */
    export let data:any;

    /** @type {import('./$types').ActionData} */
    export let form:any;

    $: if(form?.success){
        form=null;
    }

    $: if(form?.error){
        alert(form.error)
    }

    let showComment :boolean = true
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
            <CommentButton on:event={()=>{showComment=!showComment}}></CommentButton>
        </div>
        {#if showComment}
        <div class="space-y-5 pl-10">
            {#each data.comments as comment}
            <div class="flex flex-row items-center justify-start space-x-5">
                <div class="w-10 rounded-3xl h-10 bg-gray-300"></div>
                <div class="py-2 pl-3 pr-10 w-fit max-w-full bg-gray-300  rounded-3xl flex items-start justify-center flex-col">
                    <h1 class="text-black ">Anonymous</h1>
                    <p class="text-gray-600 break-all whitespace-normal">
                        {comment.comment}
                    </p>
                </div>
                
            </div>
            {/each}
        </div>
        {/if}
        <div class="h-3/4 px-10 pb-20 min-h-fit ">
            <div>
                <form action="?/addComment" use:enhance method="POST" class="flex items-center justify-start">
                    <input type="hidden" value={data.idea._id} id="id" name="ideaId"/>
                    <div class="w-full relative">
                        <Textarea className="bg-white text-black" label="" value="" id="" placeholder="Comment" name="comment"></Textarea>
                        <div class="min-w-fit w-24 absolute pr-3 right-0 top-5">
                            <LoginButton formaction="?/addComment">Submit</LoginButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>