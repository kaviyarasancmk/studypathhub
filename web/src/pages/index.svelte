<script>
	import GetStarted from './about/GetStarted.svelte';
	import KeyFeatures from './about/KeyFeatures.svelte';
	import AboutPathHub from './about/AboutPathHub.svelte';
  import Courses from './Courses/index.svelte'
</script>

<main>
  <header class="bg-cyan-500 text-white">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-extrabold leading-tight">
        Welcome to<br>Study Path Hub
      </h1>
  
      <p class="mt-4 text-xl">
        Your Personalized Roadmap to Success
      </p>
  
      <div class="mt-8">
        <a href="/courses" class="bg-white text-blue-500 hover:bg-blue-200 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:shadow-lg">Explore Courses</a>
      </div>
    </div>
  </header>

  <AboutPathHub />

  <KeyFeatures />

  <GetStarted />

  <Courses />
  
</main>
