import { Config } from "@/types/Config";

export interface BaseTableProps
{
  config: Config;
  setConfig: ( c: Config ) => void;
}
