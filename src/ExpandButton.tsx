import React, { useState } from "react";
import IconElement from "./IconElement";
import ExpandIcon from "./assets/svg/expand.svg";
import CollapseIcon from "./assets/svg/collapse.svg";
// import ExpandIcon from "./assets/images/Tree/MenuArrow.png";
// import CollapseIcon from "./assets/images/Tree/InfoOpen.png";

export function ExpandButton(props: {
  expandable: boolean;
  expanded: boolean;
  onExpand: (e: any) => void;
  onCollapse: (e: any) => void;
}) {
  const [expanded, setExpanded] = useState(props.expanded);

  const handleClick = function (e: any) {
    if (expanded) {
      props.onCollapse(e);
    } else {
      props.onExpand(e);
    }
    setExpanded(!expanded);
  };
  if (props.expandable) {
    return (
      <div className="expand-btn clickable center" onClick={handleClick}>
        {expanded ? (
          <IconElement src={CollapseIcon} alt="click to expand" size="100%" />
        ) : (
          <IconElement src={ExpandIcon} alt="click to expand" size="100%" />
        )}
      </div>
    );
  } else {
    return <div className="expand-btn" />;
  }
}
