import { PasswordInputProps } from "@/components/props/PasswordInputProps";
import { useState } from "react";
import { TableCell } from "../table";
import { Input } from "../input";
import { Button } from "../button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export const PasswordInput = (props: PasswordInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <TableCell hidden={!props.name} className="font-medium">
        {props.name}
      </TableCell>
      <TableCell>
        <div className="flex w-full items-center space-x-2">
          <Input
            id={props.name}
            type={show ? "text" : "password"}
            value={props.parameter}
            onChange={(e) => props.change(e.target.value)}
            placeholder={props.placeholder}
            autoComplete="false"
            aria-label={`Input for ${props.name}`}
          ></Input>
          <Button variant="outline" onClick={() => setShow(!show)}>
            {show ? (
              <EyeOpenIcon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <EyeClosedIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </TableCell>
    </>
  );
};
