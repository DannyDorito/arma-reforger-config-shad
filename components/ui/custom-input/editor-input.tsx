"use client";

import { EditorInputProps } from "../../props/EditorInputProps";
import { Input } from "../input";
import { TableCell } from "../table";

export const EditorInput = ( props: EditorInputProps ) =>
{
  const parameterType = typeof props.parameter;

  let inputType: 'text' | 'number' | undefined;

  if ( parameterType === 'string' )
    inputType = 'text';
  else if ( parameterType === 'number' )
    inputType = 'number';

  return (
    <>
      <TableCell hidden={!props.name} className="font-medium">{props.name}</TableCell>
      <TableCell>
        <Input
          id={props.name}
          type={inputType}
          value={props.parameter}
          min={props.min}
          max={props.max}
          onChange={( e ) => console.log( e.target.value )}
          placeholder={props.placeholder}></Input>
      </TableCell>
    </>
  )
}



