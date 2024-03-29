<script>
    const handleClick = () => {
    isClicked = true;
    setTimeout(() => {
      isClicked = false;
    }, 1000); // Change the duration as needed
  };

</script>

<main class="text-white min-h-screen bg-gradient-to-t from-purple-500 to-blue-500 flex flex-col justify-center items-center">
    <section class="py-12 px-4 md:px-8 lg:px-16 xl:px-20">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8">Explore Different Types of Courses</h1>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Technology Courses</h3>
            <p class="text-gray-700">Explore courses in programming, web development, data science, cybersecurity, and more.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Business Courses</h3>
            <p class="text-gray-700">Learn about marketing, finance, entrepreneurship, management, and project management.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Arts and Humanities Courses</h3>
            <p class="text-gray-700">Discover courses in literature, history, philosophy, fine arts, and creative writing.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Health and Medicine Courses</h3>
            <p class="text-gray-700">Explore courses in healthcare, nursing, nutrition, medical sciences, and public health.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Science and Engineering Courses</h3>
            <p class="text-gray-700">Learn about physics, chemistry, engineering, environmental science, and computer science.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Language and Communication Courses</h3>
            <p class="text-gray-700">Discover courses in languages, communication skills, writing, public speaking, and journalism.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Design and Creativity Courses</h3>
            <p class="text-gray-700">Explore courses in graphic design, UX/UI design, animation, photography, and digital art.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Social Sciences Courses</h3>
            <p class="text-gray-700">Learn about sociology, psychology, anthropology, political science, and economics.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Personal Development Courses</h3>
            <p class="text-gray-700">Discover courses in mindfulness, leadership, time management, productivity, and self-improvement.</p>
          </div>
  
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">Lifestyle and Hobbies Courses</h3>
            <p class="text-gray-700">Explore courses in cooking, fitness, gardening, travel, and DIY projects.</p>
          </div>
        </div>

        <div class="mt-12 h-24">
            <a href="/components/signup" class="bg-white text-violet-500 px-6 py-2 rounded-full text-base font-semibold transition duration-300 hover:shadow-lg hover:px-8 hover:py-3 hover:text-lg hover:no-underline border-y-2 hover:border-lime-300 transform hover:translate-y-1 hover:scale-105 hover:rotate-3">
                Sign Up Now
            </a>
        </div>
      </div>
    </section>
  </main>
  