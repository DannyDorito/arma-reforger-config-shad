import { Config } from "@/types/Config";
export interface GamePropertiesTableProps
{
  config: Config,
  setConfig: ( c: Config ) => void;
  isDesktop: boolean;
}
