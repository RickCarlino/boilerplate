import { RouterState, RedirectFunction } from "react-router";

function coinFlip() {
    return !!Math.round(Math.random());
}

export function AuthorizeEntry(next: RouterState,
    redir: RedirectFunction,
    // Uncomment this if you need to do async authorization.
    // Passing an error into the function will cause a route change failure.
    // callback: Function
) {
    if (coinFlip()) {
        alert("AUTHORIZATION DENIED. THIS EVENT HAS BEEN REPORTED.");
        redir("/login");
    }
};
