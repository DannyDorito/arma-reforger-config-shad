"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent>
            <p>Toggle theme</p>
          </TooltipContent>
          <PopoverContent align="end" className="w-30">
            <div className="flex flex-col">
              <span className="text-center">Theme</span>
              <Separator />
              <Button
                variant="ghost"
                onClick={() => setTheme("light")}
                className={theme === "light" ? "underline" : ""}
              >
                Light
              </Button>
              <Button
                variant="ghost"
                onClick={() => setTheme("dark")}
                className={theme === "dark" ? "underline" : ""}
              >
                Dark
              </Button>
              <Button
                variant="ghost"
                onClick={() => setTheme("system")}
                className={theme === "system" ? "underline" : ""}
              >
                System
              </Button>
            </div>
          </PopoverContent>
        </Tooltip>
      </Popover>
    </TooltipProvider>
  );
};
