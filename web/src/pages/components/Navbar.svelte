<script>
  let login = false;
  import logo from '../../../assets/WebLogo.png';
  const NavLink = "mx-1 my-1 py-1 px-6 bg-gray-200 border-b-2 border-t-2 border-gray-200 font-bold rounded hover:bg-gray-100 hover:border-blue-300 transition duration-300";
  const accountButton = "mx-1 my-1 py-1 px-6 text-gray-700 h-ful hover:text-white bg-gray-200 bg-blue-200 border-blue-200 border-b-2 border-t-2 border-gray-200 font-bold rounded hover:bg-blue-300 hover:border-blue-300 transition duration-300"

</script>
{#if !login}
<div class="m-0 px-4 flex justify-between items-center bg-white">
    <div class="flex items-center justify-cente">
      <a href="/" class="hover:no-underline"><img src="{logo}" alt="Study Path Hub Logo" class="h-8 w-8"></a>
      <a href="/" class="hover:no-underline"><h1 class="text-xl font-bold mx-4 font-serif hidden  md:block lg:block">Study Path Hub</h1></a>
    </div>
    <nav class="hidden md:block lg:block">
      <ul class="flex">
        <li class="{NavLink}"><a href="/" class="hover:no-underline">Home</a></li>
        <li class="{NavLink}"><a href="/components/explore" class="hover:no-underline">Courses</a></li>
        <li class="{NavLink}"><a href="/components/blog" class="hover:no-underline">Blog</a></li>
        <li class="{NavLink}"><a href="/components/about" class="hover:no-underline">About</a></li>
        <li class="{NavLink}"><a href="/components/contact" class="hover:no-underline">Contact</a></li>
      </ul>
    </nav>

    <div class="flex items-center">
      <div class="mr-6">

        {#if login === false}
            <a href="/components/signup" class="{accountButton} hover:underline">Sign Up</a>
            <a href="/components/login" class="{accountButton} hover:underline">Login</a>
          {:else}
            <a href="/account" class="{accountButton} hover:underline">My Account</a>
          {/if}
      </div>
    </div>
  </div>
  {/if}
