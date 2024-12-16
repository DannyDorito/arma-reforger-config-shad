import { Platform } from "./Config";
export const SupportedPlatforms = [
  {
    value: Platform.PLATFORM_PC.toString(),
    label: Platform.PLATFORM_PC.toString().replace( "PLATFORM_", "" ),
  },
  {
    value: Platform.PLATFORM_XBL.toString(),
    label: Platform.PLATFORM_XBL.toString().replace( "PLATFORM_", "" ),
  },
];
