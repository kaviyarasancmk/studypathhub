<!-- Signup.svelte -->
<script>
  let name = '';
  let number = '';
  let email = '';
  let password = '';
  let confirmPassword = '';

  let errors = {
    name: '',
    number: '',
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
      // Redirect to login page
      window.location.href = "/components/login";
    }
  };
</script>

<main class="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
  <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg m-4">
    <h2 class="text-3xl font-semibold text-center mb-4 text-gray-800">Sign Up</h2>
    <form on:submit|preventDefault={handleSignup}>
      <div class="mb-4">
        <label for="name" class="text-gray-700 font-medium">Name</label>
        <input type="text" id="name" class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="Enter your name" bind:value={email} />
        <p class="text-red-500 text-sm mt-1">{errors.name}</p>
      </div>
      <div class="mb-4">
        <label for="phoneNumber" class="text-gray-700 font-medium">Phone Number</label>
        <input type="number" id="phoneNumber" class="form-input mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" placeholder="Enter your Phone Number" bind:value={email} />
        <p class="text-red-500 text-sm mt-1">{errors.number}</p>
      </div>
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
        type="submit"
        class="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-lg p-3 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus:outline-none transform hover:scale-105 transition duration-300"
      >
        Sign Up
      </button>
    </form>
    <p class="text-center mt-4">
      If you have an account? <a href="/components/login" class="text-blue-600 hover:underline">log in</a>
    </p>
  </div>
</main>
