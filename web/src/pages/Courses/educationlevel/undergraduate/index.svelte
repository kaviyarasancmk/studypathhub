<!-- UndergraduateNext.svelte -->
<script>
  let nextSteps = [
    {
      title: "Postgraduate Education",
      description: "Continue your academic journey by pursuing Master's Degrees in your field of interest.",
      link: "/postgraduate-education",
    },
    {
      title: "Professional Courses",
      description: "Enroll in professional courses like Chartered Accountancy (CA), Company Secretary (CS), or Cost and Management Accountancy (CMA) to become a certified professional.",
      link: "/professional-courses",
    },
    {
      title: "Doctoral Education (Ph.D.)",
      description: "Explore research opportunities and academic careers by pursuing a Ph.D. (Doctor of Philosophy) program in your chosen field.",
      link: "/doctoral-education",
    },
    {
      title: "Diploma and Certificate Programs",
      description: "Gain specialized knowledge and skills through short-term diploma and certificate programs in various subjects.",
      link: "/diploma-programs",
    },
    {
      title: "Vocational and Skill-Based Training",
      description: "Acquire practical skills and hands-on training through vocational courses in areas such as plumbing, carpentry, or automotive repair.",
      link: "/vocational-training",
    },
    {
      title: "Teacher Training",
      description: "Prepare for a teaching career by pursuing Bachelor of Education (B.Ed.) or Master of Education (M.Ed.) degrees.",
      link: "/teacher-training",
    },
    {
      title: "Legal Education",
      description: "Study law and become a lawyer by enrolling in LLB (Bachelor of Laws) and LLM (Master of Laws) programs.",
      link: "/legal-education",
    },
    {
      title: "Management and Business Courses",
      description: "Further specialize in business and management with programs like Executive MBA, PGDM (Post Graduate Diploma in Management), and more.",
      link: "/business-management",
    },
    {
      title: "Healthcare and Medical Specializations",
      description: "Choose specialized medical fields such as postgraduate medical programs (MD/MS), dentistry (MDS), or pharmacy (M.Pharm).",
      link: "/healthcare-specializations",
    },
    {
      title: "Engineering and Technology Specializations",
      description: "Study advanced engineering fields such as civil engineering, electrical engineering, or computer science (M.Tech).",
      link: "/engineering-specializations",
    },
  ];

  let extraTips = [
    "Research and choose your postgraduate program based on your career goals and interests.",
    "Stay updated with admission requirements and entrance exams for higher education.",
    "Consider internships and practical experiences to gain real-world exposure to your field.",
    "Connect with career advisors and mentors for guidance on your academic and career path.",
    "Explore scholarships and financial aid options for your education."
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      What's Next After Undergraduate Education?
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
