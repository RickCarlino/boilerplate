import * as React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { Front } from "./main/index";
import { MainContent } from "./main/main_content";
import { Login } from "./login/index";
import { About } from "./about/index";
import { TopSecret } from "./top_secret/index";
import { AuthorizeEntry } from "./authorize_entry";
import { KitchenSink } from "./kitchen_sink/index";

export let routes = <Router history={hashHistory}>
    <Route path="/" component={Front}>
        <IndexRoute component={MainContent} />
        <Route path="/login" component={Login} />
        <Route path="/top_secret" component={TopSecret} onEnter={AuthorizeEntry} />
        <Route path="/about/:topic" component={About} />
        <Route path="/kitchen_sink" component={KitchenSink} />
    </Route>
</Router>;

