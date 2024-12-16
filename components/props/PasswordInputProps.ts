import { JSX } from "react";

export interface PasswordInputProps
{
  parameter: string;
  name?: string;
  key: string;
  placeholder?: string;
  change: ( v: string ) => void;
  required?: boolean;
  isDesktop: boolean;
  buttons?: JSX.Element[];
}
