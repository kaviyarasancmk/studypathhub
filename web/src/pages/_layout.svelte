<script>
  // import Navbar from "./components/navbar.svelte";
  import Footer from "./components/footer.svelte";
  import LandingNavBar from "./landingPages/landingNavBar.svelte";
</script>

<main>
  <header class="w-full h-10 sticky top-0 left-0">
    <!-- <Navbar/> -->
    <LandingNavBar />
  </header>

  <section style="min-height: 65.9vh;">
    <slot />
  </section>

  <footer>
    <Footer />
  </footer>
</main>
