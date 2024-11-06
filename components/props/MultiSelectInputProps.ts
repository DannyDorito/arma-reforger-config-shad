import { OptionsInterface } from "../ui/multi-select";

export interface MultiSelectInputProps
{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  options: OptionsInterface[];
  selected: OptionsInterface[];
  change: ( v: string[] ) => void;
  isDesktop: boolean;
}
