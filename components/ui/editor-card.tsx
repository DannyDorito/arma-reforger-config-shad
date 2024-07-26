import { DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { EditorCardProps } from "../props/EditorCardProps";
import { Button } from "./button";
import { GitHubButton } from "./buttons/github-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { ThemeToggle } from "../theme-toggle";
import { Config } from "@/types/Config";
import { Loading } from "../loading";
import dynamic from "next/dynamic";

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          ARMA Reforger Server Config Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Editor
          config={props.config}
          fileName={props.fileName}
          setConfig={props.setConfig}
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
