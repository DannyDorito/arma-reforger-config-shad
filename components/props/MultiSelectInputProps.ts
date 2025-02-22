import { JSX } from "react";
import { OptionsInterface } from "../ui/multi-select";

export interface MultiSelectInputProps
{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  options: OptionsInterface[];
  selected: OptionsInterface[];
  change: ( v: string[] ) => void;
  buttons?: JSX.Element[];
}
