"use client";

import { Editor } from "@/components/editor";
import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
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
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [config, setConfig] = useState<Config>({} as Config);
  const [fileName, setFileName] = useState<string>("");

  const [error, setError] = useState<string | undefined>(undefined);

  const handleUploadJson = async (files: FileList | null) => {
    try {
      if (files === null || files.length != 1) return;

      const file = files.item(0)!;

      if (file.type !== "application/json") {
        setError(`File is not of type '.json'`);
        return;
      }

      setFileName(file.name);

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
      <div>
        {Object.keys(config).length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>ARMA Reforger Server Config Editor</CardTitle>
              <CardDescription>
                Upload and edit your config.json file here!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                id="config"
                accept="application/json"
                type="file"
                onChange={(event) => handleUploadJson(event.target.files)}
                style={{ cursor: "pointer" }}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="icon">
                <Link
                  href="https://github.com/DannyDorito/arma-reforger-config-shad"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]"></GitHubLogoIcon>
                </Link>
              </Button>
              <ThemeToggle />
            </CardFooter>
            {error && (
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
                ARMA Reforger Server Config Editor
              </CardTitle>
              <div className="flex justify-evenly">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setConfig({} as Config)}
                >
                  <TrashIcon className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">
                    Clear changes and pick a new file
                  </span>
                </Button>
                <ThemeToggle />
              </div>
            </CardHeader>
            <CardContent>
              <Editor
                config={config}
                fileName={fileName}
                setConfig={setConfig}
              ></Editor>
            </CardContent>
            <CardFooter className="flex justify-evenly">
              <Button onClick={() => handleDownload()}>
                Download {fileName}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
}
