<!-- Courses.svelte -->
<script>
    // You can add JavaScript logic here to fetch and display course data
    let courses = [
      { id: 1, title: "Course 1", description: "Description of Course 1" },
      { id: 2, title: "Course 2", description: "Description of Course 2" },
      { id: 3, title: "Course 3", description: "Description of Course 3" },
    ];
  </script>
  
  <main>
    <div class="container mx-auto">
      <h1 class="text-3xl font-semibold text-center my-8">Courses</h1>
  
      <!-- Course List -->
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each courses as course (course.id)}
          <li class="bg-white p-4 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold text-gray-800">{course.title}</h2>
            <p class="text-gray-600 mt-2">{course.description}</p>
            <a href="/course/{course.id}" class="text-blue-500 hover:underline mt-4 block">Learn More</a>
          </li>
        {/each}
      </ul>
    </div>
  </main>
  