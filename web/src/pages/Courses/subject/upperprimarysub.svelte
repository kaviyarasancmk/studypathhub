<!-- UpperPrimarySub.svelte -->
<script>
    let subjects = [
      {
        title: "Language Arts",
        description: "Strengthening language skills in Tamil and English, including reading, writing, and comprehension.",
      },
      {
        title: "Mathematics",
        description: "Exploring advanced arithmetic, algebra, geometry, and data interpretation.",
      },
      {
        title: "Science",
        description: "Diving into physics, chemistry, biology, and environmental science.",
      },
      {
        title: "Social Studies",
        description: "In-depth studies of history, geography, civics, and economics.",
      },
      {
        title: "Computer Science (varies by school)",
        description: "Introduction to computer literacy and programming concepts.",
      },
      {
        title: "Physical Education",
        description: "Advancing physical fitness, sports, games, and promoting sportsmanship.",
      },
      {
        title: "Art and Craft",
        description: "Fostering creativity through drawing, painting, and craftwork.",
      },
      {
        title: "Music and Dance",
        description: "Exploring music, rhythm, and dance forms to appreciate the arts.",
      },
      {
        title: "Second Language (if applicable)",
        description: "Introduction to a second language, often Hindi or Sanskrit.",
      },
      {
        title: "Health Education",
        description: "Promoting health awareness, nutrition, and hygiene.",
      },
    ];
  
    let state = "Tamil Nadu";
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6 text-center">Subjects in Upper Primary Education ({state})</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
          <h3 class="text-xl font-semibold text-blue-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  