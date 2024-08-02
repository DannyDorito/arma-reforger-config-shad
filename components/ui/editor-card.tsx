import { DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { EditorCardProps } from "../props/EditorCardProps";
import { Button } from "./button";
import { GitHubButton } from "./buttons/github-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { ThemeToggle } from "../theme-toggle";
import { Config } from "@/types/Config";
import { Loading } from "../loading";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Editor = dynamic(() => import('../editor').then(editor => editor.Editor), {
  loading: () => <Loading />
});

export const EditorCard = (props: EditorCardProps) => {
  const handleDownload = () => {
    const doc = document.createElement("a");
    doc.href = URL.createObjectURL(
      new Blob([JSON.stringify(props.config, null, 2)], {
        type: "application/json",
      })
    );
    doc.setAttribute("download", props.fileName);
    document.body.appendChild(doc);
    doc.click();
    document.body.removeChild(doc);
  };

  const routes = [
    "Base",
    "Operating",
    "A2S",
    "RCON",
    "Game",
    "Admins",
    "Game Properties",
    "Mods",
  ];

  const [current, setCurrent] = useState<string>("Base");

  const currentFormatting = (page: string) => (current === page ? "red" : "");

  return (
    <Card className="grid">
      <CardHeader>
        <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          ARMA Reforger Server Config Editor
        </CardTitle>
        <CardDescription>
          <Breadcrumb className="flex justify-evenly p-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => setCurrent("Base")}
                  className="cursor-pointer"
                >
                  <h2 className={currentFormatting("Base")}>Base</h2>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {routes.map((route, index) => {
                    return (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => setCurrent(route)}
                        className={currentFormatting(route)}
                      >
                        {route}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {current !== "Base" ? (
                  <BreadcrumbLink
                    onClick={() => setCurrent(current)}
                    className="cursor-pointer"
                  >
                    <h2 className={currentFormatting(current)}>{current}</h2>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink
                    onClick={() => setCurrent("Mods")}
                    className="cursor-pointer"
                  >
                    <h2 className={currentFormatting("Mods")}>{"Mods"}</h2>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Editor
          config={props.config}
          fileName={props.fileName}
          setConfig={props.setConfig}
          current={current}
        ></Editor>
      </CardContent>
      <CardFooter className="flex justify-between">
        <GitHubButton />
        <Button
          variant="outline"
          size="icon"
          onClick={() => props.setConfig({} as Config)}
          aria-label="Clear changes and pick a new file"
        >
          <TrashIcon className="h-[1.2rem] w-[1.2rem] red" />
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
  );
};
