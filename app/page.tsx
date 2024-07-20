'use client';
import { Editor } from "@/components/editor";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Config } from "@/types/Config";
import { useEffect, useState } from "react";

export default function Home() {

  const [config, setConfig] = useState<Config>({} as Config);
  const [fileName, setFileName] = useState<string>('');

  const saveLocalStorage = () => {
    localStorage.setItem('config', JSON.stringify(config));
  }

  const handleUploadJson = async (files: FileList | null) => {
    if (files === null || files.length != 1)
      return;

    const file = files.item(0)!;

    if (file.type !== 'application/json')
      return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const result = event.target?.result as string;
      const obj = JSON.parse(result) as Config;
      setConfig(obj);
    });
    reader.readAsText(file);
    saveLocalStorage();
  }

  const handleDownloadAsync = async () => {
    const doc = document.createElement("a");
    doc.href = URL.createObjectURL(new Blob([JSON.stringify(config, null, 2)], {
      type: 'application/json'
    }));
    doc.setAttribute('download', fileName);
    document.body.appendChild(doc);
    doc.click();
    document.body.removeChild(doc);
  }

  useEffect(() => {
    let storedConfig;

    if (typeof window !== 'undefined') {
      storedConfig = localStorage.getItem('config') || '';
      setConfig(JSON.parse(storedConfig));
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">ARMA Reforger Server Config Editor</h1>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="grid max-w-sm items-center gap-1.5">
          <ThemeToggle/>
          <h1>{Object.keys(config).length}</h1>
          <Label htmlFor="config">Upload Config File</Label>
          <Input id="config" accept="application/json" type="file" onChange={(event) => handleUploadJson(event.target.files)} />
          <Button hidden={Object.keys(config).length !== 0} onClick={() => handleDownloadAsync()}>Download {fileName}</Button>
        </div>
      </div>
      <Editor config={config} fileName={fileName}></Editor>
    </main>
  );
}
