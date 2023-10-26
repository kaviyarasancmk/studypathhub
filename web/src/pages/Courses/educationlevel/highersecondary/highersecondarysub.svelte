<script>
  let subjects = [
    {
      title: "Core Subjects",
      description: "Language: Higher Secondary Education includes the study of languages, typically Tamil and English, to ensure proficiency in both communication and comprehension.",
    },
    {
      title: "Mathematics",
      description: "Mathematics forms a core subject, covering topics like algebra, geometry, calculus, and statistics.",
    },
    {
      title: "Physics",
      description: "The physics curriculum explores the fundamental principles of the physical world, including mechanics, optics, and electromagnetism.",
    },
    {
      title: "Chemistry",
      description: "Chemistry subjects delve into the properties and transformations of matter, covering organic and inorganic chemistry.",
    },
    {
      title: "Biology",
      description: "Higher Secondary students can choose to study biology, focusing on topics such as anatomy, physiology, and botany.",
    },
    {
      title: "Computer Science",
      description: "Computer science subjects introduce students to programming, software development, and computer applications.",
    },
    {
      title: "Elective Subjects",
      description: "Commerce: Students interested in commerce can opt for elective subjects such as accountancy, economics, and business studies.",
    },
    {
      title: "Arts and Humanities",
      description: "The curriculum includes a range of subjects in arts and humanities, such as literature, history, philosophy, and psychology.",
    },
    {
      title: "Vocational Courses",
      description: "Higher Secondary Education in Tamil Nadu offers vocational courses that provide practical skills in fields like IT, healthcare, agriculture, and more.",
    },
    {
      title: "Physical Education",
      description: "Physical education is a vital elective subject that promotes a healthy lifestyle and physical fitness.",
    },
    {
      title: "Additional Languages",
      description: "Students can choose to study additional languages like Sanskrit, French, or German to enhance their linguistic abilities.",
    },
  ];
  
  let state = "Higher Secondary Education";
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
