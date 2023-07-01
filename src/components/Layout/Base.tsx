import { PropsWithChildren } from "react";

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="font-sans bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen w-screen">
      <div className="w-full container mx-auto px-4">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default BaseLayout;
