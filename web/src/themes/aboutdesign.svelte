<script>
    export let aboutData;
  </script>
  
  <div class="p-20 pt-10 bg-gradient-to-b from-green-100 to-blue-100">
    <main class="container">
      <h2 class="py-3 mb-6 text-3xl font-extrabold text-center text-orange-600 rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-200 to-blue-300">
        {aboutData.head}
      </h2>
  
      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800">{aboutData.about.h2}</h3>
        <p class="text-gray-600 ml-12 mt-3">{aboutData.about.point[0]}</p>
      </div>
  
      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800">{aboutData.details.h2}</h3>
        <ul class="list-disc list-outside ml-12 mt-3 text-gray-600">
          {#each aboutData.details.point as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
  
      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800">{aboutData.advantage.h2}</h3>
        <ul class="list-disc list-outside ml-12 mt-3 text-gray-600">
          {#each aboutData.advantage.point as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
  
      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-gray-800">{aboutData.disadvantage.h2}</h3>
        <ul class="list-disc list-outside ml-12 mt-3 text-gray-600">
          {#each aboutData.disadvantage.point as point}
            <li>{point}</li>
          {/each}
        </ul>
      </div>
    </main>
  </div>
  