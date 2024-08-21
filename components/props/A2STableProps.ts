import { Config } from "@/types/Config";

export interface A2STableProps
{
  config: Config,
  setConfig: ( c: Config ) => void;
  isDesktop: boolean;
}
