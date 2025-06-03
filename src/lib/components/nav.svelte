<script>
	export let href;
</script>

<nav
	class="nav bg-surface-950 text-accent-100 text-l sticky top-0 flex items-center justify-between px-4 py-3 sm:text-xl"
>
	<a id="header" class="text-2xl sm:text-3xl" href="/">[Katie Hellmann]</a>
	<div class="flex items-center">
		{#if href}
			<a class="hover:bg-accent-800/50 rounded-full px-4 py-2 leading-none transition" {href}
				>Back</a
			>
		{/if}
		<!-- <a class="px-4 py-2 leading-none rounded-full transition hover:bg-gray-700" href="/about">About</a> -->
		<a
			class="hover:bg-accent-800/50 rounded-full px-4 py-2 leading-none transition"
			href="mailto:kathellmann30@gmail.com?subject=Inquiry for Katie Hellmann &body=">Contact</a
		>
		<a
			class="hover:bg-accent-800/50 rounded-full px-4 py-2 leading-none transition"
			href="https://www.linkedin.com/in/katie-hellmann-rit/"
			target="_blank"
			rel="noopener noreferrer">Linkedin</a
		>
	</div>
</nav>
