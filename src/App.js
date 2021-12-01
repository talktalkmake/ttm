import React        from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar       from "./components/navBar";
import CV           from "./components/cv";
import Writing      from "./components/writing";
import ShortStories from "./components/shortStories";
import Index        from "./components/index";
import UnbeatenRun  from "./components/UnbeatenRun";
import JollyEdition from "./components/JollyEdition";
import Work         from "./components/Work";
import Contact      from "./components/Contact";
import $            from "jquery";

import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "./css/index.css";

const App = () => {
  // show the nav when scrolling up. Otherwise hide it
  let y = 0;
  const w = $(window);
  const b = $(document.body);
  $(document).on("scroll", function() {
    const scrollTop = Math.floor(w.scrollTop());
    scrollTop > y ? b.addClass("hide-nav") : b.removeClass("hide-nav");
    y = scrollTop;
  });
  return (
    <React.Fragment>
      <NavBar />
      <main className="main">
        <Switch>
          <Route path={"/cv"} component={CV} />
          <Route path={"/work"} exact component={Work} />
          <Route path={"/contact"} exact component={Contact} />
          <Route path={"/work/unbeaten-run"} component={UnbeatenRun} />
          <Route path={"/work/jolly-edition"} component={JollyEdition} />
          <Route path={"/writing"} component={Writing} />
          <Route path={"/short-stories"} component={ShortStories} />
          <Route path="/" component={Index} />
          <Redirect from="/" exact to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
