"use client";

import { useState } from "react";
import { Mod } from "@/types/Config";
import { ModsTableProps } from "@/components/props/ModsTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { AddButton } from "@/components/ui/buttons/add-button";
import { DeleteButton } from "@/components/ui/buttons/delete-button";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { SwitchInput } from "../ui/custom-input/switch-input";

export const ModsTable = (props: ModsTableProps) => {
  const [newMod, setNewMod] = useState<Mod>(new Mod());
  //TODO: Mobile
  return (
    <Table>
      <CustomTableHeader
        headers={["Id", "Name", "Value", "Required", "Actions"]}
      />
      <TableBody>
        {props.config.game?.mods.map((mod, index) => {
          return (
            <TableRow key={`Mod-${index}`}>
              <EditorInput
                isDesktop={props.isDesktop}
                key={index.toString() + "ModID"}
                parameter={mod.modId}
                change={(v) => {
                  const mods = props.config.game?.mods;
                  mods[index].modId = v;
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      mods: mods,
                    },
                  });
                }}
              />
              <EditorInput
                isDesktop={props.isDesktop}
                key={index.toString() + "ModName"}
                parameter={mod.name}
                change={(v) => {
                  const mods = props.config.game?.mods;
                  mods[index].name = v;
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      mods: mods,
                    },
                  });
                }}
              />
              <EditorInput
                isDesktop={props.isDesktop}
                key={index.toString() + "ModVersion"}
                parameter={mod.version}
                placeholder="Latest"
                change={(v) => {
                  const mods = props.config.game?.mods;
                  mods[index].version = v;
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      mods: mods,
                    },
                  });
                }}
              />
              <SwitchInput
                isDesktop={props.isDesktop}
                key={index.toString() + "Required"}
                parameter={mod.required}
                change={(v) => {
                  const mods = props.config.game?.mods;
                  mods[index].required = v;
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      mods: mods,
                    },
                  });
                }}
              />
              <TableCell>
                <DeleteButton
                  name={"Mod"}
                  click={() => {
                    const mods = props.config.game?.mods.filter(
                      (_, i) => i !== index
                    );
                    props.setConfig({
                      ...props.config,
                      game: {
                        ...props.config.game,
                        mods: mods,
                      },
                    });
                  }}
                />
                <HelpButton parameterName="mods" />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow key={`Mod-New`}>
          <EditorInput
            isDesktop={props.isDesktop}
            key="New-ModID"
            parameter={newMod.modId}
            change={(v) => {
              const mod = newMod;
              mod.modId = v;
              newMod.modId = v;
              setNewMod(newMod);
            }}
          />
          <EditorInput
            isDesktop={props.isDesktop}
            key="New-ModName"
            parameter={newMod.name}
            change={(v) => {
              const mod = newMod;
              mod.name = v;
              newMod.name = v;
              setNewMod(mod);
            }}
          />
          <EditorInput
            isDesktop={props.isDesktop}
            key="New-ModVersion"
            parameter={newMod.version}
            placeholder="Latest"
            change={(v) => {
              const mod = newMod;
              mod.version = v;
              newMod.version = v;
              setNewMod(mod);
            }}
          />
          <SwitchInput
            isDesktop={props.isDesktop}
            key={"New-ModRequired"}
            parameter={newMod.required}
            change={(v) => {
              const mod = newMod;
              mod.required = v;
              setNewMod(mod);
            }}
          />
          <TableCell>
            <AddButton
              name={"Mod"}
              add={() => {
                const mods = [...props.config.game.mods, newMod];
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    mods: mods,
                  },
                });
                setNewMod(new Mod());
              }}
            />
            <HelpButton parameterName="mods" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
