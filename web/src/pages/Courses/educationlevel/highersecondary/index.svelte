<!-- HigherSecondaryEducationNext.svelte -->
<script>
    let nextSteps = [
      {
        title: "Continuing with Higher Secondary Education (10+2)",
        description: "Complete the 10+2 level by continuing with Higher Secondary Education. Choose a specific stream (Science, Commerce, or Arts) based on your career interests.",
        
      },
      {
        title: "Diploma Programs",
        description: "Enroll in diploma programs in various fields like engineering, computer science, or vocational courses.",
      },
      {
        title: "Polytechnic Courses",
        description: "Pursue polytechnic courses that focus on practical skills and technical education.",
      },
      {
        title: "Certificate Courses",
        description: "Explore short-term certificate courses in specialized areas.",
      },
      {
        title: "Medical Courses",
        description: "Prepare for medical entrance exams to secure admission in courses like MBBS, BDS, Nursing, and allied health sciences.",
      },
      {
        title: "Engineering Courses",
        description: "Prepare for engineering entrance exams to enroll in undergraduate engineering programs.",
      },
      {
        title: "Commerce Courses",
        description: "Opt for commerce courses like B.Com or pursue professional courses like Chartered Accountancy (CA) or Company Secretary (CS).",
      },
      {
        title: "Arts and Humanities Courses",
        description: "Choose courses related to humanities and liberal arts, such as Bachelor of Arts (BA) in subjects like history, literature, or sociology.",
      },
      {
        title: "Vocational Courses",
        description: "Explore vocational education and skill development programs.",
      },
      {
        title: "Computer Science and IT Courses",
        description: "Pursue courses in computer science, information technology, and software development.",
      },
      {
        title: "Language Courses",
        description: "Learn additional languages or specialize in languages like French, German, or Spanish.",
      },
      {
        title: "Business and Management Courses",
        description: "Pursue courses in business administration, management, and entrepreneurship.",
      },
      {
        title: "Fine Arts and Design Courses",
        description: "Explore courses in fine arts, graphic design, or fashion design.",
      },
      {
        title: "Law Courses",
        description: "Prepare for law entrance exams to enroll in LLB (Bachelor of Laws) programs.",
      },
      {
        title: "Environmental Science and Sustainability Courses",
        description: "Study environmental science and sustainability-related courses.",
      },
      {
        title: "Social Sciences Courses",
        description: "Opt for social science courses, including psychology, sociology, and political science.",
      },
      {
        title: "Aviation and Aerospace Courses",
        description: "Pursue courses in aerospace engineering, aviation management, or pilot training.",
      },
      {
        title: "Mass Communication and Journalism Courses",
        description: "Choose courses in journalism, media studies, and communication.",
      },
      {
        title: "Hotel Management and Tourism Courses",
        description: "Enroll in courses related to hospitality management and tourism.",
      },
      {
        title: "Sports and Physical Education Courses",
        description: "Pursue courses in physical education and sports management.",
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
        What's Next After Higher Secondary Education (10+2)?
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
  