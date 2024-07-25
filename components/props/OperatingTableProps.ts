import { Config } from "@/types/Config";

export interface OperatingTableProps
{
  config: Config,
  setConfig: ( c: Config ) => void;
}
