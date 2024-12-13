import { Config } from "@/types/Config";
import { Dispatch, SetStateAction } from "react";

export interface EditorProps
{
  config: Config;
  fileName: string;
  setConfig: Dispatch<SetStateAction<Config>>;
  current: string;
  isDesktop: boolean;
}
