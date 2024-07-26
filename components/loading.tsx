import { cn } from "@/lib/utils";
import { SymbolIcon } from "@radix-ui/react-icons";

export const Loading = () => {
  return (
    <div className="flex justify-center">
      <SymbolIcon className={cn("animate-spin", 'h-[1.2rem] w-[1.2rem]')}></SymbolIcon>
    </div>
  );
};
