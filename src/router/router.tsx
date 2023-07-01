import { Router } from "@tanstack/router";
import { routeTree } from "./routes";

export const router = new Router({ routeTree: routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
