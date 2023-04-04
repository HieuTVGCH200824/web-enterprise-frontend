<script lang="ts">
import LikeButton from "./Button/LikeButton.svelte";
import DislikeButton from "./Button/DislikeButton.svelte";
import CommentButton from "./Button/CommentButton.svelte";
import Textarea from "./Textarea.svelte";
import {enhance} from "$app/forms";
import EditButton from "./Button/EditButton.svelte";
import DeleteButton from "./Button/DeleteButton.svelte";
import ToggleButton from "./Button/ToggleButton.svelte";
import ChevronButton from "./Button/ChevronButton.svelte";


export let idea : any;
export let comments : any;
export let user :any;
export let votes:any;
export let getComment:any;
export let allUser : any ;
export let files: any;



let anonymousComment : boolean = false;

let showEdit:boolean = false;

let show :boolean = false;

function handleToggle(event){
    anonymousComment = event.detail;
}

$: commentCount = comments?.filter((comment) => comment.idea_id == idea._id).length;
$: ideaOwner = allUser?.find((user) => user._id == idea.user_id);
$: documents = files?.find((file) => file.idea_id == idea._id)

$: postVotes = votes?.find(
        (vote) => vote.idea_id == idea._id 
    );






</script>

<div class="bg-card-indigo rounded-xl space-y-10">
    <div class="px-10 space-y-5 py-3">
        <div class=" flex flex-col justify-center items-start w-fit space-y-2">
            <h2 class="">
                {#if idea.is_anonymous == true}
                    Anonymous
                {:else}
                <div class="flex flex-row items-center space-x-3">
                    <img src={ideaOwner?.image} alt="" class="w-10 h-10 rounded-full">
                    <span>
                        {ideaOwner?.username}
                    </span>
                </div>
                {/if}
            </h2>
            <h4 class="text-xs">
                Created: {idea.created_at}
            </h4>
            <h4 class="text-xs">
                Updated: {idea.updated_at}
            </h4>
        </div>
        <div>
            <a href="/ideas/{idea._id}" class="hover:opacity-50 duration-300 hover:text-violet-400">
                <h1 class="text-xl">Title: {idea.title}</h1>
            </a>
        </div>
        <div>
            <p class="text-justify">{idea.content}</p>
        </div>
        <div class="flex items-center justify-center ">
            <a href="{idea.image}" target="_blank" class=" hover:opacity-50 duration-300">
                <img src={idea.image} alt="" class="max-h-[200px]">
            </a>
        </div>
        <h1>Attachment:
            <a class="hover:text-violet-400" href="http://localhost:8080/export-documents-to-zip?files=file/{documents?.file_name}">
                {documents?.file_name}
            </a>
        </h1>
    </div>
    <div class="w-full h-fit flex items-center space-x-3 bg-[#393D5D] drop-shadow-[#fff] shadow-white pb-2 pt-4  px-10 z-50">
            <form use:enhance method="POST" action="?/upVote" class="flex items-center">
                <input type="hidden" value={idea._id} id="ideaId" name="ideaId"/>
                <LikeButton vote={postVotes?.up_vote}><span class="text-emerald-300">{idea.up_vote}</span></LikeButton>
            </form>
            <form use:enhance method="POST" action="?/downVote" class="flex items-center">
                <input type="hidden" value={idea._id} id="ideaId" name="ideaId"/>
                <DislikeButton vote={postVotes?.down_vote}>
                    <span class="text-rose-300">{idea.down_vote}</span>
                </DislikeButton>
            </form>
        <CommentButton on:event={()=>{show=!show}} state={show}>{commentCount}</CommentButton>
    </div>
    {#if show}
    <div class="space-y-5 pl-10 ">
        {#each comments as comment}
        {#if comment.idea_id == idea._id }
        <div class="flex flex-row items-center justify-start space-x-5 group">
            <div class="py-2 pl-3 pr-10 w-fit max-w-[90%] bg-gray-300  rounded-3xl flex items-start justify-center flex-col">
                <h1 class="text-black ">
                    {#if comment.is_anonymous == false}
                    <span class="text-slate-900">
                        {comment.username}
                    </span>
                    {:else}
                    <span class="text-violet-700">
                        Anonymous
                    </span>
                    {/if}
                </h1>
                {#if getComment && getComment._id == comment._id && showEdit == true}
                <form action="?/editComment" on:submit={()=>{showEdit=false; getComment =null}} use:enhance method="POST" class="flex items-center justify-start">
                        <input type="hidden" value={getComment._id} id="id" name="commentId"/>
                        <input type="hidden" value={getComment.username} id="username" name="username"/>
                        <input type="hidden" value={getComment.idea_id} id="ideaId" name="ideaId"/>
                        <input type="hidden" value={getComment.is_anonymous} id="isAnonymous" name="isAnonymous"/>
                    <div class="w-full relative">
                        <Textarea className="bg-white text-black" label="" value="{getComment.comment}" id="" placeholder="Comment" name="comment"></Textarea>
                    </div>
                </form>
                {:else }
                    <p class="text-gray-600 break-all whitespace-normal">
                        {comment.comment}
                    </p>
                {/if}
                
            </div>
            {#if user.username == comment.username}
                <div class="hidden group-hover:flex space-x-2 flex-row items-center">
                    {#if !getComment || getComment._id != comment._id}
                    <form action="?/getComment" method="POST" use:enhance>
                        <input type="hidden" value={comment._id} id="id" name="commentId"/>
                        <EditButton on:event={()=>{showEdit=true}}></EditButton>
                    </form>
                    {/if}
                    <form action="?/deleteComment" method="POST" use:enhance>
                        <input type="hidden" value={comment._id} id="id" name="commentId"/>
                        <DeleteButton></DeleteButton>
                    </form>
                </div>
            {/if}
        </div>
        {/if}
        {/each}
        {#if commentCount == 0}
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-gray-500">
                No comments yet
            </h1>
            </div>
        {/if}

    </div>
    <div class="w-full flex items-center justify-center {commentCount>0?"flex":"hidden"}">
        <div class="w-3/4 ">
            <ChevronButton on:event={()=>show=false}>Hide comments</ChevronButton>
        </div>
    </div>
    {/if}
    <div class="h-3/4 px-10 pb-20 min-h-fit ">
        <div>
            <form action="?/addComment"  use:enhance method="POST" class="flex flex-col items-start justify-center">
                <div class="flex flex-row items-center justify-center space-x-5 pb-3">
                    <span>
                        Anonymous:
                    </span>
                    <ToggleButton on:event={handleToggle}/>
                </div>
                <input type="hidden" value={idea._id} id="id" name="ideaId"/>
                <input type="hidden" value={anonymousComment} id="isAnonymous" name="isAnonymous"/>
                <div class="w-full relative">
                    <Textarea className="bg-white text-black" label="" value="" id="" placeholder="Comment" name="comment"></Textarea>
                </div>
            </form>
        </div>
    </div>
</div>