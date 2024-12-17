"use client";

import { AddButtonProps } from "@/components/props/AddButtonProps";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { Plus } from "lucide-react";

export const AddButton = (props: AddButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            key={`Add-${props.name}}`}
            aria-label={`Add new ${props.name}`}
            onClick={props.add}
          >
            <Plus className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Add {props.name}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{`Add new ${props.name}`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
