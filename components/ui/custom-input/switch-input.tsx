"use client";

import { Label } from "@radix-ui/react-label";
import { SwitchInputProps } from "../../props/CheckboxInputProps";
import { Switch } from "../switch";
import { TableCell } from "../table";

export const SwitchInput = (props: SwitchInputProps) => {
  if (props.isDesktop) {
    return (
      <>
        <TableCell hidden={!props.name} className="font-medium">
          {props.name}
        </TableCell>
        <TableCell>
          <Switch
            id={props.name}
            checked={props.parameter}
            onCheckedChange={(e) => props.change(e)}
            disabled={props.disabled}
            aria-label={`Input for ${props.name}`}
          />

        </TableCell>          {props.buttons?.map((button, index) => {
            return <div key={`button-${props.name}-${index}`}>{button}</div>;
          })}
      </>
    );
  } else {
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
    );
  }
};
