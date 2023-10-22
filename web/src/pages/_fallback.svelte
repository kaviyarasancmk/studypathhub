<script>
    import { url } from '@roxi/routify'
</script>

<style>
  .huge {
    font-size: 12rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<div class="e404 text-red-700">
  <div class="huge">404</div>
  <div class="big">Page not found. 
  <!-- link to the parent folder of _fallback.svelte -->
  <a class="bg-green-300 p-1 px-2 rounded" href={$url('../')}>Go back</a>
  </div>
</div>
