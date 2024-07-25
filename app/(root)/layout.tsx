import Navbar from "@/components/shared/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <AuroraBackground className="z-0">
        <Navbar />
        <div className="z-20 mx-40 pt-10">{children}</div>
      </AuroraBackground>
    </main>
  );
};

export default Layout;
