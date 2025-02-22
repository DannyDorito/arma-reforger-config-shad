"use client";

import { RconTableProps } from "@/components/props/RconTableProps";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { PasswordInput } from "@/components/ui/custom-input/password-input";
import { SelectInput } from "@/components/ui/custom-input/select-input";
import { Rcon } from "@/types/Config";
import { useState } from "react";
import { DeleteButton } from "@/components/ui/buttons/delete-button";
import { AddButton } from "@/components/ui/buttons/add-button";

export const RconTable = (props: RconTableProps) => {
  const [newWhitelist, setNewWhitelist] = useState<string>("");
  const [newBlacklist, setNewBlacklist] = useState<string>("");

  return (
    <div>
      <EditorInput
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
        buttons={[
          <ResetButton
            key="rcon.address-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                rcon: {
                  ...props.config.rcon,
                  address: new Rcon().address,
                },
              })
            }
          />,
          <HelpButton parameterName="rcon" key="rcon.address-delete" />,
        ]}
      />
      <EditorInput
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
        buttons={[
          <ResetButton
            key="rcon.port-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                rcon: { ...props.config.rcon, port: new Rcon().port },
              })
            }
          />,
          <HelpButton parameterName="rcon" key="rcon.port-help" />,
        ]}
      />
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
        buttons={[
          <ResetButton
            key="rcon.password-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                rcon: {
                  ...props.config.rcon,
                  password: new Rcon().password,
                },
              })
            }
          />,
          <HelpButton parameterName="password" key="rcon.password-help" />,
        ]}
      />
      <EditorInput
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
        buttons={[
          <ResetButton
            key="rcon.maxClients-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                rcon: {
                  ...props.config.rcon,
                  maxClients: new Rcon().maxClients,
                },
              })
            }
          />,
          <HelpButton parameterName="maxClients" key="rcon.maxClients-help" />,
        ]}
      />
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
        buttons={[
          <ResetButton
            key="rcon.permissions-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                rcon: {
                  ...props.config.rcon,
                  permission: new Rcon().permission,
                },
              })
            }
          />,
          <HelpButton
            parameterName="permission"
            key="rcon.permissions-reset-help"
          />,
        ]}
      />
      {props.config.rcon?.whitelist.map((whitelisted, index) => {
        return (
          <EditorInput
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
            buttons={[
              <DeleteButton
                key={`rcon.whitelist-${index}-delete`}
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
              />,
              <HelpButton
                parameterName="Whitelist"
                key={`rcon.whitelist-${index}-help`}
              />,
            ]}
          />
        );
      })}
      <EditorInput
        key={`Whitelist-New`}
        name={`New Whitelist`}
        parameter={newWhitelist}
        change={(v) => setNewWhitelist(v)}
        buttons={[
          <AddButton
            key="rcon.whitelist-new-add"
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
          />,
          <HelpButton
            parameterName="whitelist"
            key="rcon.whitelist-new-help"
          />,
        ]}
      />
      {props.config.rcon?.blacklist.map((blacklisted, index) => {
        return (
          <EditorInput
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
            buttons={[
              <DeleteButton
                key={`rcon.blacklist-${index}-delete`}
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
              />,
              <HelpButton
                parameterName="blacklist"
                key={`rcon.blacklist-${index}-help`}
              />,
            ]}
          />
        );
      })}
      <EditorInput
        key={`Blacklist-New`}
        name={`New Blacklist`}
        parameter={newBlacklist}
        change={(v) => setNewBlacklist(v)}
        buttons={[
          <AddButton
            key="rcon.blacklist-new-add"
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
          />,
          <HelpButton
            parameterName="blacklist"
            key="rcon.blacklist-new-help"
          />,
        ]}
      />
    </div>
  );
};
