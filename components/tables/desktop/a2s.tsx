"use client";

import { A2STableProps } from "@/components/props/A2STableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { A2s } from "@/types/Config";

export const A2STable = (props: A2STableProps) => {
  if (props.isDesktop) {
    return (
      <Table>
        <CustomTableHeader headers={["Name", "Value", "Actions"]} />
        <TableBody>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
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
              required={true}
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
              isDesktop={props.isDesktop}
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
  } else {
    return (
      <>
        <EditorInput
          isDesktop={props.isDesktop}
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
          required={true}
        />
        <EditorInput
          isDesktop={props.isDesktop}
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
      </>
    );
  }
};
