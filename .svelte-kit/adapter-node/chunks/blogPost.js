import { Z as fallback, T as bind_props } from "./index.js";
import { e as escape_html } from "./escaping.js";
import { a as attr } from "./attributes.js";
function BlogPost($$payload, $$props) {
  let title = fallback($$props["title"], "title");
  let href = $$props["href"];
  let note = $$props["note"];
  let src = $$props["src"];
  let headline = fallback($$props["headline"], "headline");
  let tags = fallback($$props["tags"], "tags");
  let content = fallback($$props["content"], "content here");
  $$payload.out += `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px- text-purple-100"><div class="max-w-3xl mx-auto"><div class="py-8"><h1 class="text-6xl font-bold mb-2">${escape_html(title)}</h1></div> <h2 class="text-3xl py-8">${escape_html(headline)}</h2> <img${attr("src", src)} alt="" class="w-full h-auto mb-8"> <div class="blog mx-auto text-2xl text-purple-100"><div class="text-2xl m-2 p-2 rounded-lg bg-gray-700"><h2 class="font-bold">Project Info:</h2> ${escape_html(tags)}</div> <p>${escape_html(content)}</p> `;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<br> <h3 class="font-bold">External Links:</h3> <a target="_blank" class="text-decoration-line: underline hover:text-pink-300"${attr("href", href)}>${escape_html(note)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, {
    title,
    href,
    note,
    src,
    headline,
    tags,
    content
  });
}
export {
  BlogPost as B
};
