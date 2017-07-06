import * as React from "react";

interface NavItemProps {
  children?: React.ReactNode;
  addr: string;
  className?: string;
}

export function NavItem(props: NavItemProps) {
  return <a
    className={`pt-button pt-minimal ${props.className}`}>
    {props.children}
  </a>;
}
