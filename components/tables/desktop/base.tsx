"use client";

import { Config } from "@/types/Config";
import { ResetButton } from "../ui/buttons/reset-button";
import { HelpButton } from "../ui/buttons/help-button";
import { CustomTableHeader } from "../table-header";
import { EditorInput } from "../ui/custom-input/editor-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { BaseTableProps } from "../props/BaseTableProps";

export const BaseTable = (props: BaseTableProps) => {
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <EditorInput
            parameter={props.config.bindAddress}
            name="Bind Address"
            key="bindAddress"
            placeholder="xxx.xxx.xxx.xxx"
            change={(v) => props.setConfig({ ...props.config, bindAddress: v })}
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  bindAddress: new Config().bindAddress,
                })
              }
            />
            <HelpButton parameterName="bindAddress" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.bindPort}
            min={1}
            max={65535}
            name="Bind Port"
            key="bindPort"
            change={(v) =>
              props.setConfig({ ...props.config, bindPort: parseInt(v) })
            }
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  bindPort: new Config().bindPort,
                })
              }
            />
            <HelpButton parameterName="bindPort" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.publicAddress}
            name="Public Address"
            key="publicAddress"
            placeholder="xxx.xxx.xxx.xxx"
            change={(v) =>
              props.setConfig({ ...props.config, publicAddress: v })
            }
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  publicAddress: new Config().publicAddress,
                })
              }
            />
            <HelpButton parameterName="publicAddress" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.publicPort}
            min={1}
            max={65535}
            name="Public Port"
            key="publicPort"
            change={(v) =>
              props.setConfig({ ...props.config, publicPort: parseInt(v) })
            }
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  publicPort: new Config().publicPort,
                })
              }
            />
            <HelpButton parameterName="publicPort" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
