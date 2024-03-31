<script>
  import SideBar from "./sideBar.svelte";
  import PageLoadContainer from "./pageLoadContainer.svelte";
</script>

<div class="flex min-h-screen">

  <div class="w-1/4 h-screen bg-slate-300">
    <SideBar/>
  </div>

  <div class="w-full h-screen bg-white">
    <PageLoadContainer />
  </div>  
</div>