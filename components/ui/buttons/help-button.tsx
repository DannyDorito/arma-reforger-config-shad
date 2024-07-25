"use client";

import Link from "next/link";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { HelpButtonProps } from "@/components/props/HelpButtonProps";
import { Button } from "../button";

const helpLink = (parameter: string) =>
  `https://community.bistudio.com/wiki/Arma_Reforger:Server_Config#${parameter}`;

export const HelpButton = (props: HelpButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      suppressHydrationWarning
      key={`${props.parameterName}-help`}
    >
      <Link
        href={helpLink(props.parameterName)}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`Open help wiki for ${props.parameterName}`}
      >
        <OpenInNewWindowIcon className="h-[1.2rem] w-[1.2rem]" />
      </Link>
    </Button>
  );
};
