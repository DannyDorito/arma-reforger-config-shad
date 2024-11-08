export interface EditorInputProps
{
  parameter: string | number | readonly string[] | undefined,
  name?: string,
  key: string,
  placeholder?: string,
  min?: number,
  max?: number
  change: ( v: string ) => void;
  disabled?: boolean;
  required?: boolean;
  isDesktop: boolean;
  buttons?: JSX.Element[];
}

