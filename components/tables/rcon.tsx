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
import { useState } from "react";
import { DeleteButton } from "@/components/ui/buttons/delete-button";
import { AddButton } from "@/components/ui/buttons/add-button";

export const RconTable = (props: RconTableProps) => {
  const [newWhitelist, setNewWhitelist] = useState<string>("");
  const [newBlacklist, setNewBlacklist] = useState<string>("");

  //TODO: Mobile
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
            isDesktop={props.isDesktop}
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
            isDesktop={props.isDesktop}
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
        {props.config.rcon?.whitelist.map((whitelisted, index) => {
          return (
            <TableRow key={`Whitelist-${index}`}>
              <EditorInput
                isDesktop={props.isDesktop}
                key={`Whitelist-${index.toString()}`}
                parameter={whitelisted}
                name={`Whitelisted ${index + 1}`}
                change={(v) => {
                  const whitelist = props.config.rcon?.whitelist;
                  whitelist[index] = v;
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      whitelist: whitelist,
                    },
                  });
                }}
              />
                <TableCell>
                  <DeleteButton
                    click={() => {
                      const whitelist = props.config.rcon?.whitelist.filter(
                        (_, i) => i !== index
                      );
                      props.setConfig({
                        ...props.config,
                        rcon: {
                          ...props.config.rcon,
                          whitelist: whitelist,
                        },
                      });
                    }}
                    name="Whitelist"
                  />
                  <HelpButton parameterName="Whitelist" />
                </TableCell>
            </TableRow>
          )
        })}
        <TableRow key="Whitelist-New">
          <EditorInput
            isDesktop={props.isDesktop}
            key={`Whitelist-New`}
            name={`New Whitelist`}
            parameter={newWhitelist}
            change={(v) => setNewWhitelist(v)}
          />
          <TableCell>
            <AddButton
                add={() => {
                  const whitelist = [...props.config.rcon?.whitelist, newWhitelist];
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      whitelist: whitelist,
                    },
                  });
                  setNewWhitelist("");
                }}
                name="Whitelist"
              />
              <HelpButton parameterName="whitelist" />
            </TableCell>
        </TableRow>
        {props.config.rcon?.blacklist.map((blacklisted, index) => {
          return (
            <TableRow key={`Blacklist-${index}`}>
              <EditorInput
                isDesktop={props.isDesktop}
                key={`Blacklist-${index.toString()}`}
                parameter={blacklisted}
                name={`Blacklist ${index + 1}`}
                change={(v) => {
                  const blacklist = props.config.rcon?.blacklist;
                  blacklist[index] = v;
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      blacklist: blacklist,
                    },
                  });
                }}
              />
                <TableCell>
                  <DeleteButton
                    click={() => {
                      const blacklist = props.config.rcon?.blacklist.filter(
                        (_, i) => i !== index
                      );
                      props.setConfig({
                        ...props.config,
                        rcon: {
                          ...props.config.rcon,
                          blacklist: blacklist,
                        },
                      });
                    }}
                    name="Admin"
                  />
                  <HelpButton parameterName="blacklist" />
                </TableCell>
            </TableRow>
          )
        })}
        <TableRow key="Blacklist-New">
          <EditorInput
            isDesktop={props.isDesktop}
            key={`Blacklist-New`}
            name={`New Blacklist`}
            parameter={newBlacklist}
            change={(v) => setNewBlacklist(v)}
          />
          <TableCell>
            <AddButton
                add={() => {
                  const blacklist = [...props.config.rcon?.blacklist, newWhitelist];
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      blacklist: blacklist,
                    },
                  });
                  setNewBlacklist("");
                }}
                name="Blacklist"
              />
              <HelpButton parameterName="blacklist" />
            </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
