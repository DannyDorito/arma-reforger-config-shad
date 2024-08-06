"use client";

import {
  ExclamationTriangleIcon,
  Pencil2Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Skeleton } from "./skeleton";
import dynamic from "next/dynamic";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { GitHubButton } from "./buttons/github-button";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";
import { UploadCardProps } from "../props/UploadCardProps";
import { Config } from "@/types/Config";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Turnstile = dynamic(() => import("@marsidev/react-turnstile").then(turnstile => turnstile.Turnstile), {
  loading: () => <Skeleton className="h-[64.4px] w-[300px] rounded-none"></Skeleton>
});

export const UploadCard = (props: UploadCardProps) => {
  const { theme } = useTheme();
  const [turnstileComplete, setTurnstileComplete] = useState<boolean>(false);
  const [turnstileSiteKey] = useState<string>(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
  );

  const [error, setError] = useState<string | undefined>(undefined);

  const handleUploadJson = async (files: FileList | null) => {
    try {
      if (files === null || files.length != 1) return;

      const file = files.item(0)!;

      if (file.type !== "application/json") {
        setError(`File is not of type '.json'`);
        return;
      }

      props.setFileName(file.name);
      props.setFile(file);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        props.setConfig({} as Config);
      } else {
        setError(undefined);
      }
    }
  };

  const readJson = () => {
    try {
      if (!props.file) return;
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        const result = event.target?.result as string;
        const obj = JSON.parse(result) as Config;
        props.setConfig(obj);
      });
      reader.readAsText(props.file);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        props.setConfig({} as Config);
      } else {
        setError(undefined);
      }
    }
  };

  const themeToTurnstileTheme = (theme: string | undefined) => {
    switch (theme) {
      case "dark":
        return "dark";
      case "light":
        return "light";
      default:
        return "auto";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>ARMA Reforger Server Config Editor</CardTitle>
        <CardDescription>
          Upload and edit your config.json file here!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full max-w items-center space-x-2">
          <Input
            id="config"
            accept="application/json"
            type="file"
            onChange={(event) => handleUploadJson(event.target.files)}
            className="cursor-pointer"
            aria-label="Upload .json file"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  disabled={props.file === undefined}
                  onClick={() => props.setFile(undefined)}
                  aria-label="Clear uploaded config file"
                >
                  <TrashIcon className="h-[1.2rem] w-[1.2rem] red"></TrashIcon>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear uploaded config file</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex justify-center space-y-1.5 px-6 p-top-1-5">
          <Turnstile
            siteKey={turnstileSiteKey}
            options={{
              theme: themeToTurnstileTheme(theme),
            }}
            onSuccess={() => {
              setTurnstileComplete(true);
            }}
            onError={(e) => setError(`CAPTCHA failed, error code ${e}`)}
            onExpire={() => setError(`CAPTCHA expired`)}
            onUnsupported={() => setError("CAPTCHA not supported by browser")}
          />
        </div>
        {error && (
          <div className="flex justify-center p-top-1-5">
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <GitHubButton />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {props.file === undefined ? (
                <Button
                  variant="outline"
                  size="icon"
                  disabled={!turnstileComplete}
                  onClick={() => {
                    props.setConfig(new Config());
                    props.setFileName("config.json");
                  }}
                  aria-label="Create new config file"
                >
                  <PlusIcon className="h-[1.2rem] w-[1.2rem]"></PlusIcon>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="icon"
                  disabled={props.file === undefined || !turnstileComplete}
                  onClick={() => readJson()}
                  aria-label="Start editing uploaded file"
                >
                  <Pencil2Icon className="h-[1.2rem] w-[1.2rem]"></Pencil2Icon>
                </Button>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {props.file === undefined
                  ? "Create new config file and edit"
                  : "Start editing uploaded file"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ThemeToggle />
      </CardFooter>
    </Card>
  );
};
