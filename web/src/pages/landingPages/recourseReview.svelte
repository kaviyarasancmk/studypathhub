<script>
  import TypesofCourses from "../landingPages/typesofCourses.svelte";
  import locationData from "../../../datas/location.json";

  let userCountry = '';
  let userState = '';
  let userLanguage = '';

  const startButton =
    "bg-white text-violet-500 px-6 py-2 rounded-full text-base font-semibold transition duration-300 hover:shadow-lg hover:px-8 hover:py-3 hover:text-lg hover:no-underline border-y-2 hover:border-lime-300";

  let filteredStates = [];
  let filteredLanguages = [];

  function handleCountryChange() {
    filteredStates = locationData.state[userCountry] || [];
    filteredLanguages = locationData.language[userCountry] || [];
  }

  $: filteredStates = locationData.state[userCountry] || [];
  $: filteredLanguages = locationData.language[userCountry] || [];

</script>

<main class="text-white bg-gradient-to-t from-purple-500 to-blue-500 py-6 flex flex-col justify-center items-center">
  <section class="py-6 text-center">
    <h2 class="text-4xl font-extrabold leading-tight text-white">
      Discover Exciting Career Opportunities
    </h2>

    <div class="flex items-center flex-col justify-between my-6">
      <div>
        <label for="country" class="text-sm font-semibold block">Search or Select a country:</label>
        <input
          type="text"
          id="country"
          name="country"
          list="country-list"
          class="px-2 py-1 text-gray-800 text-sm w-64 border-b-2 border-gray-500 focus:outline-none focus:border-purple-300"
          bind:value={userCountry}
          on:input={handleCountryChange}
        />
        <datalist id="country-list">
          {#each Object.keys(locationData.state) as countryName}
            <option value={countryName} />
          {/each}
        </datalist>
      </div>
      
      <div>
        <label for="state" class="text-sm font-semibold block">Search or Select a state:</label>
        <input
          type="text"
          id="state"
          name="state"
          list="state-list"
          class="px-2 py-1 text-gray-800 text-sm w-64 border-b-2 border-gray-500 focus:outline-none focus:border-purple-300"
          bind:value={userState}
        />
        <datalist id="state-list">
          {#each filteredStates as stateName}
            <option value={stateName} />
          {/each}
        </datalist>
      </div>
      
      <div>
        <label for="language" class="text-sm font-semibold block">Search or Select a language:</label>
        <input
          type="text"
          id="language"
          name="language"
          list="language-list"
          class="px-2 py-1 text-gray-800 text-sm w-64 border-b-2 border-gray-500 focus:outline-none focus:border-purple-300"
          bind:value={userLanguage}
        />
        <datalist id="language-list">
          {#each filteredLanguages as languageName}
            <option value={languageName} />
          {/each}
        </datalist>
      </div>
    </div>

    <div class="mt-10 h-10">
      <a href="/resources/getStart" class={startButton}>Get Started</a>
    </div>
    
    <TypesofCourses />

  </section>
</main>

