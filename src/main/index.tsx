import * as React from "react";
import { NavItem } from "./nav_item";
import { RouteComponentProps } from "react-router";

interface FrontProps extends RouteComponentProps<void> {
  children?: React.ReactNode;
}

export function Front(props: FrontProps) {
  return <div>
    <nav className="pt-navbar .modifier">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading">Carlinoplate</div>
      </div>
      <div className="pt-navbar-group pt-align-right">
        <NavItem addr="/login">
          Login here
                </NavItem>
        <NavItem addr="/">
          Main
                </NavItem>
        <NavItem addr="/about/foo">
          About Foo
                </NavItem>
        <NavItem addr="/about/bar">
          About Bar
                </NavItem>
        <NavItem addr="/kitchen_sink">
          UI Components
                </NavItem>
        <span className="pt-navbar-divider"></span>
        <NavItem addr="/top_secret" className="pt-icon-airplane">
          Fwoosh
                </NavItem>
      </div>
    </nav>
    <div style={{ marginTop: 25 }}>
      {props.children}
    </div>
  </div>;
}
