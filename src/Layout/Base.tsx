import { PropsWithChildren } from "react";
import { AppBar } from "../components/AppBar/AppBar";

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="font-sans bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen w-screen">
      <AppBar />
      <div className="w-full container mx-auto px-4">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default BaseLayout;
