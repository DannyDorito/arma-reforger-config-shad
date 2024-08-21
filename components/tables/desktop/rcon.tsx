"use client";

import { RconTableProps } from "@/components/props/RconTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { PasswordInput } from "@/components/ui/custom-input/password-input";
import { SelectInput } from "@/components/ui/custom-input/select-input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Rcon } from "@/types/Config";

export const RconTable = (props: RconTableProps) => {
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <EditorInput
          isDesktop={props.isDesktop}
            parameter={props.config.rcon?.address}
            name="Address"
            key="rcon.address"
            placeholder="xxx.xxx.xxx.xxx"
            change={(v) =>
              props.setConfig({
                ...props.config,
                rcon: { ...props.config.rcon, address: v },
              })
            }
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  rcon: { ...props.config.rcon, address: new Rcon().address },
                })
              }
            />
            <HelpButton parameterName="rcon" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
          isDesktop={props.isDesktop}
            parameter={props.config.rcon?.port}
            min={1}
            max={65535}
            name="Port"
            key="rcon.port"
            change={(v) =>
              props.setConfig({
                ...props.config,
                rcon: { ...props.config.rcon, port: parseInt(v) },
              })
            }
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  rcon: { ...props.config.rcon, port: new Rcon().port },
                })
              }
            />
            <HelpButton parameterName="rcon" />
          </TableCell>
        </TableRow>
        <TableRow>
          <PasswordInput
            parameter={props.config.rcon?.password}
            name="Password"
            key="rcon.password"
            change={(v) =>
              props.setConfig({
                ...props.config,
                rcon: { ...props.config.rcon, password: v },
              })
            }
            required={true}
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  rcon: {
                    ...props.config.rcon,
                    password: new Rcon().password,
                  },
                })
              }
            />
            <HelpButton parameterName="password" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
          isDesktop={props.isDesktop}
            parameter={props.config.rcon?.maxClients}
            min={1}
            max={16}
            name="Max Clients"
            key="rcon.maxClients"
            change={(v) =>
              props.setConfig({
                ...props.config,
                rcon: { ...props.config.rcon, maxClients: parseInt(v) },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  rcon: {
                    ...props.config.rcon,
                    maxClients: new Rcon().maxClients,
                  },
                })
              }
            />
            <HelpButton parameterName="password" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SelectInput
            parameters={["admin", "monitor"]}
            name="Permission"
            selected={props.config.rcon?.permission}
            change={(v) =>
              props.setConfig({
                ...props.config,
                rcon: {
                  ...props.config.rcon,
                  permission: v as "admin" | "monitor",
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  rcon: {
                    ...props.config.rcon,
                    permission: new Rcon().permission,
                  },
                })
              }
            />
            <HelpButton parameterName="permission" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
