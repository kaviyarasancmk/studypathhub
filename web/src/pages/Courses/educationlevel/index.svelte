<script>
  let nextpath = [
    {
      title: "Secondary Education",
      description: "Classes 9 and 10",
      majorlink: "/courses/educationlevel/secondary/major",
      aboutlink: "/courses/educationlevel/secondary/about",
      joblink: "/courses/educationlevel/",
      link: "/courses/educationlevel/secondary",
    },
    {
      title: "Higher Secondary Education",
      description: "Classes 11 and 12",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/courses/educationlevel/highersecondary",
    },
    {
      title: "Undergraduate Education",
      description: "Bachelor's Degrees in various fields",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/courses/educationlevel/undergraduate",
    },
    {
      title: "Postgraduate Education",
      description: "Master's Degrees in various fields",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/courses/educationlevel/postgraduate",
    },
    {
      title: "Doctoral Education",
      description: "Ph.D. (Doctor of Philosophy)",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/courses/educationlevel/doctoral",
    },
    {
      title: "Diploma Programs",
      description: "Short-term diploma courses in various subjects",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/courses/educationlevel/diploma",
    },
    {
      title: "Vocational Education",
      description: "Skill-based training and education",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/vocational-education",
    },
    {
      title: "Technical Education",
      description: "Engineering and technology courses",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/technical-education",
    },
    {
      title: "Medical Education",
      description: "MBBS, BDS, and other medical degrees",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/medical-education",
    },
    {
      title: "Legal Education",
      description: "LLB (Bachelor of Laws) and LLM (Master of Laws)",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/legal-education",
    },
    {
      title: "Management Education",
      description: "MBA (Master of Business Administration)",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/management-education",
    },
    {
      title: "Arts and Humanities Education",
      description:
        "Degrees in subjects like History, Literature, Philosophy, etc.",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/arts-humanities-education",
    },
    {
      title: "Science and Technology Education",
      description: "Degrees in science and technology fields",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/science-technology-education",
    },
    {
      title: "Commerce and Business Education",
      description: "B.Com, M.Com, and related degrees",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/commerce-business-education",
    },
    {
      title: "Education Degrees",
      description:
        "B.Ed. (Bachelor of Education) and M.Ed. (Master of Education)",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/education-degrees",
    },
    {
      title: "Agricultural Education",
      description: "Degrees in agriculture and related fields",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/agricultural-education",
    },
    {
      title: "Fine Arts and Design Education",
      description: "Degrees in fine arts and design",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/fine-arts-design-education",
    },
    {
      title: "Mass Communication and Journalism",
      description: "Journalism and media-related courses",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/mass-communication-journalism",
    },
    {
      title: "Social Sciences Education",
      description: "Degrees in subjects like Sociology, Psychology, etc.",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/social-sciences-education",
    },
    {
      title: "Paramedical and Allied Health Sciences",
      description: "Courses in medical imaging, nursing, etc.",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/paramedical-allied-health-sciences",
    },
    {
      title: "Hotel Management and Tourism",
      description: "Degrees and diploma programs in hospitality",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/hotel-management-tourism",
    },
    {
      title: "Environmental Education",
      description:
        "Programs related to environmental science and sustainability",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/environmental-education",
    },
    {
      title: "Sports and Physical Education",
      description: "Courses in physical education and sports management",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/sports-physical-education",
    },
    {
      title: "Performing Arts Education",
      description: "Music, dance, and theater-related courses",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/performing-arts-education",
    },
    {
      title: "Aviation and Aerospace Education",
      description: "Aerospace engineering and aviation-related courses",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/aviation-aerospace-education",
    },
    {
      title: "Adult and Continuing Education",
      description: "Adult literacy and continuing education programs",
      majorlink: "/courses/educationlevel/major",
      aboutlink: "/courses/educationlevel/",
      joblink: "/courses/educationlevel/",
      link: "/adult-continuing-education",
    },
  ];
</script>

<div
  class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100"
>
  <main class="container">
    <h2
      class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500"
    >
      What's Your Education Level?
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each nextpath as level (level.title)}
        <div
          class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200"
        >
          <a href={level.link}>
            <h2
              class="mb-3 text-2xl font-semibold text-gray-800 underline-offset-2"
            >
              {level.title}
            </h2>
          </a>
          <div class="flex items-center justify-between mb-2">
            <a href={level.majorlink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Major
              </p>
            </a>
            <a href={level.aboutlink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                About:
              </p>
            </a>
            <a href={level.joblink}>
              <p
                class="mb-1 font-bold text-sky-600 no-underline hover:text-purple-800"
              >
                Jobs:
              </p>
            </a>
          </div>
          <p
            class="flex flex-wrap items-center justify-start text-xs text-justify font-semibold text-gray-6000"
          >
            {level.description}
          </p>
        </div>
      {/each}
    </div>
  </main>
</div>
