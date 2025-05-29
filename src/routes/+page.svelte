<script>
	import ShowcaseCard from '$lib/components/showcaseCard.svelte';
	import About from '../lib/components/about.svelte';
</script>

<div class="bg-surface-50">
	<section id="banner" class="bg-surface-50 z-10 px-12">
		<div class="mx-auto flex max-w-6xl flex-col items-center px-6 md:flex-row">
			<div class="hover:animate-squeeze w-full py-4 md:w-2/3">
				<h1 class="text-accent-900 text-3xl leading-none sm:text-4xl md:text-5xl">
					Hi! I'm <br /><span id="header" class="text-accent-600 text-4xl sm:text-5xl md:text-7xl"
						>[Katie Hellmann], <br /></span
					> Game and Web Developer.
				</h1>
			</div>
			<div>
				<img class="block md:hidden" src="/smcoffee.png" alt="coffee cup" />
				<img class="hidden md:block" src="/mdcoffee.png" alt="coffee cup" />
			</div>
		</div>
	</section>
	<About />
	<section id="portfolio" class="px-4 py-16">
		<div class="container mx-auto">
			<div class="mb-12 text-center">
				<h2 id="header" class="mb-4 text-3xl font-bold sm:text-5xl">[Showcase]</h2>
				<p class="text-accent-600 text-lg font-semibold">Things I worked on :)</p>
			</div>
			<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				<ShowcaseCard
					title="Scare Parts: A Wolfjam 2024 Nexus Award Winner"
					src="scareparts.jpg"
					href="/projects/scareparts"
					tags="Hackathon, Game Development, C#, Unity"
				/>
				<ShowcaseCard
					title="Personal Portfolio"
					src="portfolio.png"
					href="/projects/portfolio"
					tags="Web Design, Svelte, TailwindCSS, TypeScript"
				/>
				<ShowcaseCard
					title="Book API"
					src="book.png"
					href="/projects/bookapi"
					tags="RESTful APIs, JavaScript, Tailwind CSS"
				/>
			</div>
			<div id="otherProjects" class="pt-16">
				<div class="pb-12 text-center">
					<h2 id="header" class="mb-4 text-3xl font-bold sm:text-4xl">[Other Projects]</h2>
					<p class="text-accent-600 text-lg font-semibold">Smaller projects & practice</p>
				</div>
				<div class="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
					<ShowcaseCard
						title="Name/Age/Country Predictor"
						src="predictor.png"
						href="/projects/predictor"
						tags="Fullstack Development, Next.js, TypeScript, RESTful APIs"
					/>
					<ShowcaseCard
						title="Busy Bee Farm Mockup"
						src="beefigma.png"
						href="/projects/beefarm"
						tags="Web Design, Figma"
					/>
					<ShowcaseCard
						title="Fishy Business"
						src="fishybiz.png"
						href="/projects/fishybiz"
						tags="Game Development, C#"
					/>
					<ShowcaseCard
						title="Chappell Roan-Themed Audio Visualizer"
						src="audioviz.png"
						href="/projects/audioviz"
						tags="Web App Development, JavaScript, HTML, CSS"
					/>
				</div>
			</div>
		</div>
	</section>
</div>
