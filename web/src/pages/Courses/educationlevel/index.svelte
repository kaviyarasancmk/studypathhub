<!-- EducationLevel.svelte -->
<script>
  let educationLevels = [
    // {
    //   title: "Pre-Primary Education",
    //   description: "Playgroup, Nursery, Kindergarten",
    //   subjectlink: "/courses/subject/preprimarysub", 
    //   link: "/courses/educationlevel/preprimary",
    // },
    // {
    //   title: "Primary Education",
    //   description: "Classes 1 to 5",
    //   subjectlink: "/courses/subject/primarysub", 
    //   link: "/courses/educationlevel/primary",
    // },
    // {
    //   title: "Upper Primary Education",
    //   description: "Classes 6 to 8",
    //   subjectlink: "/courses/subject/upperprimarysub", 
    //   link: "/courses/educationlevel/upperprimary",
    // },
    {
      title: "Secondary Education",
      description: "Classes 9 and 10",
      subjectlink: "/courses/educationlevel/secondary/secondarysub",
      link: "/courses/educationlevel/secondary",
    },
    {
      title: "Higher Secondary Education",
      description: "Classes 11 and 12",
      subjectlink: "/courses/educationlevel/highersecondary/highersecondarysub", 
      link: "/courses/educationlevel/highersecondary",
    },
    {
      title: "Undergraduate Education",
      description: "Bachelor's Degrees in various fields",
      subjectlink: "/courses/educationlevel/undergraduate/undergraduatesub", 
      link: "/courses/educationlevel/undergraduate",
    },
    {
      title: "Postgraduate Education",
      description: "Master's Degrees in various fields",
      subjectlink: "/courses/educationlevel/postgraduate/postgraduatesub",
      link: "/courses/educationlevel/postgraduate",
    },
    {
      title: "Doctoral Education",
      description: "Ph.D. (Doctor of Philosophy)",
      subjectlink: "/courses/subject", 
      link: "/doctoral-education",
    },
    {
      title: "Diploma Programs",
      description: "Short-term diploma courses in various subjects",
      subjectlink: "/courses/subject", 
      link: "/diploma-programs",
    },
    {
      title: "Vocational Education",
      description: "Skill-based training and education",
      subjectlink: "/courses/subject", 
      link: "/vocational-education",
    },
    {
      title: "Technical Education",
      description: "Engineering and technology courses",
      subjectlink: "/courses/subject", 
      link: "/technical-education",
    },
    {
      title: "Medical Education",
      description: "MBBS, BDS, and other medical degrees",
      subjectlink: "/courses/subject", 
      link: "/medical-education",
    },
    {
      title: "Legal Education",
      description: "LLB (Bachelor of Laws) and LLM (Master of Laws)",
      subjectlink: "/courses/subject", 
      link: "/legal-education",
    },
    {
      title: "Management Education",
      description: "MBA (Master of Business Administration)",
      subjectlink: "/courses/subject", 
      link: "/management-education",
    },
    {
      title: "Arts and Humanities Education",
      description: "Degrees in subjects like History, Literature, Philosophy, etc.",
      subjectlink: "/courses/subject", 
      link: "/arts-humanities-education",
    },
    {
      title: "Science and Technology Education",
      description: "Degrees in science and technology fields",
      subjectlink: "/courses/subject", 
      link: "/science-technology-education",
    },
    {
      title: "Commerce and Business Education",
      description: "B.Com, M.Com, and related degrees",
      subjectlink: "/courses/subject", 
      link: "/commerce-business-education",
    },
    {
      title: "Education Degrees",
      description: "B.Ed. (Bachelor of Education) and M.Ed. (Master of Education)",
      subjectlink: "/courses/subject", 
      link: "/education-degrees",
    },
    {
      title: "Agricultural Education",
      description: "Degrees in agriculture and related fields",
      subjectlink: "/courses/subject", 
      link: "/agricultural-education",
    },
    {
      title: "Fine Arts and Design Education",
      description: "Degrees in fine arts and design",
      subjectlink: "/courses/subject", 
      link: "/fine-arts-design-education",
    },
    {
      title: "Mass Communication and Journalism",
      description: "Journalism and media-related courses",
      subjectlink: "/courses/subject", 
      link: "/mass-communication-journalism",
    },
    {
      title: "Social Sciences Education",
      description: "Degrees in subjects like Sociology, Psychology, etc.",
      subjectlink: "/courses/subject", 
      link: "/social-sciences-education",
    },
    {
      title: "Paramedical and Allied Health Sciences",
      description: "Courses in medical imaging, nursing, etc.",
      subjectlink: "/courses/subject", 
      link: "/paramedical-allied-health-sciences",
    },
    {
      title: "Hotel Management and Tourism",
      description: "Degrees and diploma programs in hospitality",
      subjectlink: "/courses/subject", 
      link: "/hotel-management-tourism",
    },
    {
      title: "Environmental Education",
      description: "Programs related to environmental science and sustainability",
      subjectlink: "/courses/subject", 
      link: "/environmental-education",
    },
    {
      title: "Sports and Physical Education",
      description: "Courses in physical education and sports management",
      subjectlink: "/courses/subject", 
      link: "/sports-physical-education",
    },
    {
      title: "Performing Arts Education",
      description: "Music, dance, and theater-related courses",
      subjectlink: "/courses/subject", 
      link: "/performing-arts-education",
    },
    {
      title: "Aviation and Aerospace Education",
      description: "Aerospace engineering and aviation-related courses",
      subjectlink: "/courses/subject", 
      link: "/aviation-aerospace-education",
    },
    {
      title: "Adult and Continuing Education",
      description: "Adult literacy and continuing education programs",
      subjectlink: "/courses/subject", 
      link: "/adult-continuing-education",
    },
  ];
</script>

<div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
      What's Your Education Level?
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each educationLevels as level (level.title)}
        <div class="p-6 z-10 font-bold transition transform bg-white border border-blue-600 rounded-lg shadow-lg hover:border-2 hover:border-green-600 hover:scale-105 bg-gradient-radial bg-gradient-to-b hover:from-green-200 hover:to-blue-200">
          <a href={level.link}>
            <h2 class="mb-3 text-2xl font-semibold text-gray-800 underline-offset-2">{level.title}</h2>
          </a>
          <a href={level.subjectlink}>
          <p class="mb-1 text-xl font-bold text-green-700 no-underline hover:text-purple-800">Subjects:
          </p>
          </a>
          <p class="text-gray-600 mb-4">{level.description}</p>
          <ul class="flex flex-wrap items-center justify-start text-xs text-gray-600">
          </ul>
        </div>
      {/each}
    </div>
  </main>
</div>
