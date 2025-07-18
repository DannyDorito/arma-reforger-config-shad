"use client";

import { TextAreaInputProps } from "@/components/props/TextAreaInputProps";
import { useCodeMirror } from "@uiw/react-codemirror";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { json } from "@codemirror/lang-json";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Label } from "../label";

const extensions = [json()];

export const TextAreaInput = (props: TextAreaInputProps) => {
  const { theme } = useTheme();

  const editor = useRef(null);
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions,
    value: props.parameter,
    theme: theme === "light" ? xcodeLight : xcodeDark,
    onChange: (v, _) => {
      try {
        props.change(JSON.parse(v));
      } catch {}
    },
    placeholder: props.placeholder,
    id: props.id,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

  return (
    <>
      {props.name && <Label htmlFor={props.name}>{props.name}</Label>}
      <div className="flex items-center space-x-2">
        <div ref={editor} />
        {props.buttons?.map((button, index) => {
          return <div key={`button-${props.name}-${index}`}>{button}</div>;
        })}
      </div>
    </>
  );
};
