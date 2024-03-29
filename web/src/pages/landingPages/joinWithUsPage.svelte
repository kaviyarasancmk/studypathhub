<!-- GetStarted.svelte -->
<script>
    const navButton =
    "bg-white text-violet-500 px-6 py-2 rounded-full text-base font-semibold transition duration-300 hover:shadow-lg hover:px-8 hover:py-3 hover:text-lg hover:no-underline border-y-2 hover:border-lime-300 transform hover:translate-y-1 hover:scale-105 hover:rotate-3 {isClicked ? 'animate-click' : ''}";

    const handleClick = () => {
    isClicked = true;
    setTimeout(() => {
      isClicked = false;
    }, 1000); // Change the duration as needed
  };

</script>

<section class="bg-gradient-to-t from-purple-500 to-blue-500 py-16">
  <div class="container mx-auto text-center">
      <!-- Large and Bold Heading -->
      <h2 class="text-4xl font-extrabold leading-tight text-white">
          Let's join With Us
      </h2>

      <!-- Description -->
      <p class="mt-8 text-xl text-gray-200">
          Join Study Path Hub for free and unlock the door to a world of educational and career possibilities. Your journey begins here.
      </p>

      <div class="mt-12 h-24">
        <a href="/components/signup" 
        class="{navButton}"
        on:click={handleClick}
        >
            Sign Up Now
        </a>
    </div>
  </div>
</section>

<style>
  .animate-click {
    animation: clickAnimation 1s ease-in-out;
  }

  @keyframes clickAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
