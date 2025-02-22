import { JSX } from "react";

export interface TextAreaInputProps
{
  parameter: string;
  id: string;
  placeholder?: string;
  change: ( v: string ) => void;
  name: string;
  buttons?: JSX.Element[];
}
