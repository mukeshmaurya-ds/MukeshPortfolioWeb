import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function SocialButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full

      border

      transition-all

      hover:-translate-y-1

      hover:border-blue-500

      hover:text-blue-600

      dark:border-zinc-700
    "
    >
      {children}
    </Link>
  );
}