<!-- HSSSubArts.svelte -->
<script>
    let subjects = [
      {
        title: "History",
        description: "Explore the past, historical events, and civilizations through the study of history.",
      },
      {
        title: "Literature",
        description: "Delve into classic and contemporary literary works and explore the world of literature.",
      },
      {
        title: "Sociology",
        description: "Study human society, social behavior, and societal structures in sociology courses.",
      },
      {
        title: "Political Science",
        description: "Learn about political systems, government structures, and political ideologies.",
      },
    ];
  
    let state = "Tamil Nadu"; // You can replace this with your state or region.
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6">Arts Subjects in Higher Secondary ({state})</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  