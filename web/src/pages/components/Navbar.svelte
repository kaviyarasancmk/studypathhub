<script>
  let login = false;
  import defoultUserLogo from "../../../assets/defoultUserLogo.png"
  import webNameLogo from "../../../assets/webNameLogo.png"
  import logo from "../../../assets/WebLogo.png";
  const NavLink = "mx-1 my-1 py-1 px-6 bg-gray-200 border-b-2 border-t-2 border-gray-200 font-bold rounded hover:bg-gray-100 hover:border-blue-300 transition duration-300 hover:no-underline";
  const accountButton = "mx-1 my-1 py-1 px-6 text-gray-700 h-ful hover:text-white bg-gray-200 bg-blue-200 border-blue-200 border-b-2 border-t-2 border-gray-200 font-bold rounded hover:bg-blue-300 hover:border-blue-300 transition duration-300 hover:no-underline"
</script>

<nav class="hidden md:block lg:block">
  <div class="m-0 px-4 flex justify-between items-center bg-white">

    {#if login}
    <div class="flex items-center justify-cente">
      <a href="/" class="hover:no-underline"><img src="{logo}" alt="Study Path Hub Logo" class="h-8 w-8"></a>
      <a href="/" class="hover:no-underline"><h1 class="text-xl font-bold mx-4 font-serif hidden  md:block lg:block">Study Path Hub</h1></a>
    </div>

    <div class="flex">
      <a href="/userDashboard/" class="{NavLink}">Dashboard</a>
      <a href="/careerResources" class="{NavLink}">Career Resources</a>
      <a href="/communityForum" class="{NavLink}">Community Forum</a>
      <a href="/academicNews" class="{NavLink}">Academic News</a>
      <a href="/Recommendations" class="{NavLink}">Recommendations</a>
    </div>

    <div class="flex items-center">
      <a href="/signup" class=""><img src="{defoultUserLogo}" alt="Profile" class="w-10 h-10 border-2 rounded-full "></a>
    </div>
    {:else}
    <div class="flex items-center justify-cente">
      <a href="/" class="hover:no-underline"><img src="{logo}" alt="Study Path Hub Logo" class="h-10 w-10"></a>
      <a href="/" class="hover:no-underline"><h1 class="text-xl font-bold mx-4 font-serif hidden  md:block lg:block">Study Path Hub</h1></a>
    </div>

    <div class="flex items-center">
      <a href="/signup" class="{accountButton}">Sign Up</a>
      <a href="/login" class="{accountButton}">Login</a>
    </div>
    {/if}
  </div>
</nav>    
