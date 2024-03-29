<script>
  import Navbar from "./components/navbar.svelte";
  import Footer from "./components/footer.svelte";
  import LandingNavBar from './components/landingNavBar.svelte'
  
  let login = true;

</script>

<main>
  <header class="w-full h-10 sticky top-0 left-0">

    {#if login}
    <Navbar />
    {:else}
    <LandingNavBar />
    {/if}
  </header>

  <section style="min-height: 80vh;">
    <slot />
  </section>

  <footer class="w-full h-10 sticky bottom-0 left-0">
    <Footer />
  </footer>
</main>
