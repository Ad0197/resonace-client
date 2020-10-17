import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/user.action";
import { getCloseModalFromState } from "../../redux/user/user.selector";
import InputField, {
  handleChangeGen,
} from "../input-field/input-field.component";
import "./login.styles.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const closeModal = useSelector(getCloseModalFromState);
  const handleEmail = handleChangeGen(setEmail);
  const handlePassword = handleChangeGen(setPassword);
  const handleLogin = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(login(email, password, ()=> closeModal ? closeModal() : null));
  };
  return (
    <div className="column login-container">
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
        <div className="btn btn-login" onClick={handleLogin}>
          Login
        </div>
        <div className="btn btn-signup">Sign Up</div>
      </div>
    </div>
  );
};

export default Login;
