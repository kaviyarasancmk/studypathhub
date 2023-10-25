<!-- SecondaryEducationNext.svelte -->
<script>
  let nextSteps = [
    {
      title: "Higher Secondary Education",
      description: "Enroll in specialized streams (Science, Commerce, or Arts) in Classes 11 and 12 for focused learning.",
      link: "/higher-secondary-education",
    },
    {
      title: "Diploma Programs",
      description: "Explore short-term diploma courses to gain specialized knowledge and skills.",
      link: "/diploma-programs",
    },
    {
      title: "Vocational Education",
      description: "Acquire practical skills through vocational courses in various fields for specific careers.",
      link: "/vocational-education",
    },
    {
      title: "Technical Education",
      description: "Pursue technical courses in engineering and technology for advanced knowledge and skills.",
      link: "/technical-education",
    },
    {
      title: "Arts and Humanities Education",
      description: "Explore degree programs in subjects like History, Literature, Philosophy, and the Arts.",
      link: "/arts-and-humanities-education",
    },
    {
      title: "Science and Technology Education",
      description: "Pursue degrees in science and technology fields, including physics, chemistry, biology, and computer science.",
      link: "/science-and-technology-education",
    },
    {
      title: "Commerce and Business Education",
      description: "Choose courses like B.Com and M.Com to focus on accounting, finance, and business management.",
      link: "/commerce-and-business-education",
    },
    {
      title: "Education Degrees",
      description: "Prepare for teaching careers by pursuing B.Ed. (Bachelor of Education) and M.Ed. (Master of Education) degrees.",
      link: "/education-degrees",
    },
  ];

  let extraTips = [
    "Set clear academic goals and create a study schedule for Classes 11 and 12.",
    "Explore the specialized streams to align your studies with your career interests.",
    "Participate in extracurricular activities to develop a well-rounded skill set.",
    "Stay informed about entrance exams and university admission requirements.",
    "Seek guidance from teachers, mentors, and career counselors for career planning.",
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      What's Next After Secondary Education?
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
