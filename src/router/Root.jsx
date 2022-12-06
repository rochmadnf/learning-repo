import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { HelmetProvider } from "react-helmet-async";

export default function Root() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Navbar />
      <div className="mt-4">
        <Outlet />
      </div>
    </HelmetProvider>
  );
}
