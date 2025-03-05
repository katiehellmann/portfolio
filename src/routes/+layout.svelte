<script>
	import '../app.css';
	import Footer from "$lib/components/footer.svelte";
	import Nav from "$lib/components/nav.svelte";
	import { page } from '$app/stores';
	let { children } = $props();
	// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

</script>


{#if $page.url.pathname == '/'}
	<Nav href=""/>
{:else}
	<Nav href="/"/>
{/if}
{@render children()}
<Footer />
