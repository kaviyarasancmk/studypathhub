<script>
  let login = false;

</script>

<div class="container mx-auto flex justify-between items-center">
    <!-- Logo and Site Name -->
    <div class="flex items-center">
      <img src="/logo.png" alt="Study Path Hub Logo" class="h-12 w-12 mr-2">
      <h1 class="text-3xl font-extrabold">Study Path Hub</h1>
    </div>

    <!-- Navigation Links -->
    <nav class="hidden md:block">
      <ul class="flex space-x-6">
        <li><a href="/" class="hover:underline text-white bold">Home</a></li>   
        <li><a href="/courses" class="hover:underline text-white bold">Courses</a></li>

        <li><a href="/components/about" class="hover:underline text-white bold">About</a></li>
        <li><a href="/components/blog" class="hover:underline text-white bold">Blog</a></li>
        <li><a href="/components/contact" class="hover:underline text-white bold">Contact</a></li>
      </ul>
    </nav>

    <!-- User Account and Search -->
    <div class="flex items-center">
      <div class="mr-6">

        {#if login === false}
            <a href="/components/signup" class="hover:underline">Sign Up</a>
            <a href="/components/login" class="hover:underline">Login</a>
          {:else}
            <a href="/account" class="hover:underline">My Account</a>
          {/if}
      </div>
      <div>
        <input type="text" placeholder="Search..." class="bg-gray-200 p-2 rounded-lg">
      </div>
    </div>
  </div>