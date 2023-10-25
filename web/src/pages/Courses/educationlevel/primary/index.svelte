<!-- PrimaryEducationNext.svelte -->
<script>
  let nextSteps = [
    {
      title: "Upper Primary Education",
      description: "Progress to classes 6 to 8 for more in-depth learning and skill development.",
      link: "/upper-primary-education",
    },
    {
      title: "Higher Secondary Education",
      description: "Choose a stream—Science, Commerce, or Arts—for specialized learning in classes 11 and 12.",
      link: "/higher-secondary-education",
    },
    {
      title: "Diploma Programs",
      description: "Explore short-term diploma courses for specialized knowledge and skills.",
      link: "/diploma-programs",
    },
    {
      title: "Vocational Education",
      description: "Consider vocational courses to acquire practical skills for specific careers.",
      link: "/vocational-education",
    },
    {
      title: "Technical Education",
      description: "Pursue technical courses in engineering and technology fields.",
      link: "/technical-education",
    },
  ];

  let extraTips = [
    "Set academic goals and create a study schedule to stay on track.",
    "Explore your interests and passions to choose the right educational path.",
    "Participate in extracurricular activities to develop a well-rounded skill set.",
    "Stay updated with the latest career trends and opportunities.",
    "Seek guidance from teachers, counselors, and parents to make informed decisions.",
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      What's Next After Primary Education?
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextSteps as step (step.title)}
        <div class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200">
          <a href={step.link}>
            <h2 class="mb-4 text-2xl font-semibold text-gray-800">{step.title}</h2>
          </a>
          <p class="text-gray-600 mb-4">{step.description}</p>
          <ul class="flex flex-wrap items-center justify-start text-sm text-gray-600">
            <!-- You can add more details or links if needed -->
          </ul>
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
