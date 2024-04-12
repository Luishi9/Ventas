/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, h as renderComponent } from '../astro_D0Wa9wii.mjs';
import { $ as $$Layout } from './404_KOOu-jpM.mjs';
import { g as getUltimosLanzamientos } from './_id__DHXvXMfw.mjs';

const $$Astro$2 = createAstro();
const $$CardLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, flightNumber, img, id, details } = Astro2.props;
  const launchesStatus = success ? "Exito" : "Fracaso";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border shadow-md bg-gray-800 border-gray-700
    hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex
    flex-col"> <picture class="flex justify-center p-4"> <img class="mb-5 rounded-lg"${addAttribute(img, "src")}${addAttribute(`Patch for launch ${id}`, "alt")}> </picture> <header class="p-4 flex-grow"> <!-- <span
        class={\`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded \${
            success ? "bg-green-200 text-green-900" : "bg-red-200 text-red-90"
        }\`}>{successText}</span>--> <span${addAttribute([
    //aqui le pasamos los parametros que si o si se van a ocupar:
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    //tambien se pueden pasar objetos: opcion1: class={`${success ? "bg-green-400 text-green-900" : "bg-red-400 text-red-900"}
    {
      "bg-green-400 text-green-900": success,
      "bg-red-400 text-red-900": !success
    }
  ], "class:list")}>${launchesStatus}</span> <!-- Esta es una opcion de como mostrar exito o fallido --> <h2 class="my-2 text-2x1 font-bold tracking-tight text-white">
Flight # ${flightNumber} </h2> <p class="mb-4 font-light text-gray-400"> ${details != null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/components/CardLaunch.astro", void 0);

const $$Astro$1 = createAstro();
const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Launches;
  const launches = await getUltimosLanzamientos();
  return renderTemplate`<!-- EL SIGUIENTE DIV ES LO QUE SE RENDERIZA -->${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map((launch) => (
    /*<article>
        <img src={launch.links.patch.small} alt="">
        <h2> #{launch.id} </h2>
        
    </article>
    */
    //vamos a mejorar la visualizacion
    renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": launch.id, "img": launch.links.patch.small, "details": launch.details, "flightNumber": launch.flight_number, "success": launch.success })}`
  ))} </div>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/components/Launches.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SpaceX Launches" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })} <!-- aqui los estilos solo se aplican a las etiquetas que se llaman en el mismo archivo,
	no aplica a otras etiquetas de otros archivos
<style>
	main {
		margin: auto;
		padding: 1rem;
		width: 800px;
		max-width: calc(100% - 2rem);
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
	.astro-a {
		position: absolute;
		top: -32px;
		left: 50%;
		transform: translatex(-50%);
		width: 220px;
		height: auto;
		z-index: -1;
	}
	h1 {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		margin-bottom: 1em;
	}
	.text-gradient {
		background-image: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 400%;
		background-position: 0%;
	}
	.instructions {
		margin-bottom: 2rem;
		border: 1px solid rgba(var(--accent-light), 25%);
		background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
		padding: 1.5rem;
		border-radius: 8px;
	}
	.instructions code {
		font-size: 0.8em;
		font-weight: bold;
		background: rgba(var(--accent-light), 12%);
		color: rgb(var(--accent-light));
		border-radius: 4px;
		padding: 0.3em 0.4em;
	}
	.instructions strong {
		color: rgb(var(--accent-light));
	}
	.link-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 2rem;
		padding: 0;
	}
</style>
-->`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luis-Eduardo/Desktop/ASTRO/curso-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
