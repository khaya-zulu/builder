import type { AstroIntegration } from "astro";

export * from "./schema.ts";

import { type OSConfig, osConfigSchema } from "./schema.ts";

const resolveVirtualModuleId = (id: string) => `\0${id}`;

export default function osAstroPlugin(osConfig: OSConfig): AstroIntegration {
  const parsedConfig = osConfigSchema.parse(osConfig);

  return {
    name: "@builder-os/astro",
    hooks: {
      "astro:config:setup": ({ injectRoute, updateConfig }) => {
        if (parsedConfig.isBioEnabled) {
          injectRoute({
            pattern: "/",
            entrypoint: "@builder-os/astro/bio.astro",
          });
        }

        if (parsedConfig.isProjectsEnabled) {
          injectRoute({
            pattern: "/projects",
            entrypoint: "@builder-os/astro/projects.astro",
          });
        }

        if (parsedConfig.travel) {
          injectRoute({
            pattern: "/travel",
            entrypoint: "@builder-os/astro/travel.astro",
          });
        }

        if (parsedConfig.isMusicEnabled) {
          injectRoute({
            pattern: "/api/spotify",
            entrypoint: "@builder-os/astro/api/spotify.astro",
          });

          injectRoute({
            pattern: "/music",
            entrypoint: "@builder-os/astro/music.astro",
          });
        }

        if (parsedConfig.isNotesEnabled) {
          injectRoute({
            pattern: "/notes",
            entrypoint: "@builder-os/astro/notes.astro",
          });

          injectRoute({
            pattern: "/notes/[slug]",
            entrypoint: "@builder-os/astro/notes/[...slug].astro",
          });
        }

        updateConfig({
          vite: {
            plugins: [
              {
                name: "@os",
                resolveId: (id) => {
                  const virtualImports = [
                    parsedConfig.travel ? "virtual:os/travel" : null,
                    "virtual:os/page",
                    "virtual:os/conditions",
                    "virtual:os/css",
                    "virtual:os/user-config",
                  ].filter(Boolean) as string[];

                  if (virtualImports.includes(id)) {
                    return resolveVirtualModuleId(id);
                  }

                  return;
                },
                load: (id) => {
                  // travel settings
                  if (id === resolveVirtualModuleId("virtual:os/travel")) {
                    return `export const travel = ${JSON.stringify(
                      parsedConfig.travel
                    )}`;
                  }

                  // user config
                  if (id === resolveVirtualModuleId("virtual:os/user-config")) {
                    return `export const user = ${JSON.stringify(
                      parsedConfig.user
                    )}`;
                  }

                  // conditions
                  if (id === resolveVirtualModuleId("virtual:os/conditions")) {
                    return `export const conditions = ${JSON.stringify({
                      isBioEnabled: parsedConfig.isBioEnabled,
                      isProjectsEnabled: parsedConfig.isProjectsEnabled,
                      isTravelEnabled: parsedConfig.isTravelEnabled,
                      isMusicEnabled: parsedConfig.isMusicEnabled,
                      isNotesEnabled: parsedConfig.isNotesEnabled,
                    })}`;
                  }

                  // page settings
                  if (id === resolveVirtualModuleId("virtual:os/page")) {
                    return `export const page = ${JSON.stringify(
                      parsedConfig.page
                    )}`;
                  }

                  // custom css styles
                  if (id === resolveVirtualModuleId("virtual:os/css")) {
                    return (
                      parsedConfig.customCSS
                        ?.map((filePath) => `import "${filePath}";`)
                        .join("") ?? ""
                    );
                  }

                  return;
                },
              },
            ],
          },
        });
      },
    },
  };
}
