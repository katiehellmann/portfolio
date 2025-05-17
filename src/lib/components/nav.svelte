<script>
	export let href;
</script>

<nav class="nav bg-gray-900 text-purple-100 py-3 px-4 flex items-center justify-between sticky top-0">
    <a class="text-2xl md:text-4xl font-bold  tracking-tight" href="/">Katie Hellmann</a>
    <div class="text-lg md:text-2xl flex items-center">
        {#if href}
        <a class="px-4 py-2 leading-none rounded-full transition hover:bg-gray-700"  {href}>Back</a>
        {/if}
        <a class="px-4 py-2 leading-none rounded-full transition hover:bg-gray-700" href="/about">About</a>
        <a class="px-4 py-2 leading-none rounded-full transition hover:bg-gray-700" href="mailto:kathellmann30@gmail.com?subject=Inquiry for Katie Hellmann &body=">Contact</a>
    </div>
  </nav>