<script>
    import Navbar from "./components/Navbar.svelte";
    import Footer from "./components/Footer.svelte";
  </script>
  
  <main>
    <header>
        <Navbar/>
    </header>
  
    <section style="min-height: 65.9vh;">
      <slot />
    </section>
  
    <footer class="bg-blue-500 text-white py-2 relative bottom-0">
    <Footer />
    </footer>
  </main>
  