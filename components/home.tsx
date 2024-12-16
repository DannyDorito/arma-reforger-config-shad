"use client";

import { Loading } from "@/components/loading";
import { Config } from "@/types/Config";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const EditorCard = dynamic(
  () =>
    import("@/components/ui/cards/editor-card").then(
      (editor) => editor.EditorCard
    ),
  {
    loading: () => <Loading />,
  }
);

const UploadCard = dynamic(
  () =>
    import("@/components/ui/cards/upload-card").then(
      (upload) => upload.UploadCard
    ),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

export const Home = () => {
  const [config, setConfig] = useState<Config>({} as Config);
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const useMediaQuery = (query: string) => {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);

    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);

      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);

    return match;
  };

  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      {Object.keys(config).length === 0 ? (
        <main className="flex min-h-screen items-center justify-evenly p-24">
          <UploadCard
            setConfig={setConfig}
            setFile={setFile}
            setFileName={setFileName}
            file={file}
            isDesktop={isDesktop}
          />
        </main>
      ) : (
        <main className="flex min-h-screen justify-evenly p-24">
          <EditorCard
            config={config}
            fileName={fileName}
            setConfig={setConfig}
            isDesktop={isDesktop}
          />
        </main>
      )}
    </>
  );
};

export default Home;
