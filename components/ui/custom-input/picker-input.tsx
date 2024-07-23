import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Command, CheckIcon } from "lucide-react";
import { useState } from "react";
import { PickerInputProps } from "./props/PickerInputProps";
import { Button } from "./ui/button";
import { CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command";

export const PickerInput = (props: PickerInputProps) => {
  const [value, setValue] = useState("");
  return (
    <Popover open={props.open} onOpenChange={props.setOpen}>
      <PopoverTrigger asChild>
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
                  setValue(currentValue === x ? "" : currentValue)
                  props.setOpen(false)
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
  )
}
