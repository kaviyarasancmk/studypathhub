<script>
    export let majorData;
  </script>


<main class="bg-gray-100">
<div class="container mx-auto p-6">
  <div id="useroption" class="mb-6 flex items-center justify-between">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold text-blue-600 pr-2 mb-2">Country:</h2>
      <select
        class="border border-gray-300 rounded px-2 py-1"
        bind:value={majorData.selectedCountry}
      >
        {#each majorData.countries as country (country)}
          <option>{country}</option>
        {/each}
      </select>
    </div>
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold text-blue-600 pr-2 mb-2">State:</h2>
      <select
        class="border border-gray-300 rounded px-2 py-1"
        bind:value={majorData.selectedState}
      >
        {#each majorData.states as state (state)}
          <option>{state}</option>
        {/each}
      </select>
    </div>
  </div>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  >
    {#each majorData.subjects.subject as subject (subject.title)}
      <div
        class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 duration-300 ease-in-out"
      >
        <a href="#{subject.title}" class="text-decoration-none">
          <h2 class="text-xl font-semibold text-purple-600 mb-4">
            {subject.title}
          </h2>
        </a>
        <p class="text-gray-700 text-sm">{subject.description}</p>
      </div>
    {/each}
  </div>
</div>
</main>