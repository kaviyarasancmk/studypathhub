<!-- Login.svelte -->
<script>
    let email = '';
    let password = '';
  
    let errors = {
      email: '',
      password: '',
    };
  
    const validateForm = () => {
      errors = {};
  
      if (!email || !email.includes('@')) {
        errors.email = 'Please enter a valid email address.';
      }
  
      if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters.';
      }
  
      return Object.keys(errors).length === 0;
    };
  
    const handleLogin = () => {
      if (validateForm()) {
        // Perform login logic here
      }
    };
  </script>
  
  <main class="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg m-4">
      <h2 class="text-3xl font-semibold text-center mb-4 text-gray-800">Login</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="text-gray-700 font-medium">Email</label>
          <input type="email" id="email" class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="youremail@example.com" bind:value={email} />
          <p class="text-red-500 text-sm mt-1">{errors.email}</p>
        </div>
        <div class="mb-4">
          <label for="password" class="text-gray-700 font-medium">Password</label>
          <input type="password" id="password" class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="********" bind:value={password} />
          <p class="text-red-500 text-sm mt-1">{errors.password}</p>
        </div>
        <button
          class="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-lg p-3 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 focus:outline-none transform hover:scale-105 transition duration-300"
          on:click={handleLogin}
        >
          Login
        </button>
      </form>
      <p class="text-center mt-4">
        Don't have an account? <a href="/components/signup" class="text-blue-600 hover:underline">Sign Up</a>
      </p>
    </div>
  </main>
  