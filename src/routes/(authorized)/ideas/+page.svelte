<script lang="ts">
    import DeleteButton from '../../../components/Button/DeleteButton.svelte';
    import IdeaCard from '../../../components/IdeaCard.svelte';
    import Search from '../../../components/SearchBar/Search.svelte';
    import EditButton from '../../../components/Button/EditButton.svelte';
    import CreateButton from '../../../components/Button/CreateButton.svelte';
    import Modal from '../../../components/Modal.svelte';
    import Input from '../../../components/Input.svelte';
    import Textarea from '../../../components/Textarea.svelte';
    import {enhance} from '$app/forms';
    import Checkbox from '../../../components/Checkbox.svelte';
	import Select from '../../../components/Select.svelte';
	import SubmitButton from '../../../components/Button/SubmitButton.svelte';
	import ChooseFile from '../../../components/ChooseFile.svelte';
	import ToggleButton from '../../../components/Button/ToggleButton.svelte';


    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;


let search : string= "";
let ideas  = data.body.ideas;
let showModal :boolean = false;
let modalType : string= "";

$: if(form?.success){
    alert(form?.success);
}

$: if(form?.error){
        alert(form.error)
        form = null
    }

$: if(!showModal){
  modalType = "";
}

$: if(form?.success){
  showModal =false;
  form=null;
  alert("Successfully perform action")
}
$: if (search) {
    ideas = data.body.ideas.filter((obj) => {
        return (
        obj.title.toLowerCase().includes(search.toLowerCase()) ||
        obj.category.toLowerCase().includes(search.toLowerCase())
        );
    });
    } else {
        ideas = data.body.ideas;
    }
let anonymousIdea : boolean = false;
function handleToggle(event){
    anonymousIdea = event.detail;
}
</script>


{#if showModal}
<Modal bind:showModal>
    <div class=" bg-[#393D5D] h-fit flex items-center flex-col pt-5 pb-10 w-full">
    <div>
        <h1 class="text-3xl font-semibold font-mono">{modalType=="edit"?"Edit Idea":"Create Idea"}</h1>
    </div>
    <div class=" flex flex-col items-center justify-center w-[60%] ">
        <form action="{modalType=="edit"?`?/updateIdea`:`?/createIdea`}" use:enhance method="POST" class="w-full space-y-5">
            <p class="{modalType=="edit"?"hidden":""} self-start">
                {data.body.user.first_name} {data.body.user.last_name}
            </p>
            {#if modalType=="edit"}
            <input type="hidden" value={form?.idea._id} id="id" name="id"/>
            {/if}
            <Input label="" type="text" value="{modalType=="edit"?`${form?.idea.title}`:""}" id="title" name="title" placeholder="Title"></Input>
            <Select defaultValue="{modalType=="edit"?`${form?.idea?.category}`:"Category"}" name="category" options={data.body.category}></Select>
            <div class="w-full relative">
                <div class="h-40">
                    <Textarea className="" name="content" label="" value="{modalType=="edit"?`${form?.idea.content}`:""}" id="" placeholder="{modalType=="edit"?`${form?.idea.content}`:`${data.body.user.first_name} ${data.body.user.last_name}, what are you thinking?`} "/>
                </div>       
            </div>
            <div class="space-y-5">
                <div class="flex flex-row items-center space-x-4">
                    <h1>Images: </h1>
                    <ChooseFile
                    type="file"
                    accept="image/*"
                    name="image"
                    />
                </div>
                <div class="flex flex-row items-center space-x-4">
                    <h1>Attachment: </h1>
                    <ChooseFile
                    type="file"
                    accept="*/*"
                    name="attachment"
                    />
                </div>
                <div class="flex flex-row items-center space-x-4">
                    <h1>Anonymous: </h1>
                    <ToggleButton on:event={handleToggle}/>
                    <input type="hidden" value={anonymousIdea} id="isAnonymous" name="isAnonymous"/>
                </div>
            </div>

            <div class="flex justify-center items-center space-x-5">
                <Checkbox name="term" label="" value="agree" id=""></Checkbox><a class="hover:text-violet-400" target="_blank" href="/terms">Agree to the terms & conditions</a>
            </div>
            <div class="w-full px-2 flex justify-center">
                <SubmitButton>Post</SubmitButton>
            </div>
        </form>
    </div>
</div>
</Modal>
{/if}

<div class="bg-card-indigo flex items-center justify-center flex-col space-y-10 w-full h-fit py-10 ">
    <div class="w-[40%]">
        <Search bind:value={search}></Search>
    </div>
    <CreateButton on:event={()=>{showModal=true}}>Create Idea</CreateButton>
    <div class="md:w-[60%] w-full">
        <div class="w-full grid grid-cols-2 auto-rows-max gap-x-14 gap-y-10 justify-center">
            {#if ideas}
            {#each ideas as idea}
            {#if idea.username == data.body.user.username }
            <div class="col-span-1 row-span-1 flex items-center justify-center flex-col">
                    <a href="/ideas/{idea._id}" class="h-full w-full">
                    <IdeaCard idea={idea}></IdeaCard>
                </a>
                    <div class="self-start pl-5 pt-4 flex flex-row space-x-3">
                        <form action="?/getIdea" method="POST" use:enhance>
                            <input type="hidden" name="id" value ="{idea._id}">
                            <EditButton on:event={()=>{showModal=true;modalType="edit"}}></EditButton>
                        </form>
                        <form action="?/deleteIdea" method="POST" use:enhance>
                            <input type="hidden" name="id" value ="{idea._id}">
                            <DeleteButton></DeleteButton>
                        </form>
                    </div>
                </div>
            {/if}
            {/each}
            {/if}
        </div>
    </div>
</div>