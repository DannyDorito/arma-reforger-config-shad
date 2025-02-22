"use client";

import { Label } from "@radix-ui/react-label";
import { SwitchInputProps } from "../../props/CheckboxInputProps";
import { Switch } from "../switch";

export const SwitchInput = (props: SwitchInputProps) => {
  return (
    <div
      className="flex items-center space-x-2 justify-between"
      style={{ height: "40px" }}
    >
      {props.name && (
        <Label htmlFor={props.name} hidden={!props.name}>
          {props.name}
        </Label>
      )}
      <div className="flex items-center space-x-2 shrink-0">
        <Switch
          id={props.name}
          checked={props.parameter}
          onCheckedChange={(e) => props.change(e)}
          disabled={props.disabled}
          aria-label={`Input for ${props.name}`}
        />
        {props.buttons?.map((button, index) => {
          return <div key={`button-${props.name}-${index}`}>{button}</div>;
        })}
      </div>
    </div>
  );
};
