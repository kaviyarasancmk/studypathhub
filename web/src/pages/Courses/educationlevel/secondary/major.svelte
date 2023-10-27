<script>
    
  let countries = [
    "India",
    "Pakistan",
    "United States",
    "United Kingdom",
    "Australia" /* Add more countries here */,
  ];
  let states = [
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Maharashtra" /* Add more Indian states here */,
  ];
  let selectedCountry = "India";
  let selectedState = "Tamil Nadu";

  let subjects = [
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
  ];
</script>

<main class="bg-gray-100">
  <div class="container mx-auto p-6">
    <div id="useroption" class="mb-6 flex items-center justify-between">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-xl font-semibold text-blue-600 pr-2 mb-2">Country:</h2>
        <select
          class="border border-gray-300 rounded px-2 py-1"
          bind:value={selectedCountry}
        >
          {#each countries as country (country)}
            <option>{country}</option>
          {/each}
        </select>
      </div>
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-xl font-semibold text-blue-600 pr-2 mb-2">State:</h2>
        <select
          class="border border-gray-300 rounded px-2 py-1"
          bind:value={selectedState}
        >
          {#each states as state (state)}
            <option>{state}</option>
          {/each}
        </select>
      </div>
    </div>
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {#each subjects as subject (subject.title)}
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
