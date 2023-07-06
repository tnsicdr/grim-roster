import { PropsWithChildren } from "react";
import clsx from "clsx";

interface CardProps {
  className?: string;
}

export function Card({ className, children }: PropsWithChildren<CardProps>) {
  return (
    <div
      className={clsx(
        "rounded p-4 m-4 bg-slate-500 dark:bg-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}
