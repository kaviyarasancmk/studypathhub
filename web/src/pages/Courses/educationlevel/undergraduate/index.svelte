<script>
  let nextSteps = [
    {
      title: "Master's Degree Programs",
      description: "Students can pursue master's degree programs in various fields, such as Master of Science (M.Sc), Master of Arts (M.A), Master of Commerce (M.Com), or Master of Business Administration (MBA), depending on their undergraduate specialization.",
      subjectlink: "/courses/educationlevel/postgraduate/postgraduatesub",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "M.Phil (Master of Philosophy)",
      description: "Those with a strong research inclination can opt for an M.Phil program, which is a research-focused postgraduate degree that can serve as a stepping stone to a Ph.D.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Ph.D. (Doctor of Philosophy)",
      description: "For those aspiring to become experts in their field and contribute to academia or research, pursuing a Ph.D. offers in-depth study and original research opportunities.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Professional and Technical Courses",
      description: "Students can enroll in professional and technical courses such as law (LL.M), medicine (MD or MS), or engineering (M.Tech) to further specialize in their chosen disciplines.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Postgraduate Diploma Courses",
      description: "There are various postgraduate diploma programs available in areas like journalism, human resource management, and international business, which can enhance job prospects.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Certificate Courses",
      description: "Students may also consider certificate courses in fields like data analytics, digital marketing, or foreign languages to acquire additional skills and credentials.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
  ];

  let extraTips = [
    "Research Programs: Explore different postgraduate programs and research the institutions offering them to find the one that best aligns with your career goals.",
    "Academic Performance: Maintain a strong academic record during your undergraduate studies as it will play a crucial role in securing admission to competitive postgraduate programs.",
    "Entrance Exams: Some postgraduate programs, like MBA, M.Tech, and Ph.D., may require students to qualify for entrance exams. Start preparing for these exams well in advance.",
    "Build a Network: Establish connections with professors, mentors, and professionals in your field of interest to gain insights, advice, and potential research opportunities.",
    "Scholarships and Financial Aid: Look for scholarships and financial aid options to help fund your postgraduate studies.",
    "Career Goals: Consider how your chosen postgraduate program aligns with your career goals and whether it provides the necessary skills and knowledge to excel in your field.",
    "Plan Ahead: Create a clear academic and career plan, keeping in mind your short-term and long-term goals. This will help you stay focused and make informed decisions.",
    "Professional Development: Engage in extracurricular activities, internships, and part-time jobs that enhance your skills and provide practical experience relevant to your field.",
    "Stay Informed: Continuously monitor changes in the job market and academic landscape to adapt and make well-informed choices."
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      Exploring Postgraduate Education
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextSteps as step (step.title)}
        <div class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200">
          <a href={step.link}>
            <h2 class="mb-4 text-2xl font-semibold text-gray-800">{step.title}</h2>
          </a>
          <a href={step.subjectlink}>
          <p class="mb-1 text-xl font-bold text-green-700 no-underline hover:text-purple-800">Subjects:
          </p>
          </a>
          <p class="text-gray-600 mb-4">{step.description}</p>
          <ul class="flex flex-wrap items-center justify-start text-sm text-gray-600">
          </ul>
        </div>
      {/each}
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-gray-800">Preparing for Future Academic and Career Endeavors</h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each extraTips as tip (tip)}
          <li>{tip}</li>
        {/each}
      </ul>
    </div>
  </main>
</div>
