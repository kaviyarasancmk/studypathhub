<!-- PrePrimaryNext.svelte -->
<script>
    let nextSteps = [
      {
        title: "Primary Education",
        description: "Continue your education in classes 1 to 5 and build foundational skills.",
        link: "/courses/subject/primarysub",
      },
      {
        title: "Extracurricular Activities",
        description: "Explore your interests through sports, arts, music, and more.",
        link: "/extracurricular-activities",
      },
      {
        title: "Hobby Classes",
        description: "Develop your hobbies, like painting, playing musical instruments, or learning a new language.",
        link: "/hobby-classes",
      },
      {
        title: "Education Enhancement Programs",
        description: "Participate in programs to enhance your cognitive and academic skills.",
        link: "/education-enhancement-programs",
      },
    ];
  
    let extraTips = [
      "Encourage reading at home to foster a love for books and learning.",
      "Set a regular study routine to build good study habits from a young age.",
      "Engage in interactive and educational games that stimulate critical thinking.",
      "Ensure a healthy and balanced lifestyle with a focus on nutrition and physical activity.",
    ];
  </script>
  
  <div class="flex items-center justify-center p-10 bg-gradient-to-b from-green-100 to-blue-100">
    <main class="container">
      <h2 class="py-3 mb-6 text-4xl font-extrabold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-200 via-lime-400 to-blue-500">
        What's Next After Pre-Primary Education?
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
  