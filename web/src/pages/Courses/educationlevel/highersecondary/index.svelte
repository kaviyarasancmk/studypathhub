<script>
  let head = "Education and Career Paths in Tamil Nadu";
  let state = "Tamil Nadu";
  let nextpath = [
    {
      title: "Bachelor's Degree",
      description: "Students can pursue traditional undergraduate programs in various fields like arts, science, commerce, engineering, medicine, law, and more, depending on their interests and academic qualifications.",
      link: "/courses/educationlevel/undergraduate",
      subjectlink: "#bachelors-degree-subjects",
      joblink: "#bachelors-degree-jobs",
      advantage: "#bachelors-degree-advantages",
      disadvantage: "#bachelors-degree-disadvantages",
    },
    {
      title: "Diploma Courses",
      description: "After Higher Secondary education, students can also choose diploma courses in various fields to gain practical skills and technical knowledge.",
      link: "/courses/educationlevel/diploma",
      subjectlink: "#diploma-courses-subjects",
      joblink: "#diploma-courses-jobs",
      advantage: "#diploma-courses-advantages",
      disadvantage: "#diploma-courses-disadvantages",
    },
    {
      title: "Technical Diplomas",
      description: "Technical diploma courses in fields like engineering, computer science, and polytechnic studies provide practical skills and technical knowledge and are typically shorter in duration than full-degree programs.",
      link: "#technical-diplomas",
      subjectlink: "#technical-diplomas-subjects",
      joblink: "#technical-diplomas-jobs",
      advantage: "#technical-diplomas-advantages",
      disadvantage: "#technical-diplomas-disadvantages",
    },
    {
      title: "Paramedical Courses",
      description: "For those interested in healthcare careers, there are paramedical courses that prepare students for roles in nursing, radiology, and medical laboratory technology.",
      link: "#paramedical-courses",
      subjectlink: "#paramedical-courses-subjects",
      joblink: "#paramedical-courses-jobs",
      advantage: "#paramedical-courses-advantages",
      disadvantage: "#paramedical-courses-disadvantages",
    },
    {
      title: "ITI (Industrial Training Institute) Courses",
      description: "ITI courses offer training in various trades such as electrician, plumber, mechanic, and more, focusing on practical skills and preparing students for skilled trades.",
      link: "#iti-courses",
      subjectlink: "#iti-courses-subjects",
      joblink: "#iti-courses-jobs",
      advantage: "#iti-courses-advantages",
      disadvantage: "#iti-courses-disadvantages",
    },
    {
      title: "Vocational Courses",
      description: "Tamil Nadu offers vocational courses in sectors like hospitality, tourism, fashion design, and other specific industries. These courses provide specialized skills for particular career paths.",
      link: "#vocational-courses",
      subjectlink: "#vocational-courses-subjects",
      joblink: "#vocational-courses-jobs",
      advantage: "#vocational-courses-advantages",
      disadvantage: "#vocational-courses-disadvantages",
    },
    {
      title: "Distance Education",
      description: "Some universities in Tamil Nadu offer distance education programs that allow students to earn undergraduate and postgraduate degrees without the need for regular, on-campus attendance.",
      link: "#distance-education",
      subjectlink: "#distance-education-subjects",
      joblink: "#distance-education-jobs",
      advantage: "#distance-education-advantages",
      disadvantage: "#distance-education-disadvantages",
    },
    {
      title: "Certification Courses",
      description: "Short-term certification courses are available in fields like computer applications, web design, digital marketing, and more, which enhance practical skills and employability.",
      link: "#certification-courses",
      subjectlink: "#certification-courses-subjects",
      joblink: "#certification-courses-jobs",
      advantage: "#certification-courses-advantages",
      disadvantage: "#certification-courses-disadvantages",
    },
    {
      title: "Arts and Crafts Courses",
      description: "Students interested in traditional arts and crafts can pursue courses in pottery, sculpture, painting, and other art forms, which are deeply rooted in Tamil Nadu's culture.",
      link: "#arts-and-crafts-courses",
      subjectlink: "#arts-and-crafts-subjects",
      joblink: "#arts-and-crafts-jobs",
      advantage: "#arts-and-crafts-advantages",
      disadvantage: "#arts-and-crafts-disadvantages",
    },
  ];

  let extraTips = [
    "Self-Assessment: Understand personal interests, strengths, and career aspirations to make an informed decision.",
    "Career Counseling: Seek guidance from career counselors, teachers, or mentors to explore the most suitable options.",
    "Research: Gather information about different courses, institutions, and admission criteria.",
    "Entrance Exams: Prepare for and take any required entrance exams for specific programs.",
    "Financial Planning: Consider the cost of education and explore scholarship options or financial aid.",
    "Application Process: Complete application forms, adhere to deadlines, and submit required documents.",
    "Industry Trends: Stay updated on the latest industry trends to make informed choices about educational and career pathways.",
  ];
</script>
  
<div class="p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2
      class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500"
    >
      {head}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextpath as level (level.title)}
        <div
          class="p-6 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200"
        >
          <a href={level.link}>
            <h2
              class="mb-3 text-2xl font-semibold text-gray-800 underline-offset-2"
            >
              {level.title}
            </h2>
          </a>
          <div class="flex justify-between mb-4">
            <a href={level.subjectlink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Subjects:
              </p>
            </a>
            <a href={level.joblink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Advantage:
              </p>
            </a>
            <a href={level.advantage}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Disadvantage:
              </p>
            </a>
            <a href={level.disadvantage}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Jobs:
              </p>
            </a>
          </div>
          <div>
            <p
              class="flex flex-wrap items-center justify-start text-xs text-justify font-semibold text-gray-600"
            >
              {level.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold text-gray-800">
        Preparing for Your Educational and Career Journey:
      </h3>
      <ul class="list-disc list-inside text-gray-600">
        {#each extraTips as tip (tip)}
          <li>{tip}</li>
        {/each}
      </ul>
    </div>
  </main>
</div>