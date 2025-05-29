<script>
	export let href;
</script>

<nav class="nav bg-surface-950 text-accent-100 text-l sm:text-xl py-3 px-4 flex items-center justify-between sticky top-0">
    <a id="header" class="text-2xl sm:text-3xl" href="/">[Katie Hellmann]</a>
    <div class="flex items-center">
        {#if href}
        <a class="px-4 py-2 leading-none rounded-full transition hover:bg-accent-800/50"  {href}>Back</a>
        {/if}
        <!-- <a class="px-4 py-2 leading-none rounded-full transition hover:bg-gray-700" href="/about">About</a> -->
        <a class="px-4 py-2 leading-none rounded-full transition hover:bg-accent-800/50" href="mailto:kathellmann30@gmail.com?subject=Inquiry for Katie Hellmann &body=">Contact</a>
    </div>
  </nav>