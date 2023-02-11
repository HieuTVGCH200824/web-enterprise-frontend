<script lang="ts">
	import Usergroupbutton from "../Button/Usergroupbutton.svelte";
    let barState :boolean=false;
</script>

<div class="{barState?"w-96 h-full rounded-tr-xl":"w-16 h-16 flex justify-center items-center absolute bottom-0 right-0"} duration-700 ease-in-out bg-card-indigo">
    <div class={barState?"pt-2 border-b border-white h-11 w-full flex justify-center":""}>
        <Usergroupbutton on:event={()=>{barState=!barState}}/>
    </div>
</div>