import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { filterSettingsFromFurniture } from "../../redux/category/category.selector";
import { Setting } from "../../redux/category/category.type";
import { Furniture } from "../../redux/furniture/furniture.types";
import SettingItem from "../setting-item/setting-item.component";
import "./settings-view.styles.scss";

type SettingsViewProps = {
  data: Furniture[];
  current?: string;
  category: string;
};

const SettingsView: React.FC<SettingsViewProps> = ({
  data,
  current,
  category,
}) => {
  const filterSettings = useSelector(filterSettingsFromFurniture(data));
  const history = useHistory();
  const changeSetting = (path: string) => () => {
    history.push(`/category/${category}/${path}`);
  };
  return (
    <div className="settings-view">
      <p className="title">Settings</p>
      <div className="show-items">
        {filterSettings.map((setting: Setting) => (
          <SettingItem
            key={setting.id}
            setting={setting}
            changeSetting={changeSetting}
            active={current === setting.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SettingsView;
