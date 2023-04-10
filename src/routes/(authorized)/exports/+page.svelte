<script lang="ts">
    import ExportButton from "../../../components/Button/ExportButton.svelte";
    import Input from "../../../components/Input.svelte";
    import {enhance} from "$app/forms";
	import Select from "../../../components/Select.svelte";

    /** @type {import('./$types').PageData} */
export let data:any;

/** @type {import('./$types').ActionData} */
export let form:any;


    let ideaName="";

    function exportIdeaCSV(){
        window.open(`http://localhost:8080/export-ideas-to-csv?csvPath=file/${ideaName}.csv`)
    }
    
    function exportDepartmentCSV(event){
            const formData = new FormData(event.target);
            const departmentId = formData.get('departmentId');
            window.open(`http://localhost:8080/export-ideas-to-csv-department?department=${departmentId}`)
        
    }

    function exportByDate(event){
        const formData = new FormData(event.target);
        const startDate =  formData.get('from');
        const endDate = formData.get('to');
        const from =  new Date(startDate).toISOString()
        const to = new Date(endDate).toISOString()
        window.open(`http://localhost:8080/export-ideas-to-csv-date?from=${from}&to=${to}`)
    }

</script>
<div class="flex flex-row items-center justify-around  max-md:flex-col max-md:space-y-16 max-md:mb-24">
<div class="flex items-center justify-center">
    <div class="flex flex-col items-center justify-center space-y-5">
        <h1 class="font-bold text-2xl">Export ideas to CSV</h1>
            <Input label="" type="text" bind:value={ideaName} required={true} name="exportName" id="exportName" placeholder="Export Name"></Input>
            <ExportButton on:event={exportIdeaCSV}><span>Export</span></ExportButton>
    </div>
</div>
<div class="flex items-center justify-center">
    <div class="flex flex-col items-center justify-center space-y-5">
        <h1 class="font-bold text-2xl">Export department to CSV</h1>
        <form on:submit|preventDefault={exportDepartmentCSV} class="flex flex-col items-center justify-center space-y-5">
            <Select title="Department" defaultValue="" name="departmentId" options={data.departments}></Select>
            <ExportButton><span>Export</span></ExportButton>
        </form>
    </div>
</div>
<div class="flex items-center justify-center">
    <div class="flex flex-col items-center justify-center space-y-5">
        <h1 class="font-bold text-2xl">Export to CSV by date</h1>
        <form on:submit|preventDefault={exportByDate} class="flex flex-col items-center justify-center space-y-5">
            <div>
                <Input required={true} label="From" type="datetime-local" value="" id="first_closure" name="from" placeholder=""></Input>
            </div>
            <div>
                <Input required={true} label="To" type="datetime-local" value="" id="final_closure" name="to" placeholder=""></Input>
            </div>           
            <ExportButton><span>Export</span></ExportButton>
        </form>
        </div>
</div>
</div>
