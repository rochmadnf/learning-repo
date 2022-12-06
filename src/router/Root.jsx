import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
