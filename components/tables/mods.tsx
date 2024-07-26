import { useState } from "react";
import { ModsTableProps } from "../props/ModsTableProps";
import { Mod } from "@/types/Config";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { CustomTableHeader } from "../table-header";
import { EditorInput } from "../ui/custom-input/editor-input";
import { HelpButton } from "../ui/buttons/help-button";
import { DeleteButton } from "../ui/buttons/delete-button";
import { AddButton } from "../ui/buttons/add-button";

export const ModsTable = (props: ModsTableProps) => {
  const [newMod, setNewMod] = useState<Mod>(new Mod());
  return (
    <Table>
      <CustomTableHeader headers={["Id", "Name", "Value", "Actions"]} />
      <TableBody>
        {props.config.game?.mods.map((mod, index) => {
          return (
            <TableRow key={`Mod-${index}`}>
              <EditorInput
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
        <TableRow key={`Mod-New}`}>
          <EditorInput
            key="New-ModID"
            parameter={newMod.modId}
            change={(v) => {
              const mod = newMod;
              mod.modId = v;
              setNewMod(mod);
            }}
          />
          <EditorInput
            key="New-ModName"
            parameter={newMod.name}
            change={(v) => {
              const mod = newMod;
              mod.name = v;
              setNewMod(mod);
            }}
          />
          <EditorInput
            key="New-ModVersion"
            parameter={newMod.version}
            placeholder="Latest"
            change={(v) => {
              const mod = newMod;
              mod.version = v;
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
