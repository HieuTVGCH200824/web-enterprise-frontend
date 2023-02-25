<script lang="ts">
  import { clickOutside } from "../routes/action";

  export let name : string ="";
  export let id : string ="";
  export let content : string ="";
  export let defaultValue : string ="";

  let show :boolean = false;
  $: result = content;

$: if(content == ""){
  content=defaultValue;
}

  export let options = new Array ;

  function handleClickOutside(event) {
		show=false;
	}
</script>
  <input class="hidden" id={id} type="text" name={name} value={result}>
    <div class="relative mt-1 font-sans font-medium w-full" use:clickOutside on:click_outside={handleClickOutside}>
      <button on:click={()=>{show=!show}} type="button" class="relative w-full cursor-default rounded shadow-md shadow-left-10 border-b-2 focus:border-0 border-purple-600 shadow-slate-900 outline-none border bg-gray-500 py-2 pl-3 pr-10 text-left focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
        <span class="block truncate">{result}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
  
      <ul class="{show?"block":"hidden"} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
  
          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
        {#each options as option}
        <!-- svelte-ignore a11y-role-has-required-aria-props -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click|preventDefault={()=>{result = option.name}} class="group hover:bg-violet-600 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
          <button>
            <span class="font-normal block truncate">{option.name}</span>
            
            {#if result == option.name}
            <span class="group-hover:text-white text-violet-600 absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </span>
            {/if}
          </button>
        </li>  
        {/each}
      </ul>
    </div>
