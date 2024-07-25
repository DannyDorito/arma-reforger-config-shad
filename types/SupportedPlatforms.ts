import { Option } from "@/components/ui/multiple-selector";
import { Platform } from "./Config";
export const SupportedPlatforms: Option[] = [
  {
    value: Platform.PLATFORM_PC.toString(),
    label: Platform.PLATFORM_PC.toString(),
  },
  {
    value: Platform.PLATFORM_XBL.toString(),
    label: Platform.PLATFORM_XBL.toString(),
  },
]
