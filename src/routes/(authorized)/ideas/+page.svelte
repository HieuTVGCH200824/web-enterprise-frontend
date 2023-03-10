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
    import LoginButton from '../../../components/Button/LoginButton.svelte';
    import Checkbox from '../../../components/Checkbox.svelte';
	import Select from '../../../components/Select.svelte';


    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;


let search : string= "";
let ideas  = data.body.ideas;
let showModal :boolean = false;
let modalType : string= "";

$: if(true){
    console.log(form?.success);
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
                <div class="h-60">
                    <Textarea className="" name="content" label="" value="{modalType=="edit"?`${form?.idea.content}`:""}" id="" placeholder="{modalType=="edit"?`${form?.idea.content}`:`${data.body.user.first_name} ${data.body.user.last_name}, what are you thinking?`} "/>
                </div>
                <div class="flex flex-row justify-center items-center space-x-3 absolute right-4 bottom-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                </div>
            </div>
            <div class="flex justify-center items-center space-x-5">
                <Checkbox label="" value="" id=""></Checkbox><p>Agree to the terms & conditions</p>
            </div>
            <div class="w-full px-2 flex justify-center">
                <LoginButton formaction={modalType=="edit"?`?/updateIdea`:`?/createIdea`}>Post</LoginButton>
            </div>
        </form>
    </div>
</div>
</Modal>
{/if}

<div class="bg-card-indigo flex items-center justify-center flex-col space-y-10 w-full h-fit py-10">
    <div class="w-[40%]">
        <Search bind:value={search}></Search>
    </div>
    <CreateButton on:event={()=>{showModal=true}}>Create Idea</CreateButton>
    <div class="md:w-[60%] w-full">
        <div class="w-full grid grid-cols-2 auto-rows-max gap-x-14 gap-y-10 justify-center">
            {#each ideas as idea}
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
            {/each}
        </div>
    </div>
</div>