"use client";

import { DeleteButtonProps } from "@/components/props/DeleteButtonProps";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={props.click}
            aria-label={`Delete ${props.name}`}
          >
            <Cross2Icon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Delete {props.name}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{`Delete ${props.name}`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
