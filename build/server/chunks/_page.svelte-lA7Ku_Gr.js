import { Z as fallback, W as bind_props } from './index-DAijillk.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function ShowcaseCard($$payload, $$props) {
  let title = fallback($$props["title"], "Card Title");
  let src = fallback($$props["src"], "image");
  let href = fallback($$props["href"], "");
  let tags = fallback($$props["tags"], "");
  $$payload.out += `<div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"><a${attr("href", href)}><img class="w-full h-60 object-cover"${attr("src", src)} alt=""> <div class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div> <div class="p-4 flex flex-col items-center justify-between relative z-10"><h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">${escape_html(title)}</h3> `;
  if (tags) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">${escape_html(tags)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></a></div>`;
  bind_props($$props, { title, src, href, tags });
}
function _page($$payload) {
  $$payload.out += `<section id="banner" class="bg-gray-800 py-8 z-10"><div class="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto"><div class="w-full md:w-1/2 py-8"><h1 class="text-purple-100 text-7xl font-semibold leading-none tracking-tighter">Hi! I'm <br><span class="text-pink-400">Katie Hellmann, <br></span> Game and Web Developer.</h1></div> <div class="w-full md:w-1/2 py-8"><img src="me.jpeg" class="portrait" alt="professional portrait"></div></div></section> <section id="portfolio" class="portfolio-section py-16 px-4"><div class="container mx-auto"><div class="text-center mb-12"><h2 class="text-5xl font-bold mb-4">Showcase</h2> <p class="text-lg text-indigo-500 font-semibold">Things I worked on :)</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">`;
  ShowcaseCard($$payload, {
    title: "Chappell Roan-Themed Audio Visualizer",
    src: "audioviz.png",
    href: "/projects/audioviz",
    tags: "Web App Development, JavaScript, HTML, CSS"
  });
  $$payload.out += `<!----> `;
  ShowcaseCard($$payload, {
    title: "Scare Parts: A Wolfjam 2024 Nexus Award Winner",
    src: "scareparts.jpg",
    href: "/projects/scareparts",
    tags: "Hackathon, Game Development, C#, Unity"
  });
  $$payload.out += `<!----> `;
  ShowcaseCard($$payload, {
    title: "Personal Portfolio",
    src: "portfolio.png",
    href: "/projects/portfolio",
    tags: "Web Design, Svelte, TailwindCSS, TypeScript"
  });
  $$payload.out += `<!----></div></div></section>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-lA7Ku_Gr.js.map
