import React from "react";
import "./menu-option.styles.scss";
import { useHistory, useLocation } from "react-router";

type MenuOptionsProps = {
  path?: string;
  children?: JSX.Element[] | JSX.Element;
  option: string;
  onClick?: () => void;
};

const MenuOption: React.FC<MenuOptionsProps> = ({
  path,
  children,
  option,
  onClick,
}) => {
  const location = useLocation().pathname;
  const history = useHistory();
  const changeRoute = (path: string) => () => history.push(path);
  return (
    <button
      className={`${location === path ? "current" : "option"}`}
      onClick={(event) => {
        event.preventDefault();
        if (onClick) onClick();
        if (path) changeRoute(path);
      }}
    >
      {children}
      <p className="text-option">{option}</p>
    </button>
  );
};

export default MenuOption;
