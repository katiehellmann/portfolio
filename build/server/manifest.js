const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audioviz.png","cat.png","favicon.png","hellmann-linkedin-resume.pdf","me.jpeg","portfolio.png","portfolio2.png","scareparts.jpg"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Bn84wwN2.js",app:"_app/immutable/entry/app.fecDkGk3.js",imports:["_app/immutable/entry/start.Bn84wwN2.js","_app/immutable/chunks/BOzVOj9w.js","_app/immutable/chunks/qL8Nd1dR.js","_app/immutable/chunks/wyd4mq8D.js","_app/immutable/chunks/BaYKZq8v.js","_app/immutable/entry/app.fecDkGk3.js","_app/immutable/chunks/qL8Nd1dR.js","_app/immutable/chunks/9DNeDpdF.js","_app/immutable/chunks/DCgk2Fd3.js","_app/immutable/chunks/Dlc3dJBu.js","_app/immutable/chunks/wyd4mq8D.js","_app/immutable/chunks/BaYKZq8v.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-TNfEj11q.js')),
			__memo(() => import('./chunks/1-B6Y1sC3u.js')),
			__memo(() => import('./chunks/2-DxfnRJag.js')),
			__memo(() => import('./chunks/3-wnD3Bd2M.js')),
			__memo(() => import('./chunks/4-DtqMDsX0.js')),
			__memo(() => import('./chunks/5-cB5uTlzT.js')),
			__memo(() => import('./chunks/6-DDslODIx.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/audioviz",
				pattern: /^\/projects\/audioviz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/portfolio",
				pattern: /^\/projects\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/scareparts",
				pattern: /^\/projects\/scareparts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
