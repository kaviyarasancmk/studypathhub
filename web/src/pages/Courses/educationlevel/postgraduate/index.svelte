<!-- PostgraduateNext.svelte -->
<script>
    let nextSteps = [
      {
        title: "Doctoral Education (Ph.D.)",
        description: "Continue your academic journey by pursuing a Ph.D. (Doctor of Philosophy) program in your field of interest, involving in-depth research and knowledge creation.",
        link: "/doctoral-education",
      },
      {
        title: "Postdoctoral Research",
        description: "Engage in postdoctoral research positions to further advance your research skills and work on cutting-edge projects.",
        link: "/postdoctoral-research",
      },
      {
        title: "Professional Courses",
        description: "Enroll in professional courses or certifications related to your field, such as Chartered Accountancy (CA), Certified Public Accountant (CPA), or Project Management Professional (PMP).",
        link: "/professional-courses",
      },
      {
        title: "Teaching and Academia",
        description: "Pursue a career in academia by becoming a professor, lecturer, or researcher at universities and educational institutions.",
        link: "/teaching-and-academia",
      },
      {
        title: "Research and Development",
        description: "Join research and development (R&D) teams in industries or research organizations to work on innovative projects.",
        link: "/research-and-development",
      },
      {
        title: "Advanced Certifications",
        description: "Obtain advanced certifications in fields like data science, machine learning, cybersecurity, or business analytics.",
        link: "/advanced-certifications",
      },
      {
        title: "MBA (Master of Business Administration)",
        description: "Specialize in business management and leadership by pursuing an MBA program to enhance your managerial skills.",
        link: "/mba-programs",
      },
      {
        title: "Law Degrees",
        description: "Study advanced law degrees like LLM (Master of Laws) to specialize in a particular area of law.",
        link: "/law-specializations",
      },
      {
        title: "Healthcare Specializations",
        description: "Opt for medical specializations such as MD (Doctor of Medicine) or MS (Master of Surgery) for advanced medical careers.",
        link: "/healthcare-specializations",
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
        What's Next After Postgraduate Education?
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
  