import React from "react";
import { Switch, Route } from "react-router-dom";

import { Projects } from "./Projects";
import { CodeSnippets } from "./CodeSnippets";
import { WorkHistory } from "./WorkHistory";
import { Home } from "./Home";

export const Body = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/codesnippets" component={CodeSnippets} />
      <Route path="/workhistory" component={WorkHistory} />
    </Switch>
  );
};
