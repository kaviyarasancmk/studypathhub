<script>
    let subjects = [
      {
        title: "Master's Degree Programs",
        description: "Master of Science (M.Sc): Students can specialize in various science disciplines, including physics, chemistry, biology, mathematics, computer science, and environmental science.",
      },
      {
        title: "Master of Arts (M.A)",
        description: "The Master of Arts programs offer specializations in literature, history, sociology, economics, philosophy, and languages such as English, Tamil, Sanskrit, and more.",
      },
      {
        title: "Master of Commerce (M.Com)",
        description: "M.Com programs allow for specialization in fields like finance, accounting, business management, and economics.",
      },
      {
        title: "Master of Business Administration (MBA)",
        description: "MBA programs offer specializations in areas like marketing, finance, human resources, information technology, and international business.",
      },
      {
        title: "Master of Engineering (M.Tech)",
        description: "Engineering disciplines, including mechanical, electrical, computer science, civil, and electronics and communication, provide opportunities for specialization.",
      },
      {
        title: "Master of Computer Applications (MCA)",
        description: "MCA programs allow students to specialize in software engineering, information technology, and computer applications.",
      },
      {
        title: "Master of Social Work (MSW)",
        description: "Students interested in social work can specialize in fields like healthcare, rural development, child welfare, and family counseling.",
      },
      {
        title: "Master of Science in Agriculture (M.Sc Agriculture)",
        description: "Specializations in agriculture may include agronomy, horticulture, soil science, and agribusiness management.",
      },
      {
        title: "Master of Fine Arts (MFA)",
        description: "Specializations in fine arts encompass visual arts, music, dance, and theatre.",
      },
      {
        title: "Master of Law (LL.M)",
        description: "LL.M programs offer specializations in constitutional law, criminal law, environmental law, intellectual property, and more.",
      },
    ];
    
    let state = "Master's Degree Programs";
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6">{state}</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 duration-300 ease-in-out">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  