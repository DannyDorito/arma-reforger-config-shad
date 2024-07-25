"use client";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { EditorInputProps } from "../../props/EditorInputProps";
import { Alert, AlertTitle } from "../alert";
import { Input } from "../input";
import { TableCell } from "../table";
import { useState } from "react";

export const EditorInput = (props: EditorInputProps) => {
  const parameterType = typeof props.parameter;

  let inputType: "text" | "number" | undefined;

  if (parameterType === "string") inputType = "text";
  else if (parameterType === "number") inputType = "number";

  const [error, setError] = useState<string | undefined>(undefined);

  return (
    <>
      {props.name && (
        <TableCell className="font-medium">{props.name}</TableCell>
      )}
      <TableCell>
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
        {error && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
      </TableCell>
    </>
  );
};
