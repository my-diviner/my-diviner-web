import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { iconSetPlugin } from "@fathym/atomic-icons";
import { islandsConfig as myDivinerIslandsConfig } from "@my-diviner/atomic";
import { PluginIslands } from "$fresh/server.ts";
import { curIconSetGenerateConfig } from "./configs/fathym-atomic-icons.config.ts";

export default defineConfig({
  plugins: [
    tailwind(),
    await iconSetPlugin(curIconSetGenerateConfig),
    {
      name: "my_diviner_islands",
      islands: myDivinerIslandsConfig().map((i) => {
        const isl = i as PluginIslands;

        //         isl.paths = isl.paths.filter(p => !p.includes('MenuButton'));
        // console.log(isl)
        return isl;
      }),
    },
  ],
});
