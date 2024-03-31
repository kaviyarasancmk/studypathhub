<script>
  export let nextpathData;
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-blue-100 to-green-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      {nextpathData.head}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextpathData.data as path (path.title)}
        <div class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200">
          <a href={path.link}>
            <h2 class="mb-3 text-2xl font-semibold text-gray-800 underline-offset-2">{path.title}</h2>
          </a>
          <div class="flex items-center justify-between mb-2">
            <a href={path.majorlink}>
              <p class="mb-1 font-bold text-amber-600 no-underline hover:text-bule-600">Major</p>
            </a>
            <a href={path.aboutlink}>
              <p class="mb-1 font-bold text-green-600 no-underline hover:text-bule-600">About</p>
            </a>
            <a href={path.joblink}>
              <p class="mb-1 font-bold text-purple-600 no-underline hover:text-bule-600">Jobs</p>
            </a>
          </div>
          <p class="flex flex-wrap items-center justify-start text-xs text-justify font-semibold text-gray-6000">{path.description}</p>
        </div>
      {/each}
    </div>
  </main>
</div>
