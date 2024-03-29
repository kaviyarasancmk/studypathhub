<script>
  export let jobData;
</script>

<div class="">
  <main class="p-6 bg-blue-100">
    <h2
      class="py-3 mb-6 text-3xl font-extrabold text-center text-green-600 rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-200 to-blue-300"
    >
      {jobData.head}
    </h2>
    <div class="rounded p-4">
      <h2 class="mb-4 text-orange-400 font-bold text-2xl">Government Sector:</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each jobData.government as government (government.jobname)}
          <div
            class="bg-gradient-to-r from-blue-100 via-green-200 to-red-200 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 duration-300 ease-in-out"
          >
            <a href="#" class="text-decoration-none">
              <h2 class="text-xl font-semibold text-purple-600 mb-4">
                {government.jobname}
              </h2>
            </a>
            <p class="text-gray-700 text-sm">{government.jobdescription}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="rounded p-4">
      <h2 class="mb-4 text-orange-400 font-bold text-2xl">Corporate Sector:</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each jobData.corporate as corporate (corporate.jobname)}
          <div
            class="bg-gradient-to-r from-blue-100 via-green-200 to-yellow-200 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 duration-300 ease-in-out"
          >
            <a href="#" class="text-decoration-none">
              <h2 class="text-xl font-semibold text-purple-600 mb-4">
                {corporate.jobname}
              </h2>
            </a>
            <p class="text-gray-700 text-sm">{corporate.jobdescription}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="mt-10 ml-5 p-2">
      <p class="text-gray-700 font-bold text-2xl mb-4">
        {jobData.extratips.title}
      </p>
      {#each jobData.extratips.tips as tips}
        <div class="">
          <p class="text-gray-700 py-2 ml-10 text-sm">{tips}</p>
        </div>
      {/each}
    </div>
  </main>
</div>
