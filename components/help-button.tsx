"use client";

import Link from "next/link";
import { HelpButtonProps } from "./props/HelpButtonProps";
import { Button } from "./ui/button";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

const helpLink = (parameter: string) => `https://community.bistudio.com/wiki/Arma_Reforger:Server_Config#${parameter}`;

export const HelpButton = (props: HelpButtonProps) => {
  return (
    <Button variant="outline" size="icon" suppressHydrationWarning>
      <Link href={helpLink(props.parameterName)} rel="noopener noreferrer" target="_blank">
        <OpenInNewWindowIcon className="h-[1.2rem] w-[1.2rem]" />
      </Link>
    </Button>
  )
}
