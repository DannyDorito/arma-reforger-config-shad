export interface SelectInputProps
{
  parameters: string[],
  name?: string,
  disabled?: boolean;
  selected: string;
  change: ( v: string ) => void;
  isDesktop: boolean;
  buttons?: JSX.Element[];
}
