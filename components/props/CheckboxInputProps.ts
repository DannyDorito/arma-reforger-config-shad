import { JSX } from "react";

export interface SwitchInputProps
{
  parameter: boolean;
  name?: string;
  key: string;
  placeholder?: string;
  change: ( v: boolean ) => void;
  disabled?: boolean;
  buttons?: JSX.Element[];
}
