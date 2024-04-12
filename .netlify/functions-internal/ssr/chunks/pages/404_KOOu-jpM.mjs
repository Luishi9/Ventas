/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, g as createTransitionScope, h as renderComponent, i as renderHead } from '../astro_D0Wa9wii.mjs';
import { useState } from 'preact/hooks';
import { jsxs, Fragment, jsx } from 'preact/jsx-runtime';

const $$Astro$4 = createAstro();
const $$HeaderButtom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderButtom;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex-row justify-center text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"> ${renderSlot($$result, $$slots["antes"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["despues"])} </a>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/components/HeaderButtom.astro", void 0);

function Counter() {
  const [Counter2, setCounter] = useState(0);
  return jsxs(Fragment, {
    children: [jsx("span", {
      class: "text-yellow-300 text-xl mr-4",
      children: Counter2
    }), jsx("button", {
      class: "border px-4 py-2 text-xl",
      onClick: () => setCounter((counter) => counter + 1),
      children: " + "
    }), jsx("button", {
      class: "border px-4 py-2 text-xl",
      onClick: () => setCounter((counter) => counter - 1),
      children: " - "
    })]
  });
}

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX Launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
all the information about spacex laucher
</p> <br> <br> <p>el siguiente contador tiene preac y js, para que no recargue su informacion
            se agrega transition:persist para que la informacion se quede igual en el cambio
            de paginas, ejemplo para Carrito de compras
</p> ${renderComponent($$result, "Counter", Counter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/components/contador.jsx", "client:component-export": "Counter" })} </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButtom", $$HeaderButtom, { "class": "text-white", "href": "/" }, { "default": ($$result2) => renderTemplate` 
Ultimos lanzamientos
`, "despues": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>` })} ${renderComponent($$result, "HeaderButtom", $$HeaderButtom, { "class": "text-white", "href": "/" }, { "default": ($$result2) => renderTemplate` 
Sobre el proyecto
`, "despues": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>` })} ${renderComponent($$result, "HeaderButtom", $$HeaderButtom, { "class": "text-white", "href": "" }, { "default": ($$result2) => renderTemplate` 
Los mas viejos
`, "despues": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 7v5l3 3"></path></svg>` })} </nav> </header>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/components/Header.astro", "self");

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/node_modules/.pnpm/astro@4.5.14_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- MOSTRAMOS LAS TRANSICIONES COMO SI FUERA UN COMPONENTE -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> <!-- ESTO HACE QUE SIEMPRE APAREZCA EL HEADER EN LAS PAGINAS --> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center"> <h1 class="text-white text-3xl text-center"> Esta pagina no existe...</h1> <img src="https://midu.dev/images/this-is-fine-404.gif" alt=""> </div> ` })}`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
