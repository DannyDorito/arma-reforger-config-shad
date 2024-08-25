import { Option } from "../ui/multiple-selector";

export interface MultiSelectInputProps
{
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  options: Option[];
  selected: Option[];
  change: ( v: Option[] ) => void;
  isDesktop: boolean;
}
