import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto mt-5 px-4 md:px-0">
      <h4 className="text-2xl font-bold">Logo</h4>

      <div className="flex items-center justify-center gap-4">
        <Button>Login</Button>
        <Button variant="outline">Register</Button>
      </div>
    </nav>
  );
};

export default Navbar;
