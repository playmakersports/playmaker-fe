"use client";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";
import RoutedHeader from "./RoutedHeader";
import TeamHeader from "./TeamHeader";

type Props = { scrollY: number };
function Header({ scrollY }: Props) {
  const pathname = usePathname();

  if (pathname === "/home") {
    return <MainHeader scrollY={scrollY} />;
  }
  if ((pathname === "/team" || pathname.startsWith("/team/")) && pathname.split("/").length < 4) {
    return <TeamHeader scrollY={scrollY} />;
  }
  return <RoutedHeader scrollY={scrollY} />;
}

export default Header;
