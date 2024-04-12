import { renderers } from './renderers.mjs';
import { manifest } from './manifest_bbVzXpwK.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_bqY-8AVn.mjs');
const _page1 = () => import('./chunks/404_Ci3dUbbN.mjs');
const _page2 = () => import('./chunks/abaout_C6XDf3Os.mjs');
const _page3 = () => import('./chunks/_id__DeHC4wIr.mjs');
const _page4 = () => import('./chunks/index_DQu3akMC.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.14_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/abaout.astro", _page2],
    ["src/pages/launch/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7d98b2ea-75e0-4542-819a-fff507b5944e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
