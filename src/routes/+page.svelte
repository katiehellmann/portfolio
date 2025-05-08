<script>
import ShowcaseCard from "$lib/components/showcaseCard.svelte";

</script>


      <section id="banner" class="bg-gray-800 py-8 z-10">
        <div class="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div class="w-full md:w-2/3 py-4">
            <h1 class="text-purple-100 text-4xl sm:text-5xl md:text-7xl font-semibold leading-none tracking-tighter">
              Hi! I'm <br><span class="text-pink-400">Katie Hellmann, <br></span> Game and Web Developer.
            </h1>
          </div>
          <!-- <div class="hidden sm:w-1/3 py-8">
            <img src="me.jpeg" class="portrait" alt="professional portrait">
          </div> -->
        </div>
      </section>
<section id="portfolio" class="portfolio-section py-16 px-4">
    <div class="container mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">Showcase</h2>
            <p class="text-lg text-indigo-500 font-semibold">Things I worked on :)</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ShowcaseCard
                title="Chappell Roan-Themed Audio Visualizer"
                src="audioviz.png"
                href="/projects/audioviz"
                tags="Web App Development, JavaScript, HTML, CSS"
            />
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
            title="Busy Bee Farm Mockup"
            src="beefigma.png"
            href="/projects/beefarm"
            tags="Web Design, Figma"
            />
        </div>
    </div>
</section>
