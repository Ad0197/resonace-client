import React from "react";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import "./App.scss";
import { Route, Switch } from "react-router";
import HomePage from "./pages/home/home.page";
import ProfilePage from "./pages/profile/profile.page";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
