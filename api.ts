// Todo API met Deno
import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

// Todo interface
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// In-memory database
let todos: Todo[] = [];

// Create Router
const router = new Router();

// GET /api/todos - Alle todos ophalen
router.get("/api/todos", (ctx) => {
  ctx.response.body = todos;
});

// POST /api/todos - Nieuwe todo toevoegen
router.post("/api/todos", async (ctx) => {
  const body = await ctx.request.body().value;
  const todo: Todo = {
    id: crypto.randomUUID(),
    text: body.text,
    completed: false,
    createdAt: new Date(),
  };
  todos.push(todo);
  ctx.response.body = todo;
});

// PATCH /api/todos/:id - Todo status updaten
router.patch("/api/todos/:id", async (ctx) => {
  const id = ctx.params.id;
  const body = await ctx.request.body().value;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    ctx.response.status = 404;
    return;
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    completed: body.completed
  };

  ctx.response.body = todos[todoIndex];
});

// DELETE /api/todos/:id - Todo verwijderen
router.delete("/api/todos/:id", (ctx) => {
  const id = ctx.params.id;
  todos = todos.filter(todo => todo.id !== id);
  ctx.response.status = 204;
});

// Create Application
const app = new Application();

// CORS middleware
app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  
  if (ctx.request.method === "OPTIONS") {
    ctx.response.status = 204;
    return;
  }
  
  await next();
});

// Use router
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
const port = 8000;
console.log(`Todo API server draait op http://localhost:${port}`);
await app.listen({ port });
