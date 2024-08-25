"use client";

import { PasswordInputProps } from "@/components/props/PasswordInputProps";
import { useState } from "react";
import { TableCell } from "../table";
import { Input } from "../input";
import { Button } from "../button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@radix-ui/react-label";

export const PasswordInput = (props: PasswordInputProps) => {
  const [show, setShow] = useState<boolean>(false);
  if (props.isDesktop) {
    return (
      <>
        <TableCell hidden={!props.name} className="font-medium">
          {props.name}
          {props.required && <span className="red">&nbsp;*</span>}
        </TableCell>
        <TableCell>
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={() => setShow(!show)}>
                    {show ? (
                      <EyeOpenIcon className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                      <EyeClosedIcon className="h-[1.2rem] w-[1.2rem]" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`${show ? "Hide" : "Show"} Password for ${
                    props.name
                  }`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </TableCell>
      </>
    );
  } else {
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setShow(!show)}>
                  {show ? (
                    <EyeOpenIcon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <EyeClosedIcon className="h-[1.2rem] w-[1.2rem]" />
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
  }
};
