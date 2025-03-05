<script lang="ts">
	import '../app.css';
	import Footer from "$lib/components/footer.svelte";
	import Nav from "$lib/components/nav.svelte";
	import { page } from '$app/stores';
	let { children } = $props();
</script>

{#if $page.url.pathname == '/'}
	<Nav href=""/>
{:else}
	<Nav href="/"/>
{/if}
{@render children()}
<Footer />
