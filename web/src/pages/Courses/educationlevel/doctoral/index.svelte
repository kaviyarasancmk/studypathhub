

<div class="p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2
      class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500"
    >
      {head}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextpath as level (level.title)}
        <div
          class="p-6 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200"
        >
          <a href={level.link}>
            <h2
              class="mb-3 text-2xl font-semibold text-gray-800 underline-offset-2"
            >
              {level.title}
            </h2>
          </a>
          <div class="flex justify-between mb-4">
            <a href={level.subjectlink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Subjects:
              </p>
            </a>
            <a href={level.joblink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Advantage:
              </p>
            </a>
            <a href={level.advantage}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Disadvantage:
              </p>
            </a>
            <a href={level.disadvantage}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Jobs:
              </p>
            </a>
          </div>
          <div>
            <p
              class="flex flex-wrap items-center justify-start text-xs text-justify font-semibold text-gray-600"
            >
              {level.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-gray-800">
        Preparing for Your Educational and Career Journey:
      </h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each extraTips as tip (tip)}
          <li>{tip}</li>
        {/each}
      </ul>
    </div>
  </main>
</div>
