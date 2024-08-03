import { AddButtonProps } from "@/components/props/AddButtonProps";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";

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
            <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{`Add new ${props.name}`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
