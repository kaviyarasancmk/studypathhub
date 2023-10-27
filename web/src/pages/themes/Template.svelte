<!-- Nextpath Template -->
<script>
	import PathTemplate from '../courses/educationlevel/Template.svelte';
  import About from '../courses/educationlevel/secondary/about.svelte';
    let head = "Secondary Education Options in Tamil Nadu";
    let state = "Tamil Nadu";
    let nextpath = [
      {
        title: "Higher Secondary Education (HSE)",
        description: "Many students continue their education by enrolling in Higher Secondary Education (HSE) programs, which correspond to Classes 11 and 12. This is the equivalent of junior and senior years of high school in other educational systems. Upon successful completion, students receive the Higher Secondary Certificate (HSC) or +2 certificate.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "Strong Foundation: Secondary education in Tamil Nadu provides students with a strong foundational knowledge base in subjects such as mathematics, science, and languages, which is crucial for higher education and future career prospects.",
        disadvantage: "Rote Learning: The system often encourages rote learning, which means students may memorize information without truly understanding the concepts, which can hinder critical thinking and creativity."
      },
      {
        title: "Diploma Courses",
        description: "Some students may choose to pursue diploma courses, which are often vocational or technical in nature. These courses provide practical skills and can lead to job opportunities in various fields. Examples include Diploma in Engineering, Diploma in Nursing, and Diploma in Hotel Management.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "Affordability: The Tamil Nadu government provides various scholarships and fee concessions to economically disadvantaged students, making secondary education more affordable and accessible.",
        disadvantage: "Limited Career Choices: The system's focus on STEM subjects may limit the career choices for students who have interests in other fields, such as arts and humanities."
      },
      {
        title: "ITI (Industrial Training Institute) Courses",
        description: "ITI courses are designed to provide technical training and skills in various trades. Students can opt for ITI courses to acquire specific skills in fields like welding, plumbing, electrical work, and more.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "State Board Syllabus: The Tamil Nadu State Board curriculum is designed to align with state-level entrance exams, making it easier for students to prepare for competitive exams for higher education within the state.",
        disadvantage: "Lack of Practical Skills: The emphasis on theoretical knowledge sometimes neglects practical and vocational skills, which are essential for the job market."
      },
      {
        title: "Polytechnic Courses",
        description: "Polytechnic courses are diploma-level programs in engineering and technical fields. They offer a more in-depth education in these areas and can lead to job opportunities in related industries.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "Language Proficiency: Tamil Nadu's education system emphasizes proficiency in multiple languages, which can be an advantage in a multicultural and multilingual country like India.",
        disadvantage: "High Competition: There's intense competition for higher education in Tamil Nadu, which can lead to stress and mental health issues among students."
      },
      {
        title: "Arts, Science, or Commerce Streams",
        description: "If students choose to pursue HSE, they can select from different streams such as Arts, Science, or Commerce based on their interests and career goals. These streams lay the foundation for further education at the undergraduate level.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "Strong Focus on STEM: The curriculum places a strong emphasis on science, technology, engineering, and mathematics (STEM), preparing students for careers in these fields.",
        disadvantage: "Language Barrier: For non-native Tamil speakers, the emphasis on the Tamil language can be a disadvantage, as it may pose a language barrier for effective learning."
      },
      {
        title: "Preparation for Competitive Exams",
        description: "Some students may choose to take a year to prepare for competitive exams like NEET (for medical courses) or JEE (for engineering courses) to gain admission to professional degree programs.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "",
        disadvantage: ""
      },
      {
        title: "Distance Education",
        description: "Distance education programs are also available, which allow students to continue their education while potentially working or taking care of other responsibilities.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "",
        disadvantage: ""
      },
      {
        title: "Skill Development Programs",
        description: "Various government and private organizations offer skill development programs and courses to help students acquire practical skills that are in demand in the job market.",
        link: "#",
        subjectlink: "#",
        joblink: "#",
        advantage: "",
        disadvantage: ""
      }
    ];
  
    let extraTips = [
      "Consider your interests and career goals when choosing your education path.",
      "Take advantage of available scholarships and financial aid to make education more affordable.",
      "Explore extracurricular activities to enhance your overall skill set and personal development.",
      "Seek guidance from career counselors or mentors to make informed choices.",
      "Stay updated on changes in the education system and job market to adapt to evolving opportunities."
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
            <div class="flex justify-between mb-4">
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
  


<!-- Major Template -->
<script>
  import Majordesign from "./../../../themes/majordesign.svelte";

  let majorData = {
    countries: [
      "India",
      "Pakistan",
      "United States",
      "United Kingdom",
      "Australia",
      /* Add more countries here */
    ],
    states: [
      "Tamil Nadu",
      "Kerala",
      "Karnataka",
      "Maharashtra",
      /* Add more Indian states here */
    ],
    selectedCountry: "India",
    selectedState: "Tamil Nadu",

    subjects: {
      subject: [
        {
          title: "Tamil or Other Regional Language",
          description:
            "Students in Tamil Nadu generally study the Tamil language, although some may choose to study other regional languages if available. Tamil is usually the first language taught.",
        },
        {
          title: "English",
          description:
            "English is commonly taught as the second language, and it is an essential subject in the SSLC curriculum.",
        },
        {
          title: "Mathematics",
          description:
            "Mathematics is a core subject that includes topics such as algebra, geometry, trigonometry, and arithmetic.",
        },
        {
          title: "Science",
          description:
            "The science curriculum typically covers physics, chemistry, and biology, introducing students to fundamental scientific concepts.",
        },
        {
          title: "Social Science",
          description:
            "Social science subjects include history, geography, civics, and economics. Students learn about the history and culture of Tamil Nadu, India, and the world, as well as the principles of civics and economics.",
        },
      ],
    },
  };
</script>

<Majordesign {majorData} />

<script>
  export let majorData;
</script>

<main class="bg-gray-100">
<div class="container mx-auto p-6">
<div id="useroption" class="mb-6 flex items-center justify-between">
  <div class="mb-6 flex items-center justify-between">
    <h2 class="text-xl font-semibold text-blue-600 pr-2 mb-2">Country:</h2>
    <select
      class="border border-gray-300 rounded px-2 py-1"
      bind:value={majorData.selectedCountry}
    >
      {#each majorData.countries as country (country)}
        <option>{country}</option>
      {/each}
    </select>
  </div>
  <div class="mb-6 flex items-center justify-between">
    <h2 class="text-xl font-semibold text-blue-600 pr-2 mb-2">State:</h2>
    <select
      class="border border-gray-300 rounded px-2 py-1"
      bind:value={majorData.selectedState}
    >
      {#each majorData.states as state (state)}
        <option>{state}</option>
      {/each}
    </select>
  </div>
</div>
<div
  class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
>
  {#each majorData.subjects.subject as subject (subject.title)}
    <div
      class="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-6 rounded-lg shadow-md transition-transform hover:bg-purple-100 transform hover:scale-105 duration-300 ease-in-out"
    >
      <a href="#{subject.title}" class="text-decoration-none">
        <h2 class="text-xl font-semibold text-purple-600 mb-4">
          {subject.title}
        </h2>
      </a>
      <p class="text-gray-700 text-sm">{subject.description}</p>
    </div>
  {/each}
</div>
</div>
</main>



<!-- About Template  -->
<script>
  import Aboutdesign from "../../../themes/aboutdesign.svelte";

  let aboutData = {
    head: "Read here about Secondary Education",
    about: {
      h2: "About Secondary Education",
      point: [
        "Secondary education is the educational level that follows primary education and typically serves as a bridge between the foundational knowledge acquired in primary school and more specialized, advanced education. It is a crucial stage in a student's academic journey and typically encompasses students in the age range of 12 to 18 years, although this can vary from one country to another. Secondary education aims to provide students with a more in-depth and comprehensive understanding of various subjects, laying the foundation for higher education or vocational training.",
      ],
    },
    details: {
      h2: "Details of Secondary Education",
      point: [
        "Curriculum: Secondary education curriculum usually includes a wide range of subjects such as mathematics, science, language arts, social studies, and often elective courses in arts, music, physical education, and foreign languages.",
        "Grades: Students in secondary education are often divided into different grades or forms, such as 7th to 12th grade in the United States, and years 7 to 12 in the United Kingdom.",
        "Assessment: Students are typically assessed through examinations, projects, and continuous assessment. These results may have an impact on their academic progression and future opportunities.",
        "Transition: Successful completion of secondary education often opens the door to higher education, vocational training, or the workforce.",
      ],
    },
    advantage: {
      h2: "Advantages of Secondary Education",
      point: [
        "Preparation for Higher Education: Secondary education equips students with the necessary academic skills and knowledge needed for admission to colleges and universities.",
        "Personal Development: It is a period of personal growth and development where students mature and gain a better understanding of their interests, strengths, and weaknesses.",
        "Diverse Subjects: Secondary education offers a diverse range of subjects, allowing students to explore their interests and potential career paths.",
        "Social Skills: It provides opportunities for social interaction, helping students develop interpersonal skills and establish lifelong friendships.",
      ],
    },
    disadvantage: {
      h2: "Disadvantages of Secondary Education",
      point: [
        "Pressure: The pressure to perform well academically, especially in preparation for college or university, can be stressful for students.",
        "Standardization: Some education systems overly emphasize standardized testing, which can limit the flexibility and creativity of teaching and learning.",
        "Inequality: Disparities in the quality of secondary education can exist, affecting students' opportunities based on their socioeconomic background or location.",
        "One-Size-Fits-All: The curriculum may not cater to individual learning styles and preferences, making it challenging for some students to thrive.",
      ],
    },
  };
</script>

<Aboutdesign {aboutData} />

<script>
  export let aboutData;
</script>

<div class="p-20 pt-10 bg-gradient-to-b from-green-100 to-blue-100">
  <main class="container">
    <h2 class="py-3 mb-6 text-3xl font-extrabold text-center text-orange-600 rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-200 to-blue-300">
      {aboutData.head}
    </h2>

    <div class="mt-8">
      <h3 class="text-2xl font-semibold text-gray-800">{aboutData.about.h2}</h3>
      <p class="text-gray-600 ml-12 mt-3">{aboutData.about.point[0]}</p>
    </div>

    <div class="mt-8">
      <h3 class="text-2xl font-semibold text-gray-800">{aboutData.details.h2}</h3>
      <ul class="list-disc list-outside ml-12 mt-3 text-gray-600">
        {#each aboutData.details.point as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-2xl font-semibold text-gray-800">{aboutData.advantage.h2}</h3>
      <ul class="list-disc list-outside ml-12 mt-3 text-gray-600">
        {#each aboutData.advantage.point as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>

    <div class="mt-8">
      <h3 class="text-2xl font-semibold text-gray-800">{aboutData.disadvantage.h2}</h3>
      <ul class="list-disc list-outside ml-12 mt-3 text-gray-600">
        {#each aboutData.disadvantage.point as point}
          <li>{point}</li>
        {/each}
      </ul>
    </div>
  </main>
</div>



<!-- Jop Template -->
