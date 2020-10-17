import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../redux/user/user.action";
import { getCloseModalFromState } from "../../redux/user/user.selector";
import InputField, {
  handleChangeGen,
} from "../input-field/input-field.component";
import "./login.styles.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const closeModal = useSelector(getCloseModalFromState);
  const handleEmail = handleChangeGen(setEmail);
  const handlePassword = handleChangeGen(setPassword);
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login(email, password, () => (closeModal ? closeModal() : null)));
    return false;
  };
  const handleSignUp = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (closeModal) closeModal();
    history.push("/signup");
  };
  return (
    <form onSubmit={handleLogin} className="column login-container">
      <h1>Login</h1>
      <InputField
        className="field"
        placeholder="Email o correo"
        value={email}
        handleChange={handleEmail}
      />
      <InputField
        className="field"
        type="password"
        placeholder="Password"
        value={password}
        handleChange={handlePassword}
      />
      <div className="row">
        <button type="submit" className="btn btn-login">
          Login
        </button>
        <div className="btn btn-signup" onClick={handleSignUp}>
          Sign Up
        </div>
      </div>
    </form>
  );
};

export default Login;
