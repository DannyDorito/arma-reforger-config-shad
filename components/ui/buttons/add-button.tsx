import { AddButtonProps } from "@/components/props/AddButtonProps";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../button";

export const AddButton = (props: AddButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      suppressHydrationWarning
      key={`Add-${props.name}}`}
      aria-label={`Add new ${props.name}`}
      onClick={props.add}
    >
      <PlusCircledIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};
