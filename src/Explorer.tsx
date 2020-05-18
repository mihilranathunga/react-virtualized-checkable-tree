import React, { useState } from "react";
import VirtualTree from "./VirtualTree";
import { TreeDataItem } from "./treeDataItem";
import PointCloudNode from "./assets/images/Nodes/PointCloudNode.png";
import PolylinesNode from "./assets/images/Nodes/PolylinesNode.png";
import SurfaceNode from "./assets/images/Nodes/SurfaceNode.png";

const menuStyle = {
  display: "flex",
  padding: "5px 5px"
};
const menuItemStyle = {
  marginInlineEnd: "10px"
};
const RANDOM_WORDS = [
  "abstrusity",
  "advertisable",
  "bellwood",
  "benzole",
  "boreum",
  "brenda",
  "cassiopeian",
  "chansonnier",
  "cleric",
  "conclusional",
  "conventicle",
  "copalm",
  "cornopion",
  "crossbar",
  "disputative",
  "djilas",
  "ebracteate",
  "ephemerally",
  "epidemical",
  "evasive",
  "eyeglasses",
  "farragut",
  "fenny",
  "ferryman",
  "fluently",
  "foreigner",
  "genseng",
  "glaiket",
  "haunch",
  "histogeny",
  "illocution",
  "imprescriptible",
  "inapproachable",
  "incisory",
  "intrusiveness",
  "isoceraunic",
  "japygid",
  "juiciest",
  "jump",
  "kananga",
  "leavening",
  "legerdemain",
  "licence",
  "licia",
  "luanda",
  "malaga",
  "mathewson",
  "nonhumus",
  "nonsailor",
  "nummary",
  "nyregyhza",
  "onanist",
  "opis",
  "orphrey",
  "paganising",
  "pebbling",
  "penchi",
  "photopia",
  "pinocle",
  "principally",
  "prosector.",
  "radiosensitive",
  "redbrick",
  "reexposure",
  "revived",
  "subexternal",
  "sukarnapura",
  "supersphenoid",
  "tabularizing",
  "territorialism",
  "tester",
  "thalassography",
  "tuberculise",
  "uncranked",
  "undersawyer",
  "unimpartible",
  "unsubdivided",
  "untwining",
  "unwaived",
  "webfoot",
  "wedeling",
  "wellingborough",
  "whiffet",
  "whipstall",
  "wot",
  "yonkersite",
  "zonary"
];

export function Explorer() {
  const [icon, setIcon] = useState("points");
  const [checkType, setCheckType] = useState("normal");
  const [checkState, setCheckState] = useState("normal");

  const handleIconChange = (event: any) => {
    setIcon(event.target.value);
  };
  const handleCheckTypeChange = (event: any) => {
    setCheckType(event.target.value);
  };
  const handleCheckStateChange = (event: any) => {
    setCheckState(event.target.value);
  };

  let iconImage = PointCloudNode;

  if (icon === "lines") {
    iconImage = PolylinesNode;
  } else if (icon === "surface") {
    iconImage = SurfaceNode;
  }

  const createRandomizedItem = (depth: number) => {
    const item: any = {
      id: "",
      expanded: false,
      children: [],
      name: "",
      icon: iconImage,
      iconDescription: "node",
      selected: false,
      checked: false,
      indeterminate: false,
      isFilter: checkType === "filter" ? true : false,
      isRadio: false,
      disabled: checkState === "disabled" ? true : false,
      visible: true
    };
    item.name = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
    item.id = item.name;

    var numChildren = depth < 3 ? Math.floor(Math.random() * 5) : 0;
    for (var i = 0; i < numChildren; i++) {
      item.children.push(createRandomizedItem(depth + 1));
    }

    item.expanded = numChildren > 0 && Math.random() < 0.25;

    return item;
  };

  const createRandomizedData = () => {
    var data = [];

    for (var i = 0; i < 10000; i++) {
      data.push(createRandomizedItem(0));
    }

    return data;
  };

  const data = createRandomizedData();

  return (
    <React.Fragment>
      <div style={menuStyle}>
        <label style={menuItemStyle}>Icon Type</label>
        <select
          id="iconType"
          value={icon}
          style={menuItemStyle}
          onChange={handleIconChange}
        >
          <option value="points">Points</option>
          <option value="lines">Lines</option>
          <option value="surface">Surface</option>
        </select>
        <label style={menuItemStyle}>Checkbox Type</label>
        <select
          id="checkboxType"
          style={menuItemStyle}
          value={checkType}
          onChange={handleCheckTypeChange}
        >
          <option value="normal">Normal</option>
          <option value="filter">Filter</option>
        </select>
        <label style={menuItemStyle}>Checkbox State</label>
        <select
          id="checkboxState"
          style={menuItemStyle}
          value={checkState}
          onChange={handleCheckStateChange}
        >
          <option value="normal">Normal</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>
      <div className="explorer">
        <VirtualTree data={data} />
      </div>
    </React.Fragment>
  );
}
