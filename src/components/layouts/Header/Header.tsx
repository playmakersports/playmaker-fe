"use client";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";
import RoutedHeader from "./RoutedHeader";

type Props = { scrollY: number };
function Header({ scrollY }: Props) {
  const pathname = usePathname();

  if (pathname === "/") {
    return <MainHeader scrollY={scrollY} />;
  }
  return <RoutedHeader scrollY={scrollY} />;
}

export default Header;
