<script>
    import Navbar from "./components/Navbar.svelte";
    import Footer from "./components/Footer.svelte";
  </script>
  
  <main>
    <header class="bg-blue-500 text-white py-2 sticky top-0 z-50">
        <Navbar />
    </header>
  
    <section style="min-height: 65.9vh;">
      <slot />
    </section>
  
    <footer class="bg-blue-500 text-white py-2 relative bottom-0">
    <Footer />
    </footer>
  </main>
  