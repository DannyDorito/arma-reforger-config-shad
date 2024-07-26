"use client";

import { Loading } from "@/components/loading";
import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { GitHubButton } from "@/components/ui/buttons/github-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Config } from "@/types/Config";
import {
  DownloadIcon,
  ExclamationTriangleIcon,
  Pencil2Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const Editor = dynamic(() => import('../components/editor').then(editor => editor.Editor), {
  loading: () => <Loading />
});

export default function Home() {
  const { theme } = useTheme();

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

  const [config, setConfig] = useState<Config>({} as Config);
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | undefined>(undefined);

  const [turnstileComplete, setTurnstileComplete] = useState<boolean>(false);

  const [turnstileSiteKey] = useState<string>(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
  );

  const handleUploadJson = async (files: FileList | null) => {
    try {
      if (files === null || files.length != 1) return;

      const file = files.item(0)!;

      if (file.type !== "application/json") {
        setError(`File is not of type '.json'`);
        return;
      }

      setFileName(file.name);
      setFile(file);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setConfig({} as Config);
      } else {
        setError(undefined);
      }
    }
  };

  const readJson = () => {
    try {
      setLoading(true);
      if (!file) return;
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        const result = event.target?.result as string;
        const obj = JSON.parse(result) as Config;
        setConfig(obj);
      });
      reader.readAsText(file);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setConfig({} as Config);
      } else {
        setError(undefined);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const doc = document.createElement("a");
    doc.href = URL.createObjectURL(
      new Blob([JSON.stringify(config, null, 2)], {
        type: "application/json",
      })
    );
    doc.setAttribute("download", fileName);
    document.body.appendChild(doc);
    doc.click();
    document.body.removeChild(doc);
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-evenly p-24"
      suppressHydrationWarning
    >
        {Object.keys(config).length === 0 ? (
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
                  style={{ cursor: "pointer" }}
                  aria-label="Upload .json file"
                />
                <Button
                  variant="outline"
                  size="icon"
                  disabled={file === undefined}
                  onClick={() => setFile(undefined)}
                  aria-label="Clear uploaded config file"
                >
                  <TrashIcon className="h-[1.2rem] w-[1.2rem]"></TrashIcon>
                </Button>
              </div>
              <div
                className="flex justify-center space-y-1.5 px-6"
                style={{ paddingTop: "1.5rem" }}
              >
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
                  onUnsupported={() =>
                    setError("CAPTCHA not supported by browser")
                  }
                />
              </div>
              {error && (
                <div
                  className="flex justify-center"
                  style={{ paddingTop: "1.5rem" }}
                >
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
              {file === undefined ? (
                <Button
                  variant="outline"
                  size="icon"
                  disabled={!turnstileComplete}
                  onClick={() => {
                    setConfig(new Config());
                    setFileName("config.json");
                  }}
                  aria-label="Create new config file"
                >
                  <PlusIcon className="h-[1.2rem] w-[1.2rem]"></PlusIcon>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="icon"
                  disabled={file === undefined || !turnstileComplete}
                  onClick={() => readJson()}
                >
                  <Pencil2Icon className="h-[1.2rem] w-[1.2rem]"></Pencil2Icon>
                </Button>
              )}
              <ThemeToggle />
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
                ARMA Reforger Server Config Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Editor
                config={config}
                fileName={fileName}
                setConfig={setConfig}
              ></Editor>
            </CardContent>
            <CardFooter className="flex justify-between">
              <GitHubButton />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setConfig({} as Config)}
                aria-label="Clear changes and pick a new file"
              >
                <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button
                onClick={() => handleDownload()}
                variant="outline"
                size="icon"
                aria-label="Download file"
              >
                <DownloadIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <ThemeToggle />
            </CardFooter>
          </Card>
        )}
    </main>
  );
}
