import { TextAreaInputProps } from "@/components/props/TextAreaInputProps";
import { TableCell } from "../table";
import { useCodeMirror } from "@uiw/react-codemirror";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { json } from "@codemirror/lang-json";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

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
    id: props.key,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current, setContainer]);

  return (
    <TableCell>
      <div ref={editor} />
    </TableCell>
  );
};
