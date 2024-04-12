/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_D0Wa9wii.mjs';
import { $ as $$Layout } from './404_KOOu-jpM.mjs';

const getLanzamientosBy = async ({
  id
}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  console.log(launch);
  return launch;
};
const getUltimosLanzamientos = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      Option: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  console.log({ id });
  let launch;
  if (id) {
    launch = await getLanzamientosBy({ id });
  }
  console.log(launch);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="rounded-lg border shadow-md bg-gray-800 border-gray-700
    hover:bg-gray-700 hover:border-gray-500 transition flex
    flex-col text-center items-center py-4"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">
Launch #${launch?.flight_number} </h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/launch/[id].astro", void 0);

const $$file = "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, getUltimosLanzamientos as g };
