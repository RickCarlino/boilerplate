import * as React from "react";
import { NavItem } from "./nav_item";

interface FrontProps {
    children: JSX.Element | undefined;
}

export function Front(props: FrontProps) {
    return <div>
        <nav className="pt-navbar .modifier">
            <div className="pt-navbar-group pt-align-left">
                <div className="pt-navbar-heading">Carlinoplate</div>
            </div>
            <div className="pt-navbar-group pt-align-right">
                <NavItem to="/login">
                    Login here
                </NavItem>
                <NavItem to="/">
                    Main
                </NavItem>
                <NavItem to="/about/foo">
                    About Foo
                </NavItem>
                <NavItem to="/about/bar">
                    About Bar
                </NavItem>
                <NavItem to="/kitchen_sink">
                    UI Components
                </NavItem>
                <span className="pt-navbar-divider"></span>
                <NavItem to="/top_secret" className="pt-icon-airplane">
                    Fwoosh
                </NavItem>
            </div>
        </nav>
        <div style={{ marginTop: 25 }}>
            {props.children}
        </div>
    </div>;
}
