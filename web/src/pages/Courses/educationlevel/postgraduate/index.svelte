<script>
    let nextSteps = [
      {
        title: "Doctoral Programs (Ph.D.)",
        description: "Students can pursue a Ph.D. (Doctor of Philosophy) to conduct in-depth research in their field of interest and contribute to academic knowledge. Ph.D. programs are available in various disciplines.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
      
      {
        title: "Postdoctoral Research",
        description: "After earning a Ph.D., students may engage in postdoctoral research positions to further specialize and gain research experience before entering academia or industry.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
      
      {
        title: "Teaching and Academic Careers",
        description: "With a Master's Degree, students can explore teaching careers in schools or higher education institutions. They can also pursue academic positions in colleges and universities.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
      
      {
        title: "Industry and Corporate Roles",
        description: "Many industries and corporations seek candidates with Master's Degrees for positions in management, research, and development.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
      
      {
        title: "Government and Public Sector Jobs",
        description: "The government and public sector offer various career opportunities in areas such as administration, public policy, and civil services.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
      
      {
        title: "Entrepreneurship and Start-ups",
        description: "Students can start their own businesses, join start-up ventures, or engage in entrepreneurial endeavors, leveraging their knowledge and skills acquired during their Master's Degree.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
      
      {
        title: "Nonprofit and NGO Work",
        description: "Careers in nonprofit organizations and NGOs offer opportunities to make a positive impact on society, particularly in fields like social work, healthcare, and education.",
        subjectlink: "/courses/subject/",
        link: "/courses/educationlevel/",
      },
    ];

    let extraTips = [
      "Networking: Build a strong professional network by attending conferences, seminars, and workshops in your field to stay updated and create career opportunities.",
      "Skill Enhancement: Continue to enhance your skills and knowledge through online courses, workshops, and certifications relevant to your profession.",
      "Research and Publications: If in academia, focus on publishing research and articles in reputed journals to establish your expertise.",
      "Mentorship: Seek guidance and mentorship from experienced professionals in your field to make informed career decisions.",
      "Stay Informed: Continuously monitor industry trends, job market changes, and academic developments to adapt and make informed choices.",
      "Lifelong Learning: Embrace the concept of lifelong learning to stay relevant and competitive in your chosen field.",
      "Balance Work and Personal Life: Maintain a healthy work-life balance to prevent burnout and sustain long-term career success."
    ];
  </script>
  
  <div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
    <main class="container">
      <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
        Exploring Postgraduate and Career Opportunities
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
        <h3 class="text-xl font-semibold text-gray-800">Continuing Academic and Professional Development</h3>
        <ul class="list-disc list-inside text-gray-600">
          {#each extraTips as tip (tip)}
            <li>{tip}</li>
          {/each}
        </ul>
      </div>
    </main>
  </div>
