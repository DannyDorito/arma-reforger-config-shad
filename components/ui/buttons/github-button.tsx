"use client";

import Link from "next/link";
import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { CodeXml } from "lucide-react";

export const GitHubButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Link
              href="https://github.com/DannyDorito/arma-reforger-config-shad"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Link to Danny Dorito's GitHub"
            >
              <CodeXml className="h-[1.2rem] w-[1.2rem]"></CodeXml>
              <span className="sr-only">Link to GitHub Repo</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Link to GitHub Repo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
