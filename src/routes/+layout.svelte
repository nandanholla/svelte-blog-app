<div>
  <nav>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/contact">contact</a>
    <a href="/posts">posts</a>
  </nav>
  <slot />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
  }
</style>
