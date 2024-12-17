"use client";

import { EditorInputProps } from "../../props/EditorInputProps";
import { Alert, AlertTitle } from "../alert";
import { Input } from "../input";
import { TableCell } from "../table";
import { useState } from "react";
import { Label } from "../label";
import { TriangleAlert } from "lucide-react";

export const EditorInput = (props: EditorInputProps) => {
  const parameterType = typeof props.parameter;

  let inputType: "text" | "number" | undefined;

  if (parameterType === "string") inputType = "text";
  else if (parameterType === "number") inputType = "number";

  const [error, setError] = useState<string | undefined>(undefined);

  if (props.isDesktop) {
    return (
      <>
        {props.name && (
          <TableCell className="font-medium">
            {props.name}
            {props.required && (
              <span className="red font-extrabold">&nbsp;*</span>
            )}
          </TableCell>
        )}
        <TableCell>
          {error && (
            <Alert variant="destructive">
              <TriangleAlert className="h-4 w-4" />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <div className="flex items-center space-x-2">
            <Input
              id={props.name}
              type={inputType}
              value={props.parameter}
              min={props.min}
              max={props.max}
              onChange={(e) => {
                props.change(e.target.value);
                setError(e.target.validationMessage);
              }}
              placeholder={props.placeholder}
              disabled={props.disabled}
              aria-label={`Input for ${props.name}`}
            ></Input>
            {props.buttons?.map((button, index) => {
              return <div key={`button-${props.name}-${index}`}>{button}</div>;
            })}
          </div>
        </TableCell>
      </>
    );
  } else {
    return (
      <>
        {props.name && (
          <Label htmlFor={props.name}>
            {props.name}
            {props.required && (
              <span className="red font-extrabold">&nbsp;*</span>
            )}
          </Label>
        )}
        {error && (
          <Alert variant="destructive">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <div className="flex items-center space-x-2 shrink-0">
          <Input
            id={props.name}
            type={inputType}
            value={props.parameter}
            min={props.min}
            max={props.max}
            onChange={(e) => {
              props.change(e.target.value);
              setError(e.target.validationMessage);
            }}
            placeholder={props.placeholder}
            disabled={props.disabled}
            aria-label={`Input for ${props.name}`}
          ></Input>
          {props.buttons?.map((button, index) => {
            return <div key={`button-${props.name}-${index}`}>{button}</div>;
          })}
        </div>
      </>
    );
  }
};
