

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.q8kSn9Wv.js","_app/immutable/chunks/DCgk2Fd3.js","_app/immutable/chunks/qL8Nd1dR.js","_app/immutable/chunks/BGibhl7j.js"];
export const stylesheets = [];
export const fonts = [];
