<script lang="ts">
    export let value: string = "";
</script>
<div>
    <div class="relative mt-1 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
      </div>
      <input bind:value={value} type="email" name="email" id="email" class="border-gray-500 border-[1px] py-1 bg-transparent block w-full rounded-md  pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search" />
    </div>
  </div>