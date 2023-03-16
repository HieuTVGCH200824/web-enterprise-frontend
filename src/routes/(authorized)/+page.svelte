<script lang="ts">
import LikeButton from "../../components/Button/LikeButton.svelte";
import DislikeButton from "../../components/Button/DislikeButton.svelte";
import CommentButton from "../../components/Button/CommentButton.svelte";
import Textarea from "../../components/Textarea.svelte";
import LoginButton from "../../components/Button/LoginButton.svelte";
import {enhance} from "$app/forms";

/** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;

let showComment =true;
</script>
<div class="h-full w-full text-white"><div class="mx-10">
    {#if data.body.ideas}
    <div class="space-y-10">
    {#each data.body.ideas as idea}
    <div class="bg-card-indigo space-y-10">
        <div class="px-10 space-y-5 py-3">
            <div class="pl-10 flex flex-col justify-center items-start w-fit space-y-1">
                <h2 class="">
                    Anonymous
                </h2>
                <h4 class="text-xs">
                    {idea.created_at}
                </h4>
            </div>
            <div>
                <h1 class="text-xl">{idea.title}</h1>
            </div>
            <div>
                <p class="text-justify">{idea.content}</p>
            </div>
        </div>
        <div class="w-full flex items-center space-x-3 h-10 bg-[#393D5D] drop-shadow-[#fff] shadow-white px-10 z-50">
            <LikeButton></LikeButton>
            <DislikeButton></DislikeButton>
            <CommentButton on:event={()=>{showComment=!showComment}}></CommentButton>
        </div>
        {#if showComment}
        <div class="space-y-5 pl-10">
            {#if data.body.comments}
            {#each data.body.comments as comment}
            {#if comment.idea_id==idea._id}
            <div class="flex flex-row items-center justify-start space-x-5">
                <div class="py-2 pl-3 pr-10 w-fit max-w-[90%] bg-gray-300  rounded-3xl flex items-start justify-center flex-col">
                    <h1 class="text-black ">Anonymous</h1>
                    <p class="text-gray-600 break-all whitespace-normal">
                        {comment.comment}
                    </p>
                </div>
                
            </div>
            {/if}
            
            {/each}
            {/if}
        </div>
        {/if}
        <div class="h-3/4 px-10 pb-20 min-h-fit ">
            <div>
                <form action="?/addComment" use:enhance method="POST" class="flex items-center justify-start">
                    <input type="hidden" value={idea._id} id="id" name="ideaId"/>
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
    {/each}
    </div>
    {/if}
</div></div>