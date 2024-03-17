<!-- Signup.svelte -->
<script>
  let email = '';
  let password = '';
  let confirmPassword = '';

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

    if (password !== confirmPassword) {
      errors.password = 'Passwords do not match.';
    }

    return Object.keys(errors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      // Perform sign-up logic here
    }
  };
</script>

<main class="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
  <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
    <h2 class="text-3xl font-semibold text-center mb-4 text-gray-800">Sign Up</h2>
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
      <div class="mb-6">
        <label for="confirmPassword" class="text-gray-700 font-medium">Confirm Password</label>
        <input type="password" id="confirmPassword" class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="********" bind:value={confirmPassword} />
      </div>
      <button
        class="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-lg p-3 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus:outline-none transform hover:scale-105 transition duration-300"
        on:click={handleSignup}
      >
        Sign Up
      </button>
    </form>
    <p class="text-center mt-4">
      If you have an account? <a href="/components/login" class="text-blue-600 hover:underline">log in</a>
    </p>
  </div>
</main>

