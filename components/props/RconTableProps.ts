import { Config } from "@/types/Config";

export interface RconTableProps
{
  config: Config,
  setConfig: ( c: Config ) => void;
  isDesktop: boolean;
}

