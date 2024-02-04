import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      data: [
        {
          name: "KhayaOS",
          url: "https://upshot.dev",
          src: "/showcase/khaya-os.png",
        },
      ],
    })
  );
};
