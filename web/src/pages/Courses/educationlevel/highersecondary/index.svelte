<script>
  let nextSteps = [
    {
      title: "Undergraduate Degree Programs",
      description: "After Higher Secondary Education, students can pursue undergraduate programs in various fields. These include engineering, medicine, law, business, arts, science, and more. The choice of program should align with their interests and career goals.",
      subjectlink: "/courses/educationlevel/undergraduate/undergraduatesub", 
      link: "/courses/educationlevel/undergraduate",
    },
    
    {
      title: "Competitive Entrance Exams",
      description: "Many professional degree programs in Tamil Nadu, such as engineering, medicine (NEET), and law (CLAT), require students to excel in competitive entrance exams. Students should prepare for these exams if they have specific career aspirations.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Bachelor of Arts (BA) or Bachelor of Science (BSc)",
      description: "Students interested in liberal arts or sciences can opt for BA or BSc programs, specializing in subjects like literature, psychology, physics, or chemistry.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Commerce and Business Programs",
      description: "For those interested in commerce and business, options like B.Com and BBA are available. These programs can lead to careers in finance, marketing, or management.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Diploma Courses",
      description: "Students can explore diploma programs in various fields, such as nursing, paramedical sciences, or computer applications, which provide specialized training and job opportunities.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Vocational Courses",
      description: "Tamil Nadu offers vocational courses at the undergraduate level. These programs focus on practical skills and can lead to immediate employment in sectors like IT, healthcare, and hospitality.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
  ];

  let extraTips = [
    "Identify Interests and Goals: It's crucial for students to self-assess their interests, passions, and long-term career goals. This will help them choose the right academic path.",
    "Research and Consultation: Students should research different fields and consult with teachers, career advisors, and professionals in their desired industries to gain insights into various career options.",
    "College Selection: Choose colleges or institutions based on their reputation, faculty, facilities, and location. Government and private institutions may have different advantages, so consider what aligns best with your aspirations.",
    "Financial Planning: Determine the costs associated with your chosen path and explore scholarships, grants, and financial aid options to ease the financial burden of higher education.",
    "Skill Development: Consider developing additional skills or pursuing certification courses alongside your academic studies to enhance your employability.",
    "Networking: Build a professional network by attending seminars, workshops, and industry-related events to gain exposure to potential career opportunities.",
    "Stay Informed: Stay updated on changes in the education system, entrance exam dates, and admission procedures to ensure a smooth transition to higher education."
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      Exploring Undergraduate Education
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
      <h3 class="text-xl font-semibold text-gray-800">Planning for Future Studies and Career Prospects</h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each extraTips as tip (tip)}
          <li>{tip}</li>
        {/each}
      </ul>
    </div>
  </main>
</div>
