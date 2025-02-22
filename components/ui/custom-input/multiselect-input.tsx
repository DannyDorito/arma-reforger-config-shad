"use client";

import { MultiSelectInputProps } from "@/components/props/MultiSelectInputProps";
import { Label } from "@radix-ui/react-label";
import { MultiSelect } from "../multi-select";

export const MultiSelectInput = (props: MultiSelectInputProps) => {
  return (
    <>
      {props.name && <Label htmlFor={props.name}>{props.name}</Label>}
      <MultiSelect
        placeholder={props.placeholder}
        options={props.options}
        onValueChange={(v) => {
          props.change(v);
        }}
        disabled={props.disabled}
        aria-label={`Input for ${props.name}`}
      />
      {props.buttons?.map((button, index) => {
        return <div key={`button-${props.name}-${index}`}>{button}</div>;
      })}
    </>
  );
};
