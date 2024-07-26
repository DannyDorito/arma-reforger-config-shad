"use client";

import { ResetButtonProps } from "@/components/props/ResetButtonProps";
import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "../button";
export const ResetButton = (props: ResetButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={props.click}
      aria-label="Reset to default value"
      disabled={props.disabled}
    >
      <ResetIcon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Reset to default value</span>
    </Button>
  );
};
