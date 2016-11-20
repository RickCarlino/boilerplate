import * as React from "react";
import { Link } from "react-router";

interface NavItemProps {
    children?: JSX.Element | undefined;
    to: string;
    className?: string;
}

export function NavItem(props: NavItemProps) {
    return <Link className={`pt-button pt-minimal ${props.className}`}
        onlyActiveOnIndex={true}
        activeClassName="pt-active"
        to={props.to}>
        {props.children}
    </Link>;
};
