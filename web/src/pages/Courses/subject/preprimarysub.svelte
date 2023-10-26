<!-- PrePrimarySub.svelte -->
<script>
    let subjects = [
      {
        title: "Playgroup",
        description: "In Playgroup, the focus is on interactive play and social development. Children engage in activities that promote communication, cooperation, and teamwork.",
      },
      {
        title: "Nursery",
        description: "In Nursery (LKG - Lower Kindergarten), children continue to develop language and math skills. They also explore their environment and nature through simple observations and experiments.",
      },
      {
        title: "Kindergarten",
        description: "In Kindergarten (UKG - Upper Kindergarten), students further enhance language and math skills. They delve into more structured science topics, art and craft, physical education, and emotional development.",
      },
    ];
  
    let state = "Tamil Nadu";
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6">Subjects in Pre-Primary Education ({state})</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  