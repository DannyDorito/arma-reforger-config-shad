export interface TextAreaInputProps
{
  parameter: string;
  id: string,
  placeholder?: string,
  change: ( v: string ) => void;
  name: string;
  isDesktop: boolean;
  buttons?: JSX.Element[];
}
