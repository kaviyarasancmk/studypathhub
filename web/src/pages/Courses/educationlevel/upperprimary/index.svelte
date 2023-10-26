<!-- UpperPrimaryNext.svelte -->
<script>
  let nextSteps = [
    {
      title: "Secondary Education",
      description:
        "Transition to Classes 9 and 10 for board examinations and a strong academic foundation.",
      subjectlink: "/courses/subject/",
      link: "/secondary-education",
    },
    {
      title: "Higher Secondary Education",
      description:
        "Choose a specialized stream (Science, Commerce, or Arts) in Classes 11 and 12 for career preparation.",
      subjectlink: "/courses/subject/",
      link: "/higher-secondary-education",
    },
    {
      title: "Diploma Programs",
      description:
        "Explore short-term diploma courses in various subjects for specific skill development.",
      subjectlink: "/courses/subject/",
      link: "/diploma-programs",
    },
    {
      title: "Vocational Education",
      description:
        "Acquire practical skills through vocational courses in fields like carpentry, electronics, and more.",
      subjectlink: "/courses/subject/",
      link: "/vocational-education",
    },
    {
      title: "Technical Education",
      description:
        "Pursue technical courses in engineering and technology for advanced knowledge and skills.",
      subjectlink: "/courses/subject/",
      link: "/technical-education",
    },
  ];

  let extraTips = [
    "Set clear academic goals and plan your study schedule efficiently.",
    "Take career guidance and counseling to make informed decisions about your future.",
    "Participate in extracurricular activities to enhance your skills and interests.",
    "Stay updated with the latest trends and opportunities in your chosen field.",
    "Seek mentorship and support from teachers, mentors, and career advisors.",
  ];
</script>

<div
  class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100"
>
  <main class="container">
    <h2
      class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500"
    >
      What's Next After Upper Primary Education?
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextSteps as step (step.title)}
        <div
          class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200"
        >
          <a href={step.link}>
            <h2 class="mb-4 text-2xl font-semibold text-gray-800">
              {step.title}
            </h2>
          </a>
          <a href={step.subjectlink}>
            <p class="mb-1 text-xl font-bold text-green-700 no-underline hover:text-purple-800">Subjects:
            </p>
            </a>
          <p class="text-gray-600 mb-4">{step.description}</p>
          <ul
            class="flex flex-wrap items-center justify-start text-sm text-gray-600"
          >
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
