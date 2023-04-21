<script>
  export let data;

  const { posts } = data;
</script>

<main>
  <h1>posts</h1>

  <ol>
    {#each posts as post}
      <li>
        <a href="/posts/{post.id}">{post.title}</a>
      </li>
    {/each}
  </ol>
</main>

