<script>
  export let data;

  const { post } = data;
</script>

<div>
  <h1>{post.id} - {post.title}</h1>
  <p>{post.body}</p>
</div>

<style lang="scss">
  div {
    max-width: 400px;
  }

  div h1 {
    text-align: center;
  }
</style>
