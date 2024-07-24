"use client";

import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ResetButtonProps } from "./props/ResetButtonProps";

export const ResetButton = (props: ResetButtonProps) => {
  return (
    <Button variant="outline" size="icon" onClick={props.click}>
      <ResetIcon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Reset to default</span>
    </Button>
  );
};
