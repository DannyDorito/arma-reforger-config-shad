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
import { TableCell } from "../table";

export const SelectInput = (props: SelectInputProps) => {
  return (
    <>
      {props.name && (
        <TableCell className="font-medium">{props.name}</TableCell>
      )}
      <TableCell>
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
      </TableCell>
    </>
  );
};
