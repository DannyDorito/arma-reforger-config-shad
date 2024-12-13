import { Config } from "@/types/Config";
import { Dispatch, SetStateAction } from "react";

export interface EditorCardProps
{
  config: Config;
  fileName: string;
  setConfig: Dispatch<SetStateAction<Config>>;
  isDesktop: boolean;
}
