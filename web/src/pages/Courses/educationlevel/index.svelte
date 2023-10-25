<!-- EducationLevel.svelte -->
<script>
  let educationLevels = [
    {
      title: "Pre-Primary Education",
      description: "Playgroup, Nursery, Kindergarten",
      link: "/courses/educationlevel/preprimary",
    },
    {
      title: "Primary Education",
      description: "Classes 1 to 5",
      link: "/courses/educationlevel/primary",
    },
    {
      title: "Upper Primary Education",
      description: "Classes 6 to 8",
      link: "/courses/educationlevel/upperprimary",
    },
    {
      title: "Secondary Education",
      description: "Classes 9 and 10",
      link: "/courses/educationlevel/secondary",
    },
    {
      title: "Higher Secondary Education",
      description: "Classes 11 and 12",
      link: "/courses/educationlevel/highersecondary",
    },
    {
      title: "Undergraduate Education",
      description: "Bachelor's Degrees in various fields",
      link: "/courses/educationlevel/undergraduate",
    },
    {
      title: "Postgraduate Education",
      description: "Master's Degrees in various fields",
      link: "/courses/educationlevel/postgraduate",
    },
    {
      title: "Doctoral Education",
      description: "Ph.D. (Doctor of Philosophy)",
      link: "/doctoral-education",
    },
    {
      title: "Diploma Programs",
      description: "Short-term diploma courses in various subjects",
      link: "/diploma-programs",
    },
    {
      title: "Vocational Education",
      description: "Skill-based training and education",
      link: "/vocational-education",
    },
    {
      title: "Technical Education",
      description: "Engineering and technology courses",
      link: "/technical-education",
    },
    {
      title: "Medical Education",
      description: "MBBS, BDS, and other medical degrees",
      link: "/medical-education",
    },
    {
      title: "Legal Education",
      description: "LLB (Bachelor of Laws) and LLM (Master of Laws)",
      link: "/legal-education",
    },
    {
      title: "Management Education",
      description: "MBA (Master of Business Administration)",
      link: "/management-education",
    },
    {
      title: "Arts and Humanities Education",
      description: "Degrees in subjects like History, Literature, Philosophy, etc.",
      link: "/arts-humanities-education",
    },
    {
      title: "Science and Technology Education",
      description: "Degrees in science and technology fields",
      link: "/science-technology-education",
    },
    {
      title: "Commerce and Business Education",
      description: "B.Com, M.Com, and related degrees",
      link: "/commerce-business-education",
    },
    {
      title: "Education Degrees",
      description: "B.Ed. (Bachelor of Education) and M.Ed. (Master of Education)",
      link: "/education-degrees",
    },
    {
      title: "Agricultural Education",
      description: "Degrees in agriculture and related fields",
      link: "/agricultural-education",
    },
    {
      title: "Fine Arts and Design Education",
      description: "Degrees in fine arts and design",
      link: "/fine-arts-design-education",
    },
    {
      title: "Mass Communication and Journalism",
      description: "Journalism and media-related courses",
      link: "/mass-communication-journalism",
    },
    {
      title: "Social Sciences Education",
      description: "Degrees in subjects like Sociology, Psychology, etc.",
      link: "/social-sciences-education",
    },
    {
      title: "Paramedical and Allied Health Sciences",
      description: "Courses in medical imaging, nursing, etc.",
      link: "/paramedical-allied-health-sciences",
    },
    {
      title: "Hotel Management and Tourism",
      description: "Degrees and diploma programs in hospitality",
      link: "/hotel-management-tourism",
    },
    {
      title: "Environmental Education",
      description: "Programs related to environmental science and sustainability",
      link: "/environmental-education",
    },
    {
      title: "Sports and Physical Education",
      description: "Courses in physical education and sports management",
      link: "/sports-physical-education",
    },
    {
      title: "Performing Arts Education",
      description: "Music, dance, and theater-related courses",
      link: "/performing-arts-education",
    },
    {
      title: "Aviation and Aerospace Education",
      description: "Aerospace engineering and aviation-related courses",
      link: "/aviation-aerospace-education",
    },
    {
      title: "Adult and Continuing Education",
      description: "Adult literacy and continuing education programs",
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
            <h2 class="mb-4 text-2xl font-semibold text-gray-800">{level.title}</h2>
          </a>
          <p class="text-gray-600 mb-4">{level.description}</p>
          <ul class="flex flex-wrap items-center justify-start text-sm text-gray-600">
            <!-- You can add more details or links if needed -->
          </ul>
        </div>
      {/each}
    </div>
  </main>
</div>
