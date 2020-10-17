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
import { useDispatch } from "react-redux";
import { LoginResponse, RefreshTokenResponse } from "./graphql/user/user.query";
import Spinner from "./components/spinner/spinner.component";
import Login from "./components/login/login.component";
import Axios from "axios";
import { Dispatch } from "redux";
import { AddUserStateAction } from "./redux/user/user.action";

function App() {
  const dispatch = useDispatch();
  const { Modal, activeModal, disableModal } = useModal();
  const { loading } = useFetch<LoginResponse>(
    getInitInfo,
    callbackFn(dispatch, activeModal, disableModal)
  );
  return loading ? (
    <div className="center all">
      <Spinner />
    </div>
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
        <Login />
      </Modal>
    </div>
  );
}

const callbackFn = (
  dispatch: Dispatch,
  activeModal: () => void,
  disableModal: () => void
) => (error: Boolean, response: any) => {
  if (error) {
    dispatch(
      AddUserStateAction({
        showModalLogin: activeModal,
        closeModalLogin: disableModal,
      })
    );
  }
  dispatch(
    AddUserStateAction({
      accessToken: response?.data?.accessToken,
      user: response?.data?.user,
      showModalLogin: activeModal,
      closeModalLogin: disableModal,
    })
  );
};

const getInitInfo = Axios.post<RefreshTokenResponse>(
  "http://localhost:5000/refresh_token",
  {},
  {
    withCredentials: true,
  }
).then((resp) => {
  console.log(resp.data);
  return resp;
});
export default App;
