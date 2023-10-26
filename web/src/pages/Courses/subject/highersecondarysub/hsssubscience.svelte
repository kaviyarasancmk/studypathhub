<!-- HSSSubScience.svelte -->
<script>
    let subjects = [
      {
        title: "Physics",
        description: "Study the fundamental principles of matter and energy, including mechanics, thermodynamics, and electromagnetism.",
      },
      {
        title: "Chemistry",
        description: "Explore the composition, structure, and properties of substances, as well as chemical reactions and bonding.",
      },
      {
        title: "Biology",
        description: "Delve into the study of living organisms, genetics, evolution, and the diversity of life on Earth.",
      },
      {
        title: "Mathematics",
        description: "Develop strong mathematical skills and problem-solving abilities, covering topics like calculus and algebra.",
      },
      {
        title: "Computer Science",
        description: "Learn about programming, algorithms, data structures, and software development.",
      },
    ];
  
    let state = "Tamil Nadu"; // You can replace this with your state or region.
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6">Science Subjects in Higher Secondary ({state})</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  