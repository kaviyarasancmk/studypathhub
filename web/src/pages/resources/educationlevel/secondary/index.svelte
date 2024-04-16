<script>
  let head = "Education and Career Paths in Tamil Nadu";
  let state = "Tamil Nadu";
  let nextpath = [
    {
      title: "Higher Secondary",
      description: "Students can enroll in the Higher Secondary courses, which are equivalent to 11th and 12th grades. This is the traditional path to pursue further education and is a prerequisite for many degree programs. Upon successful completion, students can take entrance exams or apply for undergraduate programs.",
      link: "/courses/educationlevel/highersecondary",
      subjectlink: "#higher-secondary-subjects",
      joblink: "#higher-secondary-jobs",
      advantage: "#higher-secondary-advantages",
      disadvantage: "#higher-secondary-disadvantages",
    },
    {
      title: "Diploma Courses",
      description: "After secondary education, students can opt for diploma courses in various fields such as engineering, polytechnic, paramedical, and others. These courses provide practical skills and technical knowledge and are usually shorter in duration than traditional degree programs.",
      link: "#diploma-courses",
      subjectlink: "#diploma-subjects",
      joblink: "#diploma-jobs",
      advantage: "#diploma-advantages",
      disadvantage: "#diploma-disadvantages",
    },
    {
      title: "Polytechnic Courses",
      description: "Polytechnic courses in Tamil Nadu are typically three-year programs that provide specialized technical education in areas like engineering, computer science, and more. These courses offer a mix of theoretical and practical knowledge.",
      link: "#polytechnic-courses",
      subjectlink: "#polytechnic-subjects",
      joblink: "#polytechnic-jobs",
      advantage: "#polytechnic-advantages",
      disadvantage: "#polytechnic-disadvantages",
    },
    {
      title: "Paramedical Courses",
      description: "For those interested in healthcare careers, there are various paramedical courses available, such as nursing, radiology technology, medical laboratory technology, and physiotherapy. These courses are designed to prepare students for careers in the healthcare industry.",
      link: "#paramedical-courses",
      subjectlink: "#paramedical-subjects",
      joblink: "#paramedical-jobs",
      advantage: "#paramedical-advantages",
      disadvantage: "#paramedical-disadvantages",
    },
    {
      title: "ITI (Industrial Training Institute) Courses",
      description: "ITI courses offer training in various trades, including electrician, plumber, mechanic, and more. These courses focus on practical skills and are ideal for students looking to enter skilled trades.",
      link: "#iti-courses",
      subjectlink: "#iti-subjects",
      joblink: "#iti-jobs",
      advantage: "#iti-advantages",
      disadvantage: "#iti-disadvantages",
    },
    {
      title: "Vocational Courses",
      description: "Tamil Nadu offers a range of vocational courses in sectors like hospitality, tourism, fashion design, and more. These courses provide specialized skills for specific industries.",
      link: "#vocational-courses",
      subjectlink: "#vocational-subjects",
      joblink: "#vocational-jobs",
      advantage: "#vocational-advantages",
      disadvantage: "#vocational-disadvantages",
    },
    {
      title: "Distance Education",
      description: "Some universities in Tamil Nadu offer distance education programs for students who may not be able to attend regular classes. These programs often lead to undergraduate or postgraduate degrees.",
      link: "#distance-education",
      subjectlink: "#distance-subjects",
      joblink: "#distance-jobs",
      advantage: "#distance-advantages",
      disadvantage: "#distance-disadvantages",
    },
    {
      title: "Certification Courses",
      description: "There are numerous short-term certification courses available in fields like computer applications, web design, digital marketing, and others. These courses can enhance skills and employability.",
      link: "#certification-courses",
      subjectlink: "#certification-subjects",
      joblink: "#certification-jobs",
      advantage: "#certification-advantages",
      disadvantage: "#certification-disadvantages",
    },
    {
      title: "Arts and Crafts Courses",
      description: "Tamil Nadu has a rich tradition of arts and crafts. Students interested in traditional arts and crafts can pursue courses in these areas, which may include pottery, sculpture, painting, and more.",
      link: "#arts-and-crafts-courses",
      subjectlink: "#arts-and-crafts-subjects",
      joblink: "#arts-and-crafts-jobs",
      advantage: "#arts-and-crafts-advantages",
      disadvantage: "#arts-and-crafts-disadvantages",
    },
  ];

  let extraTips = [
    "Research various educational institutions in Tamil Nadu to find the one that suits your career goals.",
    "Networking and internships can be instrumental in building your career in the state.",
    "Stay updated with the latest industry trends and technologies to remain competitive.",
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
          <div class="flex flex-wrap flex-col-3 justify-between mb-2">
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
