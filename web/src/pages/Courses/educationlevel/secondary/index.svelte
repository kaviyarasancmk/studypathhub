<script>
  let nextSteps = [
    {
      title: "Higher Secondary Education (HSE)",
      description: "After completing Secondary Education, students can opt for Higher Secondary Education (HSE), also known as 11th and 12th grades. They can choose from various streams: Science, Commerce, or Arts, based on their interests and career goals.",
      subjectlink: "/courses/educationlevel/highersecondary/highersecondarysub", 
      link: "/courses/educationlevel/highersecondary",
    },
    
    {
      title: "State Board Schools",
      description: "Many students continue their education in State Board schools, following the Tamil Nadu State Board curriculum. The State Board offers a structured curriculum that prepares students for state-level board exams.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Central Board Schools (CBSE)",
      description: "Some students may choose to enroll in CBSE-affiliated schools, which follow the Central Board of Secondary Education curriculum. This option can provide a broader perspective and may be suitable for students planning to take national-level entrance exams.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Indian Certificate of Secondary Education (ICSE)",
      description: "Another option is ICSE-affiliated schools, which offer a more comprehensive curriculum and can be suitable for students who plan to study abroad or in institutions following the ICSE curriculum.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Vocational Education",
      description: "Tamil Nadu offers vocational courses at the higher secondary level. Students interested in specific trades can choose vocational education and gain skills in fields like IT, healthcare, or agriculture.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Diploma Courses",
      description: "After completing Secondary Education, students can opt for diploma courses in various fields such as engineering, nursing, or paramedical sciences. These courses offer specialized training and can lead to job opportunities.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Professional Degree Programs",
      description: "Students can pursue undergraduate degree programs in fields like engineering, medicine, law, or business by taking competitive entrance exams like Tamil Nadu Engineering Admissions (TNEA), National Eligibility cum Entrance Test (NEET), or Common Law Admission Test (CLAT).",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Arts and Science Colleges",
      description: "Many colleges in Tamil Nadu offer undergraduate degree programs in arts, science, and commerce. Students can apply to these colleges based on their Higher Secondary exam scores.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
    
    {
      title: "Government vs. Private Institutions",
      description: "Students should consider whether to pursue their education in government or private institutions, taking into account factors such as fees, faculty quality, and available facilities.",
      subjectlink: "/courses/subject/",
      link: "/courses/educationlevel/",
    },
  ];

  let extraTips = [
    "Research career options and fields of interest to choose the appropriate stream and subjects in Higher Secondary Education.",
    "Set academic goals and work consistently to achieve good results in board exams.",
    "Seek guidance from teachers, counselors, and career advisors to make informed decisions about your future studies.",
    "Be aware of the various entrance exams required for professional degree programs and start preparing early if you plan to pursue them.",
    "Explore scholarship opportunities and financial aid to support your higher education.",
    "Consider your long-term career goals when deciding between government and private institutions.",
    "Stay updated on changes in the education system and syllabus to make informed choices."
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      Higher Secondary Education and Beyond
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
      <h3 class="text-xl font-semibold text-gray-800">Tips for Planning Your Educational Journey</h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each extraTips as tip (tip)}
          <li>{tip}</li>
        {/each}
      </ul>
    </div>
  </main>
</div>
