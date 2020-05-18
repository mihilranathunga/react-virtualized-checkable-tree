import React from "react";
import "./Checkbox.css";

export function CustomCheckBox(props: {
  class?: string;
  id: string;
  value: string;
  checked?: boolean;
  onCheck: Function;
}) {
  const handleCheck = function (e: any) {
    e.stopPropagation();
    props.onCheck(e);
  };

  return (
    <label className={"check-container " + props?.class} htmlFor={props.id}>
      <input
        type="checkbox"
        id={props.id}
        name={props.id}
        checked={props.checked}
        value={props.value}
        onChange={handleCheck}
      />
      <span className="checkmark"></span>
    </label>
  );
}
