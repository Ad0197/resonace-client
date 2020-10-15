import React from "react";
import { Setting } from "../../redux/category/category.type";
import "./setting-item.styles.scss";

type SettingItem = {
  setting: Setting;
  active: boolean;
  changeSetting: Function;
};

const SettingItem: React.FC<SettingItem> = ({
  setting,
  active,
  changeSetting,
}) => {
  const resetSetting = changeSetting("");
  return (
    <div
      onClick={active ? resetSetting : changeSetting(setting.name)}
      className="setting-item"
    >
      <div className={`setting ${active ? "active" : ""}`}>
        <p className="setting-title">{setting.name.toUpperCase()}</p>
      </div>
      <img className="img" src={setting.img} alt="setting" />
    </div>
  );
};

export default SettingItem;
