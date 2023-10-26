<script>
    let subjects = [
      {
        title: "Core Subjects",
        description: "Tamil and English: Language is a core subject in the Tamil Nadu curriculum. Students must study both Tamil and English languages to ensure proficiency in communication.",
      },
      {
        title: "Mathematics",
        description: "Mathematics is a fundamental subject in Secondary Education, covering topics like algebra, geometry, and calculus.",
      },
      {
        title: "Science",
        description: "The science curriculum typically includes physics, chemistry, and biology, providing students with a strong foundation in the natural sciences.",
      },
      {
        title: "Social Science",
        description: "Social science subjects like history, geography, and civics are integral to understanding the world's social and historical context.",
      },
      {
        title: "Elective Courses",
        description: "Commerce: For students interested in business and finance, elective courses in commerce are available, including subjects like accountancy, economics, and business studies.",
      },
      {
        title: "Computer Science",
        description: "With the increasing importance of technology, computer science courses cover programming, software development, and information technology.",
      },
      {
        title: "Arts and Humanities",
        description: "Students can choose elective subjects like literature, fine arts, philosophy, and psychology, allowing them to explore their creative and intellectual interests.",
      },
      {
        title: "Vocational Courses",
        description: "Vocational courses cover various practical skills like computer applications, agriculture, healthcare, and more, enabling students to acquire job-ready skills.",
      },
      {
        title: "Physical Education",
        description: "Physical education is an essential elective to promote a healthy lifestyle and develop physical fitness.",
      },
      {
        title: "Additional Languages",
        description: "Students can opt for additional languages like Sanskrit, French, or German to enhance their linguistic abilities.",
      },
    ];
    
    let state = "Tamil Nadu";
  </script>
  
  <div class="container mx-auto p-6">
    <h2 class="text-3xl font-semibold text-blue-600 mb-6">{state}</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each subjects as subject (subject.title)}
        <div class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105  duration-300 ease-in-out">
          <h3 class="text-xl font-semibold text-purple-600 mb-4">{subject.title}</h3>
          <p class="text-gray-700 text-sm">{subject.description}</p>
        </div>
      {/each}
    </div>
  </div>
  