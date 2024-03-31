<!-- Dashboard.svelte -->
<script>
    // Define variables or data for your dashboard
    let userName = "John Doe";
    let userEmail = "johndoe@example.com";
    let userRole = "Student";
    let projectIdea = "ProspectPath: Guiding Your Journey to Academic and Career Success";
    let projectDescription = "A comprehensive educational platform designed to empower students.";

    // You can add more data or variables as needed
</script>

<main class="p-8">
    <!-- User Profile Section -->
    <section class="mb-8">
        <h1 class="text-3xl font-bold mb-2">Welcome, {userName}!</h1>
        <div class="flex flex-col md:flex-row items-center">
            <p class="text-lg text-gray-700 mb-2 md:mb-0 md:mr-4">Email: {userEmail}</p>
            <p class="text-lg text-gray-700">Role: {userRole}</p>
        </div>
    </section>
e
    <!-- Project Idea Section -->
    <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Your Project Idea</h2>
        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold">{projectIdea}</h3>
            <p class="text-gray-700">{projectDescription}</p>
        </div>
    </section>

    <!-- Other Dashboard Sections -->
    <!-- You can add more sections here for various features or information -->

</main>
