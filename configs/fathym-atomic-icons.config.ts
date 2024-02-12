import { IconSetConfig, IconSetGenerateConfig } from "@fathym/atomic-icons";

export const curIconSetConfig: IconSetConfig = {
  IconMap: {
    loading: "https://api.iconify.design/mdi:loading.svg",
  },
};

export const curIconSetGenerateConfig: IconSetGenerateConfig = {
  IconSet: curIconSetConfig,
  Generate: false,
  SpriteSheet: "iconset/icons",
};
