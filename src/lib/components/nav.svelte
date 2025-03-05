<script>
	export let href;
</script>

<nav class="bg-gray-900 text-purple-100  py-3 px-4 flex items-center justify-between">
    <a class="font-bold text-4xl tracking-tight" href="/">Katie Hellmann</a>
    <div class="text-2xl flex items-center">
        {#if href}
        <a class="px-4 py-2 leading-none rounded-full hover:bg-gray-700" {href}>Back</a>
        {/if}
        <a class="px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</a>
        <a class="px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="mailto:kathellmann30@gmail.com?subject=Inquiry for Katie Hellmann &body=">Contact</a>
    </div>
  </nav>