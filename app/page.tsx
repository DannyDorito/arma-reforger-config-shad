"use client";

import { Loading } from "@/components/loading";
import { Config } from "@/types/Config";
import dynamic from "next/dynamic";
import { useState } from "react";

const EditorCard = dynamic(() => import('@/components/ui/editor-card').then(editor => editor.EditorCard), {
  loading: () => <Loading />
});

const UploadCard = dynamic(() => import('@/components/ui/upload-card').then(upload => upload.UploadCard), {
  loading: () => <Loading />
});

export default function Home() {
  const [config, setConfig] = useState<Config>({} as Config);
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      {Object.keys(config).length === 0 ? (
        <UploadCard
          setConfig={setConfig}
          setFile={setFile}
          setFileName={setFileName}
          file={file}
        />
      ) : (
        <EditorCard config={config} fileName={fileName} setConfig={setConfig} />
      )}
    </main>
  );
}
