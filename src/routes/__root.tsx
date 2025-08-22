import { QueryClient } from "@tanstack/react-query";
import {
  createRootRoute,
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
      </div>
      <div>
        <h1>Welcome to Tanstack Router Demo!</h1>
        <p>TanStack Router is a modern, type-safe router for React apps. It allows navigation between pages (routes) without reloading the browser, supports nested routes, loaders, search params, and more.
          <br />
        I.I used it in my project to: Define routes (/, /about, /contact)
          <br />
        II.Navigate between them using <Link />
          <br />
        III.Manage layouts with nested routes
        </p>
      </div>


      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
