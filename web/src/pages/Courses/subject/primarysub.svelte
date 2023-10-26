<!-- PrimarySub.svelte -->
<script>
    let subjects = [
      {
        title: "Language Arts",
        description: "Building strong language skills through reading, writing, and vocabulary development.",
      },
      {
        title: "Mathematics",
        description: "Exploring basic arithmetic, number theory, measurement, and problem-solving.",
      },
      {
        title: "Science",
        description: "Discovering general science, life sciences, earth sciences, and physical sciences.",
      },
      {
        title: "Social Studies",
        description: "Journeying through geography, history, civics, and cultural studies.",
      },
      {
        title: "Environmental Studies",
        description: "Learning about environmental awareness, nature exploration, and basic health education.",
      },
      {
        title: "Physical Education",
        description: "Fostering physical fitness, motor skills, and an active lifestyle.",
      },
      {
        title: "Art and Craft",
        description: "Encouraging creativity, self-expression, and artistic development through drawing and crafting.",
      },
      {
        title: "Music and Dance",
        description: "Exploring music, rhythm, and basic dance movements to appreciate the arts.",
      },
      {
        title: "Computers (varies by school)",
        description: "Introduction to basic computer literacy and technology.",
      },
      {
        title: "Moral Science (varies by school)",
        description: "Lessons on values, ethics, and good conduct may be taught in some schools.",
      },
    ];
  
    let state = "Tamil Nadu";
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6 text-center">Subjects in Primary Education ({state})</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-green-100 via-green-200 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          <h3 class="text-xl font-semibold text-green-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  