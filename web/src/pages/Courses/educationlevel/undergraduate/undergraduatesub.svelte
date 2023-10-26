<script>
  let subjects = [
    {
      title: "Undergraduate Programs",
      description: "Engineering: Students can pursue undergraduate degrees in various engineering disciplines, including mechanical, electrical, civil, computer science, and electronics and communication engineering.",
    },
    {
      title: "Medicine",
      description: "The medical field offers undergraduate programs like MBBS (Bachelor of Medicine, Bachelor of Surgery) and BDS (Bachelor of Dental Surgery) for aspiring doctors and dentists.",
    },
    {
      title: "Science",
      description: "Undergraduate science programs encompass a wide array of subjects such as physics, chemistry, mathematics, biology, biotechnology, and computer science.",
    },
    {
      title: "Arts and Humanities",
      description: "Students interested in the liberal arts can choose majors like literature, history, philosophy, sociology, and languages (English, Tamil, Sanskrit, etc.).",
    },
    {
      title: "Commerce",
      description: "Commerce programs include majors like accountancy, economics, business studies, and finance for those interested in business and finance-related careers.",
    },
    {
      title: "Computer Science",
      description: "Computer science programs offer majors in software engineering, information technology, and computer applications.",
    },
    {
      title: "Social Sciences",
      description: "Students can study psychology, political science, sociology, and social work to gain insights into human behavior and society.",
    },
    {
      title: "Management",
      description: "Undergraduate management programs like BBA (Bachelor of Business Administration) prepare students for careers in management and business administration.",
    },
    {
      title: "Agriculture",
      description: "Agriculture programs focus on subjects like agricultural science, horticulture, and agribusiness management.",
    },
    {
      title: "Fine Arts",
      description: "Aspiring artists can pursue degrees in fine arts, specializing in areas like visual arts, music, and dance.",
    },
  ];
  
  let state = "Undergraduate Programs";
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
