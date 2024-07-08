'use client';
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Config } from "@/types/Config";
import { useState } from "react";

export default function Home() {

  let storedConfig;

  if (typeof window !== 'undefined') {
    storedConfig = localStorage.getItem('config') || '';
  }
  const [config, setConfig] = useState<Config>(JSON.parse(storedConfig || '{}'));
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
      const obj = JSON.parse( result ) as Config;
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <ThemeToggle/>
        <Label htmlFor="config">Upload Config File</Label>
        <Input id="config" accept="application/json" type="file" onChange={(event) => handleUploadJson(event.target.files)} />
        {Object.keys(config).length !== 0 && <Button onClick={() => handleDownloadAsync()}>Download {fileName}</Button>}
      </div>
    </main>
  );
}
