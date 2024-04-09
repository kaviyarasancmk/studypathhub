<script>
  let head = "Education and Career Paths in Tamil Nadu";
  let state = "Tamil Nadu";
  let nextpath = [
    // Previous pathways (as mentioned in previous responses)...

    // New pathways:
    {
      title: "Doctoral Studies",
      description: "Pursuing a Ph.D. allows students to engage in advanced research and contribute to their field's knowledge. This path is suitable for those seeking academic or research-oriented careers.",
      link: "#doctoral-studies",
      subjectlink: "#doctoral-studies-subjects",
      joblink: "#doctoral-studies-jobs",
      advantage: "#doctoral-studies-advantages",
      disadvantage: "#doctoral-studies-disadvantages",
    },
    {
      title: "Teaching and Education",
      description: "Graduates can enter the field of education by becoming teachers, professors, or education administrators. This can involve pursuing a B.Ed. and other teaching qualifications.",
      link: "#teaching-and-education",
      subjectlink: "#teaching-and-education-subjects",
      joblink: "#teaching-and-education-jobs",
      advantage: "#teaching-and-education-advantages",
      disadvantage: "#teaching-and-education-disadvantages",
    },
    {
      title: "Academic Research",
      description: "Research positions at universities, research institutions, or in the private sector are available to postgraduates who wish to conduct research and contribute to academic or scientific knowledge.",
      link: "#academic-research",
      subjectlink: "#academic-research-subjects",
      joblink: "#academic-research-jobs",
      advantage: "#academic-research-advantages",
      disadvantage: "#academic-research-disadvantages",
    },
    {
      title: "Management and Business",
      description: "MBA programs or executive management courses can be pursued for those interested in leadership, entrepreneurship, and business management roles.",
      link: "#management-and-business",
      subjectlink: "#management-and-business-subjects",
      joblink: "#management-and-business-jobs",
      advantage: "#management-and-business-advantages",
      disadvantage: "#management-and-business-disadvantages",
    },
    {
      title: "Technical and Vocational Courses",
      description: "Postgraduates can opt for technical or vocational courses to develop specific skills. This may include courses in IT, engineering, or specialized trades.",
      link: "#technical-and-vocational-courses",
      subjectlink: "#technical-and-vocational-courses-subjects",
      joblink: "#technical-and-vocational-courses-jobs",
      advantage: "#technical-and-vocational-courses-advantages",
      disadvantage: "#technical-and-vocational-courses-disadvantages",
    },
    {
      title: "Government Examinations",
      description: "Aspiring civil servants can prepare for competitive examinations such as the Civil Services Examination (UPSC) to enter the Indian Administrative Services (IAS), Indian Police Services (IPS), and other government roles.",
      link: "#government-examinations",
      subjectlink: "#government-examinations-subjects",
      joblink: "#government-examinations-jobs",
      advantage: "#government-examinations-advantages",
      disadvantage: "#government-examinations-disadvantages",
    },
    {
      title: "International Career Opportunities",
      description: "Graduates can explore career opportunities abroad, leveraging their postgraduate qualifications to seek employment or advanced study programs overseas.",
      link: "#international-career-opportunities",
      subjectlink: "#international-career-opportunities-subjects",
      joblink: "#international-career-opportunities-jobs",
      advantage: "#international-career-opportunities-advantages",
      disadvantage: "#international-career-opportunities-disadvantages",
    },
    {
      title: "Entrepreneurship",
      description: "Postgraduates interested in entrepreneurship can start their own businesses, leveraging their expertise in their field.",
      link: "#entrepreneurship",
      subjectlink: "#entrepreneurship-subjects",
      joblink: "#entrepreneurship-jobs",
      advantage: "#entrepreneurship-advantages",
      disadvantage: "#entrepreneurship-disadvantages",
    },
    {
      title: "After Postgraduate Studies",
      description: "After completing postgraduate studies in the Tamil Nadu education system, students have a plethora of educational and vocational pathways available to further their careers.",
      link: "#postgraduate-studies",
      subjectlink: "#postgraduate-studies-subjects",
      joblink: "#postgraduate-studies-jobs",
      advantage: "#postgraduate-studies-advantages",
      disadvantage: "#postgraduate-studies-disadvantages",
    },
    {
      title: "Research and Development",
      description: "Graduates can embark on careers in research and development, working in universities, research institutions, or private sector companies. This is an excellent choice for individuals who want to contribute to innovations and advancements in their field.",
      link: "#research-and-development",
      subjectlink: "#research-and-development-subjects",
      joblink: "#research-and-development-jobs",
      advantage: "#research-and-development-advantages",
      disadvantage: "#research-and-development-disadvantages",
    },
    {
      title: "Professional Courses and Certifications",
      description: "Depending on their field of study, postgraduates can pursue industry-specific certifications and professional courses. For example, Chartered Accountancy (CA), Certified Public Accountant (CPA), or other specialized qualifications can lead to careers in finance, accounting, and related fields.",
      link: "#professional-courses-and-certifications",
      subjectlink: "#professional-courses-and-certifications-subjects",
      joblink: "#professional-courses-and-certifications-jobs",
      advantage: "#professional-courses-and-certifications-advantages",
      disadvantage: "#professional-courses-and-certifications-disadvantages",
    },
  ];

  let extraTips = [
    "Self-Assessment: Reflect on your skills, interests, and career aspirations.",
    "Research: Investigate the specific requirements and opportunities in your chosen field.",
    "Networking: Connect with professionals and mentors who can provide guidance.",
    "Entrance Exams or Qualifications: Determine if further exams, certifications, or qualifications are necessary for your chosen path.",
    "Financial Planning: Understand the financial implications of your chosen path and seek funding or scholarships where applicable.",
    "Lifelong Learning: Stay current in your field by attending seminars, workshops, or continuing education programs.",
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
