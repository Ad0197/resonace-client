import React from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import InputField from "../../components/input-field/input-field.component";
import Spinner from "../../components/spinner/spinner.component";
import useModal from "../../hooks/useModal";
import User from "../../models/user.model";
import { isLoading } from "../../redux/furniture/furniture.selector";
import { createUserAction } from "../../redux/user/user.action";
import "./sign-up.styles.scss";
import {
  handleSignUp,
  NOT_AVIABLE,
  PASSWORD_NOT_EQUAL,
  RegExpForEmail,
  RegExpForUsername,
  SignUpFormData,
} from "./sign-up.utils";

const SingUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { Modal, activeModal, disableModal } = useModal(true);
  const loading = useSelector(isLoading);
  const { register, errors, setError, handleSubmit } = useForm<
    SignUpFormData
  >();
  const callback = (user: User) => {
    activeModal();
    dispatch(
      createUserAction(user, () => {
        setTimeout(() => {
          disableModal();
          history.push("/");
        }, 2000);
      })
    );
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignUp(setError, callback))}
        className="column signup-form"
      >
        <h2 className="form-field">Sign Up</h2>
        {errors.firstName ? (
          <p className="warning">First Name is required. Please enter it.</p>
        ) : (
          ""
        )}
        <InputField
          className={`form-field ${errors.firstName ? "invalid" : ""}`}
          name="firstName"
          placeholder="First Name"
          fowardRef={register({ required: true })}
        />
        {errors.lastName ? (
          <p className="warning">Last Name is required. Please enter it.</p>
        ) : (
          ""
        )}
        <InputField
          className={`form-field ${errors.lastName ? "invalid" : ""}`}
          name="lastName"
          placeholder="Last Name"
          fowardRef={register({ required: true })}
        />
        {errors.username ? (
          <p className="warning">
            Invalid username. Please make sure it contain only (a-Z, 0-9, ., _,
            or -).
          </p>
        ) : (
          ""
        )}
        {errors.username?.type === NOT_AVIABLE ? (
          <p className="warning">
            Username not aviable. Please use another username
          </p>
        ) : (
          ""
        )}
        <InputField
          className={`form-field ${errors.username ? "invalid" : ""}`}
          name="username"
          placeholder="Username"
          fowardRef={register({
            required: true,
            pattern: new RegExp(RegExpForUsername),
          })}
        />
        {errors.email && errors.email?.type !== NOT_AVIABLE ? (
          <p className="warning">Email is required. Please entre it.</p>
        ) : (
          ""
        )}
        {errors.email?.type === NOT_AVIABLE ? (
          <p className="warning">Email not aviable. Please use another email</p>
        ) : (
          ""
        )}
        <InputField
          className={`form-field ${errors.email ? "invalid" : ""}`}
          name="email"
          placeholder="Email"
          fowardRef={register({
            required: true,
            pattern: new RegExp(RegExpForEmail),
          })}
        />
        {errors.password ? (
          <p className="warning">Password is required. Please entre it.</p>
        ) : (
          ""
        )}
        <InputField
          className={`form-field ${errors.password ? "invalid" : ""}`}
          type="password"
          name="password"
          placeholder="Password"
          fowardRef={register({
            min: 8,
          })}
        />
        {errors.confirmPassword?.type === PASSWORD_NOT_EQUAL ? (
          <p className="warning">
            Password not match. Please make sure there are the same
          </p>
        ) : (
          ""
        )}
        <InputField
          className={`form-field ${errors.confirmPassword ? "invalid" : ""}`}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          fowardRef={register()}
        />
        <div className="row-right">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>

      <Modal>{loading ? <Spinner /> : <h3>User create successfully</h3>}</Modal>
    </>
  );
};

export default SingUpPage;
