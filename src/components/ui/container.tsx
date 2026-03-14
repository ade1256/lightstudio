import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>{children}</div>;
}
