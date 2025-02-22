import { JSX } from "react";

export interface SelectInputProps
{
  parameters: string[];
  name?: string;
  disabled?: boolean;
  selected: string;
  change: ( v: string ) => void;
  buttons?: JSX.Element[];
}
