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
import useModal from "./hooks/useModal";
import useFetch from "./hooks/useFetch";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AddUserState } from "./redux/user/user.action";
import { LoginResponse } from "./graphql/user/user.query";
import Spinner from "./components/spinner/spinner.component";

function App() {
  const dispatch = useDispatch();
  const { Modal, activeModal, disableModal } = useModal();
  const { loading } = useFetch<LoginResponse>(
    axios.post("http://localhost:5000/refresh_token"),
    (error, data) => {
      if (error) {
        dispatch(AddUserState({ showModalLogin: activeModal, closeModalLogin: disableModal}));
      }
      dispatch(
        AddUserState({
          accessToken: data?.accessToken,
          user: data?.user,
          showModalLogin: activeModal,
        })
      );
    }
  );
  return loading ? (
    <Spinner />
  ) : (
    <div className="app">
      <Header />
      <div className=".body">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category/:category/" component={CategoryPage} />
          <Route
            exact
            path="/category/:category/:setting"
            component={CategoryPage}
          />
          <Route exact path="/furniture/:id/" component={ItemPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
      <Footer />
      <Modal>
        <h1>Hola</h1>
      </Modal>
    </div>
  );
}

export default App;
