import { A2s } from "@/types/Config";
import { A2STableProps } from "../props/A2STableProps";
import { CustomTableHeader } from "../table-header";
import { EditorInput } from "../ui/custom-input/editor-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { ResetButton } from "../ui/buttons/reset-button";
import { HelpButton } from "../ui/buttons/help-button";

export const A2STable = (props: A2STableProps) => {
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <EditorInput
            parameter={props.config.a2s?.address}
            name="Address"
            key="a2s.address"
            placeholder="xxx.xxx.xxx.xxx"
            change={(v) =>
              props.setConfig({
                ...props.config,
                a2s: { ...props.config.a2s, address: v },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  a2s: { ...props.config.a2s, address: new A2s().address },
                })
              }
            />
            <HelpButton parameterName="address" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.a2s?.port}
            min={1}
            max={65535}
            name="Port"
            key="a2s.port"
            change={(v) =>
              props.setConfig({
                ...props.config,
                a2s: { ...props.config.a2s, port: parseInt(v) },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  a2s: { ...props.config.a2s, port: new A2s().port },
                })
              }
            />
            <HelpButton parameterName="port" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
