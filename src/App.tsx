import React from "react";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import "./App.scss";
import { Route, Switch } from "react-router";
import HomePage from "./pages/home/home.page";
import ProfilePage from "./pages/profile/profile.page";
import SearchPage from "./pages/search/search.page";
import CategoryPage from "./pages/category/category.page";
import ItemPage from "./pages/item/item.page";

function App() {
  return (
    <div className="app">
      <Header />
      <div className=".body">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/category/:category/"
            component={CategoryPage}
          />
          <Route
            exact
            path="/category/:category/:setting"
            component={CategoryPage}
          />
          <Route
            exact
            path="/furniture/:id/"
            component={ItemPage}
          />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
