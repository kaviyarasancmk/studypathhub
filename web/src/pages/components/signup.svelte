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
  
  <main>
    <h2>Sign Up</h2>
    <form>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} />
        <p class="text-red-500">{errors.email}</p>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} />
        <p class="text-red-500">{errors.password}</p>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" bind:value={confirmPassword} />
      </div>
      <button on:click={handleSignup}>Sign Up</button>
    </form>
  </main>
  