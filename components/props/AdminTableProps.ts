import { Config } from "@/types/Config";
export interface AdminTableProps
{
  config: Config,
  setConfig: ( c: Config ) => void;
}
