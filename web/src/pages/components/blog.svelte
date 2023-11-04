<!-- Blog.svelte -->
<script>
    let posts = [
      {
        title: "The Art of Programming",
        content: "Programming is the art of instructing computers to perform tasks and solve problems. It involves creativity, logic, and a deep understanding of algorithms and data structures. The world of programming is vast, with numerous programming languages and paradigms to explore. Whether you're a beginner or an experienced developer, the journey of mastering the art of programming is both challenging and rewarding."
      },
      {
        title: "Web Development with Svelte and Tailwind CSS",
        content: "Svelte and Tailwind CSS are powerful tools for web development. Svelte offers a refreshing approach to building web applications with its component-based architecture and a focus on compilation to highly efficient JavaScript. On the other hand, Tailwind CSS provides a utility-first approach to styling, making it easy to create beautiful and responsive designs. Combining Svelte and Tailwind CSS allows developers to create web applications that are not only performant but also visually appealing. In this blog, we'll explore how to use Svelte and Tailwind CSS to create stunning web applications."
      },
      {
        title: "The Future of Artificial Intelligence",
        content: "Artificial Intelligence (AI) has seen incredible advancements in recent years. From machine learning and deep learning to natural language processing and computer vision, AI is transforming various industries. The future of AI holds even more promise, with applications in healthcare, autonomous vehicles, and more. As we continue to push the boundaries of AI, we must also consider its ethical and societal implications. The future of AI is exciting, but it also comes with responsibilities to ensure it benefits humanity as a whole."
      }
    ];
  </script>
  
  <main class="p-4">
    <h1 class="text-3xl font-semibold mb-8 text-gray-800">Blog Posts</h1>
  
    {#each posts as post (post.title)}
      <article class="mb-8 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        <h2 class="text-2xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out p-4">
          {post.title}
        </h2>
        <div class="p-4 text-gray-700">{post.content}</div>
      </article>
    {/each}
  </main>
  