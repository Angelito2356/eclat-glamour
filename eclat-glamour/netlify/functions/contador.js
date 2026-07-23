import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("estadisticas");
  const url = new URL(req.url);
  const soloLeer = url.searchParams.get("leer") === "1";

  let visitas = await store.get("visitas");
  visitas = visitas ? parseInt(visitas, 10) : 0;

  if (!soloLeer) {
    visitas += 1;
    await store.set("visitas", String(visitas));
  }

  return new Response(JSON.stringify({ visitas }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
};

export const config = { path: "/api/contador" };
