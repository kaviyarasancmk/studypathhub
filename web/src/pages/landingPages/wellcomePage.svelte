<script>
  import { fade } from "svelte/transition";

  let titles = [
    "Your Personalized Roadmap to Academic and Career Success",
    "Empowering Paths to Excellence",
    "Tailored Strategies for Academic and Career Growth",
    "Customized Roadmaps to Achieve Your Goals",
  ];

</script>

<main
  class="text-white min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 flex flex-col justify-center items-center"
>
  <header class="p-10 text-center">
    <h1 class="text-5xl font-extrabold leading-tight text-black">
      Welcome to <span class="text-white">Career Subway</span>
    </h1>
    <p class="mt-4 text-xl">
      Your Personalized Roadmap to Academic and Career Success
    </p>
  </header>

  <div class="container mx-auto rounded">
    <div class="flex justify-center items-center">
      {#each titles as title (title)}
        <div transition:fade={{ duration: 500 }} class="text-center my-8">
          <h2 class="text-lg font-bold m-4">{title}</h2>
        </div>
      {/each}
    </div>

    <section class="bg-gray-100 py-10 mt-10 gradient-border">
      <h2
        class="text-center text-4xl font-extrabold leading-tight text-gray-800 mb-8"
      >
        Discover Plan Your Educational Journey
      </h2>

      <p class="text-lg text-violet-500 font-semibold text-center p-6">
        Career Subway is your personalized guide to success in the world of
        education. Our structured curriculum tree empowers you to navigate your
        educational journey effortlessly. Whether you're considering academic
        programs or exploring exciting career prospects, we've got you covered.
      </p>
    </section>
  </div>
</main>

<style>
  main {
    background: linear-gradient(to bottom, #3b82f6, #805ad5);
  }


  .gradient-border {
    border-width: 4px;
    border-bottom: 0px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #805ad5, #3b82f6) 1;
  }

</style>
