<!-- HigherSecondaryEducationNext.svelte -->
<script>
    let nextSteps = [
      {
        title: "Undergraduate Education",
        description: "Enroll in Bachelor's Degree programs in various fields to specialize in your chosen area of study.",
        link: "/undergraduate-education",
      },
      {
        title: "Postgraduate Education",
        description: "Continue your academic journey by pursuing Master's Degrees in your field of interest.",
        link: "/postgraduate-education",
      },
      {
        title: "Doctoral Education (Ph.D.)",
        description: "Explore opportunities for in-depth research and academia with a Ph.D. (Doctor of Philosophy) program.",
        link: "/doctoral-education",
      },
      {
        title: "Diploma Programs",
        description: "Gain specialized knowledge and skills through short-term diploma courses in various subjects.",
        link: "/diploma-programs",
      },
      {
        title: "Vocational Education",
        description: "Acquire practical skills and training in specific professions through vocational courses.",
        link: "/vocational-education",
      },
      {
        title: "Technical Education",
        description: "Study technical courses in fields like engineering, technology, and computer science for advanced skills.",
        link: "/technical-education",
      },
    ];
  
    let extraTips = [
      "Research and choose your undergraduate program based on your career goals and interests.",
      "Stay updated with admission requirements and entrance exams for higher education.",
      "Consider internships and practical experiences to gain real-world exposure to your field.",
      "Connect with career advisors and mentors for guidance on your academic and career path.",
      "Explore scholarships and financial aid options for your education."
    ];
  </script>
  
  <div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
    <main class="container">
      <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
        What's Next After Higher Secondary Education?
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
  