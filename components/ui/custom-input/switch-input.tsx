import { SwitchInputProps } from "../../props/CheckboxInputProps";
import { Switch } from "../switch";
import { TableCell } from "../table";

export const SwitchInput = (props: SwitchInputProps) => {
  return (
    <>
      <TableCell hidden={!props.name} className="font-medium">
        {props.name}
      </TableCell>
      <TableCell>
        <Switch
          id={props.name}
          checked={props.parameter}
          onCheckedChange={(e) => props.change(e)}
        />
      </TableCell>
    </>
  );
};
