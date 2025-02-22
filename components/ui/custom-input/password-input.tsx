"use client";

import { PasswordInputProps } from "@/components/props/PasswordInputProps";
import { useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@radix-ui/react-label";
import { Eye, EyeClosed } from "lucide-react";

export const PasswordInput = (props: PasswordInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      {props.name && (
        <Label htmlFor={props.name} hidden={!props.name}>
          {props.name}
          {props.required && (
            <span className="red font-extrabold">&nbsp;*</span>
          )}
        </Label>
      )}
      <div className="flex w-full items-center space-x-2">
        <Input
          id={props.name}
          type={show ? "text" : "password"}
          value={props.parameter}
          onChange={(e) => props.change(e.target.value)}
          placeholder={props.placeholder}
          autoComplete="false"
          aria-label={`Input for ${props.name}`}
        ></Input>
        {props.buttons?.map((button, index) => {
          return <div key={`button-${props.name}-${index}`}>{button}</div>;
        })}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" onClick={() => setShow(!show)}>
                {show ? (
                  <Eye className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <EyeClosed className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${show ? "Hide" : "Show"} Password for ${props.name}`}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};
