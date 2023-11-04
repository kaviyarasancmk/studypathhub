<!-- Contact.svelte -->
<script>
    let contactInfo = [
      { title: "Customer Support", email: "support@prospectpath.com" },
      { title: "Feedback and Suggestions", email: "feedback@prospectpath.com" },
      { title: "Technical Support", email: "techsupport@prospectpath.com" },
      { title: "Media Inquiries", email: "media@prospectpath.com" },
      { title: "Partnerships", email: "partnerships@prospectpath.com" },
      { title: "Legal", email: "legal@prospectpath.com" }
    ];
  </script>
  
  <main class="p-4">
    <h1 class="text-3xl font-semibold mb-4">Contact Us</h1>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each contactInfo as contact (contact.title)}
        <div class="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 class="text-2xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out mb-2">
            {contact.title}
          </h2>
          <p class="text-gray-600">Email: <a class="text-blue-600 hover:underline" href={"mailto:" + contact.email}>{contact.email}</a></p>
        </div>
      {/each}
    </div>
  </main>
  