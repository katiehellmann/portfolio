import { T as bind_props, V as getContext, W as store_get, X as unsubscribe_stores, S as pop, P as push } from "../../chunks/index.js";
import "clsx";
import { a as attr } from "../../chunks/attributes.js";
import "../../chunks/client.js";
function Footer($$payload) {
  $$payload.out += `<section class="pt-2 pb-2 bg-gray-800 text-purple-100"><footer class="flex flex-col space-y-10 justify-center m-10"><nav class="flex justify-center flex-wrap gap-6 font-medium"><a class="hover:text-pink-300" href="/about">About</a> <a class="hover:text-pink-300" href="mailto:kathellmann30@gmail.com?subject=Inquiry for Katie Hellmann &amp;body=">Contact</a> <a class="hover:text-pink-300" href="https://katiehellmann.itch.io" target="_blank">itch.io</a></nav> <div class="flex justify-center space-x-5"><a href="https://github.com/katiehellmann" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/30/000000/github.png" alt="github"></a> <a href="https://www.linkedin.com/in/katie-hellmann-rit/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="linkedin"></a></div> <p class="text-center font-medium">© 2025 Katie Hellmann.</p></footer></section>`;
}
function Nav($$payload, $$props) {
  let href = $$props["href"];
  $$payload.out += `<nav class="bg-gray-900 text-purple-100 py-3 px-4 flex items-center justify-between"><a class="font-bold text-4xl tracking-tight" href="/">Katie Hellmann</a> <div class="text-2xl flex items-center">`;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="px-4 py-2 leading-none rounded-full hover:bg-gray-700"${attr("href", href)}>Back</a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <a class="px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/about">About</a> <a class="px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="mailto:kathellmann30@gmail.com?subject=Inquiry for Katie Hellmann &amp;body=">Contact</a></div></nav>`;
  bind_props($$props, { href });
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname == "/") {
    $$payload.out += "<!--[-->";
    Nav($$payload, { href: "" });
  } else {
    $$payload.out += "<!--[!-->";
    Nav($$payload, { href: "/" });
  }
  $$payload.out += `<!--]--> `;
  children($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
