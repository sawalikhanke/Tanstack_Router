import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

export default function About() {
  return <div>

    <p>TanStack Router is a modern, type-safe routing library designed for web applications, particularly well-suited for React and TypeScript projects. It emphasizes developer experience and aims to address limitations found in traditional client-side routers by offering advanced features and robust type-safety.
      </p>
      <h3>Key Features and Concepts:</h3>
      Type-Safe Routing:
      
      <br />
      At its core, TanStack Router is built with TypeScript in mind. It automatically generates precise type definitions for routes, parameters, and search queries, enabling compile-time error detection and improved developer productivity through features like autocompletion.
      <br />
      File-Based Routing:
      It supports a file-system-based approach to routing, where route configurations are automatically derived from the folder structure of your application, reducing boilerplate code.
      <br/>
      Nested and Layout Routes:
      TanStack Router allows for deeply structured route hierarchies with shared layouts and context, facilitating the creation of complex UI structures. Layout routes can wrap groups of child routes, enforcing requirements like data loading or providing shared context.
      <br/>
      Parallel Data Loading and Prefetching:
      It includes built-in mechanisms for efficient data fetching, allowing for parallel loading of data for multiple routes and prefetching of route data and components to improve performance.
      <br/>
      SSR (Server-Side Rendering) Support:
      TanStack Router supports server-side rendering, enabling the rendering of pages on the server with support for streaming.
      <br/>
      Integration with TanStack Ecosystem:
      Designed by the same team behind popular libraries like TanStack Query, it offers seamless integration within the broader TanStack ecosystem.
      <br/>
      Error Boundaries and Handling:
      
    
      It provides route-based error boundaries and fallbacks for robust error handling.
      <br/>
      Search Parameter Handling and Validation:
      It offers robust handling and validation of URL search parameters, making it easier to manage UI state and share filtered or paginated views.

  </div>

}
