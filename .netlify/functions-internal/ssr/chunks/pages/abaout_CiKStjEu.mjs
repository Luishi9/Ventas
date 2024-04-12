/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D0Wa9wii.mjs';
import { $ as $$Layout } from './404_KOOu-jpM.mjs';

const $$Astro = createAstro();
const $$Abaout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Abaout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About</h1> <p>jndkjasndsajdnsandnasdjsadnjnadknjsndja</p> ` })}`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/abaout.astro", void 0);

const $$file = "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/abaout.astro";
const $$url = "/abaout";

export { $$Abaout as default, $$file as file, $$url as url };
