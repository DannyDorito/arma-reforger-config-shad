import { Config } from "@/types/Config";
import { Dispatch, SetStateAction } from "react";

export interface EditorProps {
  config: Config;
  fileName: string;
  handleDownload: () => void;
  setConfig: Dispatch<SetStateAction<Config>>;
}
