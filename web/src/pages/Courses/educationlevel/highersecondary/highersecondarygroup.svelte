<!-- HigherSecondaryGroup.svelte -->
<script>
    let groups = [
      {
        title: "Science Group",
        description: "Choose this group if you're interested in subjects like Physics, Chemistry, Mathematics, and Biology.",
        link: "/courses/subject/highersecondarysub/hsssubscience",
      },
      {
        title: "Commerce Group",
        description: "Opt for the Commerce group if you're interested in Business Studies, Accountancy, and Economics.",
        link: "/courses/subject/highersecondarysub/hsssubcommerce",
      },
      {
        title: "Arts Group (Humanities)",
        description: "Select the Arts group if you're interested in subjects like History, Geography, and Political Science.",
        link: "/courses/subject/highersecondarysub/hsssubarts",
      },
    ];
  
    let extraTips = [
      "Consider your interests and career goals when choosing a group.",
      "Consult with teachers, parents, and career counselors for guidance.",
      "Explore the subjects offered in each group to make an informed decision.",
      "Higher Secondary is a critical stage, so plan your studies effectively.",
    ];
  </script>
  
  <div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
    <main class="container">
      <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
        Choose Your Higher Secondary Group
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each groups as group (group.title)}
          <div class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200">
            <a href={group.link}>
              <h2 class="mb-4 text-2xl font-semibold text-gray-800">{group.title}</h2>
            </a>
            <p class="text-gray-600 mb-4">{group.description}</p>
          </div>
        {/each}
      </div>
      <div class="mt-8">
        <h3 class="text-xl font-semibold text-gray-800">Extra Tips:</h3>
        <ul class="list-disc list-inside text-gray-600">
          {#each extraTips as tip (tip)}
            <li>{tip}</li>
          {/each}
        </ul>
      </div>
    </main>
  </div>
  