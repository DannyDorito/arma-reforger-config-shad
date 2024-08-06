"use client";

import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useState } from "react";
import { Button } from "../button";
import { PickerInputProps } from "@/components/props/PickerInputProps";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const PickerInput = (props: PickerInputProps) => {
  const [value, setValue] = useState("");
  return (
    <Popover
      open={props.open}
      onOpenChange={props.setOpen}
      aria-label={`Input for ${props.name}`}
    >
      <PopoverTrigger asChild>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={props.open}
                className="w-[200px] justify-between"
              >
                {value
                  ? props.parameters.find((x) => x === value)
                  : `Select ${props.name}`}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`Select ${props.name}`}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${props.name}`} className="h-9" />
          <CommandEmpty>{`No ${props.name} found`}</CommandEmpty>
          <CommandGroup>
            {props.parameters.map((x) => (
              <CommandItem
                key={x}
                value={x}
                onSelect={(currentValue) => {
                  setValue(currentValue === x ? "" : currentValue);
                  props.setOpen(false);
                }}
              >
                {props.name}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === x ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
