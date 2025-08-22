import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome to Tanstack Router Demo!</h3>
      <Link
        to="/search"
        search={{
          limit: 10,
          query: "Sawali Khanke",
        }}
      >
        Search something
      </Link>
    </div>
  );
}
