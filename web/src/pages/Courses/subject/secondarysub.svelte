<!-- SecondarySub.svelte -->
<script>
    let subjects = [
      {
        title: "Language Arts",
        description: "Advanced language skills in Tamil and English, including literature and essay writing.",
      },
      {
        title: "Mathematics",
        description: "In-depth algebra, geometry, trigonometry, and statistics.",
      },
      {
        title: "Science",
        description: "Comprehensive physics, chemistry, biology, and environmental science studies.",
      },
      {
        title: "Social Studies",
        description: "Detailed history, geography, civics, and economics exploration.",
      },
      {
        title: "Second Language (if applicable)",
        description: "Continuation of a second language, often Hindi or Sanskrit.",
      },
      {
        title: "Physical Education",
        description: "Advanced physical fitness, sports, and athletic activities.",
      },
      {
        title: "Computer Science (varies by school)",
        description: "Introduction to computer programming and advanced computer literacy.",
      },
      {
        title: "Health Education",
        description: "Health awareness, nutrition, personal hygiene, and well-being.",
      },
      {
        title: "Optional Electives (varies by school)",
        description: "Elective subjects or vocational courses based on school offerings.",
      },
    ];
  
    let state = "Tamil Nadu";
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6 text-center">Subjects in Secondary Education ({state})</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  