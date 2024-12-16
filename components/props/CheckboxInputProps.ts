import { JSX } from "react";

export interface SwitchInputProps
{
  parameter: boolean;
  name?: string;
  key: string;
  placeholder?: string;
  change: ( v: boolean ) => void;
  disabled?: boolean;
  isDesktop: boolean;
  buttons?: JSX.Element[];
}
