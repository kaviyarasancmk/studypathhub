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
  
  <main class="container mx-auto py-8 px-4 sm:px-8 lg:px-16 xl:px-32">
    <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each contactInfo as contact (contact.title)}
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out mb-4">
              {contact.title}
            </h2>
            <p class="text-gray-600">Email: <a class="text-blue-600 hover:underline" href={"mailto:" + contact.email}>{contact.email}</a></p>
          </div>
        </div>
      {/each}
    </div>
  </main>  
  