// Importeer benodigde modules van Deno
import { Application, Router, send } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { contentType } from "https://deno.land/std@0.208.0/media_types/mod.ts";
import { join } from "https://deno.land/std@0.208.0/path/mod.ts";

// Configuratie voor de server
const PORT = 8081;

// Create Application
const app = new Application();

// Statische bestanden middleware
app.use(async (ctx, next) => {
  try {
    const path = ctx.request.url.pathname;
    
    // Standaard route naar index.html
    if (path === "/") {
      await send(ctx, "/index.html", {
        root: Deno.cwd(),
      });
      return;
    }

    // Todo app route
    if (path === "/todo") {
      await send(ctx, "/static/todo.html", {
        root: Deno.cwd(),
      });
      return;
    }

    // Andere statische bestanden
    await send(ctx, path, {
      root: Deno.cwd(),
    });
  } catch {
    await next();
  }
});

// Start de server
console.log(`Server draait op http://localhost:${PORT}`);
await app.listen({ port: PORT });
