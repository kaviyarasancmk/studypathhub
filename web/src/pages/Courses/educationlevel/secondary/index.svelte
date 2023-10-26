<!-- SecondaryEducationNext.svelte -->
<script>
  let nextSteps = [
    {
      title: "Higher Secondary Education",
      description: "Continue with Higher Secondary Education to complete the 10+2 level. Choose a specific stream (Science, Commerce, or Arts) based on career interests.",
      link: "/higher-secondary-education",
    },
    {
      title: "Diploma Courses",
      description: "Enroll in diploma programs in various fields like engineering, computer science, or vocational courses.",
      link: "/diploma-programs",
    },
    {
      title: "Polytechnic Courses",
      description: "Pursue polytechnic courses that focus on practical skills and technical education.",
      link: "/polytechnic-courses",
    },
    {
      title: "Certificate Courses",
      description: "Explore short-term certificate courses in specialized areas.",
      link: "/certificate-courses",
    },
    {
      title: "Medical Courses",
      description: "Prepare for medical entrance exams to secure admission in courses like MBBS, BDS, Nursing, and allied health sciences.",
      link: "/medical-courses",
    },
    {
      title: "Engineering Courses",
      description: "Prepare for engineering entrance exams to enroll in undergraduate engineering programs.",
      link: "/engineering-courses",
    },
    {
      title: "Commerce Courses",
      description: "Opt for commerce courses like B.Com or pursue professional courses like Chartered Accountancy (CA) or Company Secretary (CS).",
      link: "/commerce-courses",
    },
    {
      title: "Arts and Humanities Courses",
      description: "Choose courses related to humanities and liberal arts, such as Bachelor of Arts (BA) in subjects like history, literature, or sociology.",
      link: "/arts-humanities-courses",
    },
    {
      title: "Vocational Courses",
      description: "Explore vocational education and skill development programs.",
      link: "/vocational-courses",
    },
    {
      title: "Computer Science and IT Courses",
      description: "Pursue courses in computer science, information technology, and software development.",
      link: "/computer-science-courses",
    },
    {
      title: "Language Courses",
      description: "Learn additional languages or specialize in languages like French, German, or Spanish.",
      link: "/language-courses",
    },
    {
      title: "Business and Management Courses",
      description: "Pursue courses in business administration, management, and entrepreneurship.",
      link: "/business-management-courses",
    },
    {
      title: "Fine Arts and Design Courses",
      description: "Explore courses in fine arts, graphic design, or fashion design.",
      link: "/fine-arts-courses",
    },
    {
      title: "Law Courses",
      description: "Prepare for law entrance exams to enroll in LLB (Bachelor of Laws) programs.",
      link: "/law-courses",
    },
    {
      title: "Environmental Science and Sustainability Courses",
      description: "Study environmental science and sustainability-related courses.",
      link: "/environmental-courses",
    },
    {
      title: "Social Sciences Courses",
      description: "Opt for social science courses, including psychology, sociology, and political science.",
      link: "/social-sciences-courses",
    },
    {
      title: "Aviation and Aerospace Courses",
      description: "Pursue courses in aerospace engineering, aviation management, or pilot training.",
      link: "/aviation-courses",
    },
    {
      title: "Mass Communication and Journalism Courses",
      description: "Choose courses in journalism, media studies, and communication.",
      link: "/journalism-courses",
    },
    {
      title: "Hotel Management and Tourism Courses",
      description: "Enroll in courses related to hospitality management and tourism.",
      link: "/hotel-management-courses",
    },
    {
      title: "Sports and Physical Education Courses",
      description: "Pursue courses in physical education and sports management.",
      link: "/sports-education-courses",
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
