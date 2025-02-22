import { Config } from "@/types/Config";
export interface GameTableProps
{
  config: Config;
  setConfig: ( c: Config ) => void;
}
