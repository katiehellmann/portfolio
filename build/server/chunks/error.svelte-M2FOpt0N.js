import { e as escape_html } from './escaping-CqgfEcN3.js';
import { J as push, N as pop, X as getContext } from './index-DAijillk.js';
import { s as stores } from './client-C_3L1jMa.js';
import './exports-PNTNgjlJ.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-M2FOpt0N.js.map
