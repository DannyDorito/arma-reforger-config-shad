import { Config } from "@/types/Config";

export interface UploadCardProps
{
  setConfig: ( c: Config ) => void;
  setFile: ( f: File | undefined ) => void;
  setFileName: ( n: string ) => void;
  file: File | undefined;
}
