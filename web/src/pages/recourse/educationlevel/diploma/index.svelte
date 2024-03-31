<script>
    let head = "Education and Career Paths in Tamil Nadu";
    let state = "Tamil Nadu";
    let nextpath = [
      // Previous pathways (as mentioned in previous responses)...
  
      // New pathways:
      {
        title: "After Diploma Courses",
        description: "After completing Diploma Courses in the Tamil Nadu education system, students have a variety of educational and vocational pathways available to them for further career development.",
        link: "#diploma-courses",
        subjectlink: "#diploma-courses-subjects",
        joblink: "#diploma-courses-jobs",
        advantage: "#diploma-courses-advantages",
        disadvantage: "#diploma-courses-disadvantages",
      },
      {
        title: "Advanced Diploma or Higher Education",
        description: "Students can pursue advanced diploma programs in their field of study to gain deeper knowledge and skills. They can also consider enrolling in Bachelor's degree programs, either in the same field or related areas, to expand their academic qualifications.",
        link: "#advanced-diploma-or-higher-education",
        subjectlink: "#advanced-diploma-or-higher-education-subjects",
        joblink: "#advanced-diploma-or-higher-education-jobs",
        advantage: "#advanced-diploma-or-higher-education-advantages",
        disadvantage: "#advanced-diploma-or-higher-education-disadvantages",
      },
      {
        title: "Vocational Training and Apprenticeships",
        description: "Many industries offer vocational training and apprenticeship programs where students can gain practical experience and on-the-job training. This hands-on approach is ideal for those seeking immediate employment in skilled trades or technical professions.",
        link: "#vocational-training-and-apprenticeships",
        subjectlink: "#vocational-training-and-apprenticeships-subjects",
        joblink: "#vocational-training-and-apprenticeships-jobs",
        advantage: "#vocational-training-and-apprenticeships-advantages",
        disadvantage: "#vocational-training-and-apprenticeships-disadvantages",
      },
      {
        title: "Government Employment Exams",
        description: "Certain government jobs require specific qualifications. Students can prepare for relevant government employment exams to secure positions in fields like civil services, public administration, or defense.",
        link: "#government-employment-exams",
        subjectlink: "#government-employment-exams-subjects",
        joblink: "#government-employment-exams-jobs",
        advantage: "#government-employment-exams-advantages",
        disadvantage: "#government-employment-exams-disadvantages",
      },
      {
        title: "Entrepreneurship",
        description: "Diploma holders can explore entrepreneurship by starting their own businesses. The practical skills gained from their courses can be applied to their entrepreneurial ventures.",
        link: "#entrepreneurship",
        subjectlink: "#entrepreneurship-subjects",
        joblink: "#entrepreneurship-jobs",
        advantage: "#entrepreneurship-advantages",
        disadvantage: "#entrepreneurship-disadvantages",
      },
      {
        title: "Professional Certifications",
        description: "Depending on the diploma earned, students can pursue professional certifications relevant to their field, enhancing their credentials and employability.",
        link: "#professional-certifications",
        subjectlink: "#professional-certifications-subjects",
        joblink: "#professional-certifications-jobs",
        advantage: "#professional-certifications-advantages",
        disadvantage: "#professional-certifications-disadvantages",
      },
      {
        title: "Higher Education Abroad",
        description: "Some students may consider studying abroad, either for further education or to gain international exposure and career opportunities.",
        link: "#higher-education-abroad",
        subjectlink: "#higher-education-abroad-subjects",
        joblink: "#higher-education-abroad-jobs",
        advantage: "#higher-education-abroad-advantages",
        disadvantage: "#higher-education-abroad-disadvantages",
      },
      {
        title: "Upgrading Skills Through Short-Term Courses",
        description: "Students can opt for short-term courses to acquire new skills or stay updated in their field. This continuous learning approach can enhance their competitiveness in the job market.",
        link: "#short-term-courses",
        subjectlink: "#short-term-courses-subjects",
        joblink: "#short-term-courses-jobs",
        advantage: "#short-term-courses-advantages",
        disadvantage: "#short-term-courses-disadvantages",
      },
      {
        title: "Employment in the Private Sector",
        description: "Graduates can seek employment in various industries, applying the skills and knowledge gained during their diploma courses.",
        link: "#employment-in-the-private-sector",
        subjectlink: "#employment-in-the-private-sector-subjects",
        joblink: "#employment-in-the-private-sector-jobs",
        advantage: "#employment-in-the-private-sector-advantages",
        disadvantage: "#employment-in-the-private-sector-disadvantages",
      },
    ];
  
    let extraTips = [
    "Self-Assessment: Reflect on personal skills, strengths, and interests to determine the most suitable career path.",
    "Research: Investigate the specific requirements, job prospects, and prerequisites associated with the chosen pathway.",
    "Networking: Connect with professionals, mentors, and alumni who can provide guidance and insights.",
    "Qualifications and Exams: Determine if the chosen pathway requires additional qualifications, certifications, or entrance exams.",
    "Financial Planning: Understand the financial implications of your chosen path and seek financial aid or scholarships when applicable.",
    "Lifelong Learning: Stay updated in your field by attending seminars, workshops, or pursuing continuing education opportunities.",
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
  
  