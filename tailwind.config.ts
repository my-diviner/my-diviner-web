import { type Config } from "tailwindcss";
import unimportant from "npm:tailwindcss-unimportant";
import { buildTailwindComponentsConfigs } from "@fathym/common";
import MyDivinerAtomicTailwindComponents from "@my-diviner/atomic/tailwind.components";

const tailwindComponents = [...MyDivinerAtomicTailwindComponents];

await buildTailwindComponentsConfigs(tailwindComponents);

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "build/tailwind-components.config",
  ],
  plugins: [unimportant],
} satisfies Config;
