import Link from "next/link";
import { ReactNode } from "react";

type CommonWhiteButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function CommonWhiteButton({ href, children, className = "" }: CommonWhiteButtonProps) {
  return (
    <Link
      href={href}
      className={`main-button-white inline-flex items-center justify-center text-center rounded-full ${className}`}
    >
      {children}
    </Link>
  );
}

