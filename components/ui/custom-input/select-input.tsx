"use client";

import { SelectInputProps } from "@/components/props/SelectInputProps";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Label } from "@radix-ui/react-label";

export const SelectInput = (props: SelectInputProps) => {
  return (
    <>
      {props.name && <Label htmlFor={props.name}>{props.name}</Label>}
      <div className="flex w-full items-center space-x-2">
        <Select
          disabled={props.disabled}
          onValueChange={(v) => props.change(v)}
          aria-label={`Input for ${props.name}`}
        >
          <SelectTrigger>
            <SelectValue placeholder={props.selected} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {props.parameters.map((parameter, index) => {
                return (
                  <SelectItem
                    defaultChecked={parameter === props.selected}
                    value={parameter}
                    key={`${props.name}-${index}`}
                  >
                    {parameter}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {props.buttons?.map((button, index) => {
          return <div key={`button-${props.name}-${index}`}>{button}</div>;
        })}
      </div>
    </>
  );
};
