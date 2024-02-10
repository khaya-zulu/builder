# BuilderOS

BuilderOS is an Astro plugin built for developers/hackers without time to spin up a new portfolio, blog or personal website of their own. Using [Astro content collections](https://docs.astro.build/en/guides/content-collections/), to allow you to manage your content in markdown files, a set of routes and a customizable theme, to make it your own.

# Documentation

## Getting Started (new astro project)

1. Create a new astro project

> docs: https://docs.astro.build/en/install/auto/

```
pnpm create astro@latest
```

2. Install the BuilderOS plugin

```
pnpm install @builder-os/plugin
```

3. Add the plugin to your astro config

```javascript
// astro.config.mjs
import { defineConfig } from "astro";
import osConfig from "@builder-os/plugin";

export default defineConfig({
  plugins: [
    osConfig({
      // options
    }),
  ],
});
```

> Check out the options [here](#osconfig-options)

4. Create a os.css file in `src/os.css` to override the default theme styles

At the root of your `src` create a file .css file (in this case we calling it `os.css`). You can see of the an example of the variables
you can override [here](/apps/demo/src/os.css). Here is a pallette of colors you can use

![here](/theme.png)

5. Define the content schema in `/src/content/config.ts`

```ts
import { defineCollection } from "astro:content";

import {
  generalSchema,
  projectSchema,
  notesSchema,
  travelSchema,
} from "@builder-os/astro";

export const collections = {
  bio: defineCollection({
    schema: generalSchema,
  }),
  project: defineCollection({
    schema: projectSchema,
  }),
  travel: defineCollection({
    schema: travelSchema,
  }),
  music: defineCollection({
    type: "data",
    schema: generalSchema,
  }),
  notes: defineCollection({
    schema: notesSchema,
  }),
};
```

6. Create the content files

Create a `content` folder in the root of your `src` folder. Inside the `content` folder create a folder for each collection you defined in the `config.ts` file. Learn more about the content collections [here](https://docs.astro.build/en/guides/content-collections/)

Once that is done, run your app:

```bash
pnpm dev
```

## OSConfig options

- `user.background` (optional) - Information about the user's background image, visible in the top right corner of the page
  - `user.background.creditProfileUrl` (optional) - URL authors profile
  - `user.background.creditName` (optional) - Name of the author
- `user.avatar` (required) - URL to the user's avatar image
- `user.name` (required) - Name of the user
- `user.description` (required) - Description of the user
- `user.socials` (optional) - Social media links
  - `user.socials.twitter` (optional) - URL to the user's twitter profile
  - `user.socials.github` (optional) - URL to the user's github profile
  - `user.socials.linkedin` (optional) - URL to the user's linkedin profile
- `user.coords` (optional) - Coordinates of the user's location (does not need to be exact, just a general location, province or city)
  - `user.coords.lat` (required) - Latitude of the user's location
  - `user.coords.lng` (required) - Longitude of the user's location
  - `user.coords.name` (required) - Display name of the user's location
- `customCSS` (optional) - Path to a custom CSS file to override the default theme styles (e.g. ["./src/os.css"])
- `isBioEnabled` (optional) - Enable the bio page
- `isTravelEnabled` (optional) - Enable the travel page
- `isProjectsEnabled` (optional) - Enable the projects page
- `isMusicEnabled` (optional) - Enable the music page
- `isNotesEnabled` (optional) - Enable the notes page
- `travel.wishlist` (optional) - List of places the user wants to visit (e.g. [{ name: "Japan", isChecked: false }])
- `travel.isWishlistEnabled` (optional) - Enable the wishlist

## Spotify API 🎵

To enable the music player on the music page, you need to provide spotify credentials as environment variables. In your `.env` file, add the following:

```
SPOTIFY_CLIENT_ID=<>
SPOTIFY_CLIENT_SECRET=<>
SPOTIFY_AUTH_CODE=<>
SPOTIFY_REFRESH_TOKEN=<>
```

Lee Robinson has a great [blog post](https://leerob.io/blog/spotify-api-nextjs) on to use the Spotify API with Next.js. The same steps can be used for this project.

## Weather API 🌦️

To display the weather in your project header, you need to provide a OpenWeatherMap API key as an environment variable. In your `.env` file, add the following:

```
OPEN_WEATHER_API_KEY=<>
```

An API key can be obtained by signing up at [OpenWeatherMap](https://openweathermap.org/api).

## Vercel Analytics 📊

If you deploy your site to Vercel, you can also enable analytics, by following this guide https://vercel.com/docs/analytics/quickstart

Ensure the "Astro" framework is selected in the documentation page.

![Astro/Vercel Analytics](/vercel-analytics-astro.png)
