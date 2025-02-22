"use client";

import { EditorCardProps } from "../../props/EditorCardProps";
import { Button } from "../button";
import { GitHubButton } from "../buttons/github-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { ThemeToggle } from "../../theme-toggle";
import { Config } from "@/types/Config";
import { Loading } from "../../loading";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Navigator } from "./navigator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FileSaver from "file-saver";
import { HardDriveDownload, Trash2 } from "lucide-react";

const Editor = dynamic(
  () => import("../../editor").then((editor) => editor.Editor),
  {
    loading: () => <Loading />,
  }
);

export const EditorCard = (props: EditorCardProps) => {
  const handleDownload = () => {
    try {
      const isFileSaverSupported = !!new Blob();
      if (isFileSaverSupported) {
        const blob = new Blob([JSON.stringify(props.config, null, 2)], {
          type: "application/json",
        });
        FileSaver.saveAs(blob, props.fileName);
      }
    } catch (e) {}
  };

  const [current, setCurrent] = useState<string>("Base");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 font-extrabold text-center">
          ARMA Reforger Server Config Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Navigator current={current} setCurrent={setCurrent} />
        <Editor
          config={props.config}
          fileName={props.fileName}
          setConfig={props.setConfig}
          current={current}
        ></Editor>
      </CardContent>
      <CardFooter className="flex justify-between">
        <GitHubButton />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => props.setConfig({} as Config)}
                aria-label="Clear changes and pick a new file"
              >
                <Trash2 className="h-[1.2rem] w-[1.2rem] red" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Clear changes and pick a new file</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => handleDownload()}
                variant="outline"
                size="icon"
                aria-label="Download file"
              >
                <HardDriveDownload className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download file</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ThemeToggle />
      </CardFooter>
    </Card>
  );
};
