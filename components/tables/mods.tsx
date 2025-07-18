"use client";

import { useState } from "react";
import { Mod } from "@/types/Config";
import { ModsTableProps } from "@/components/props/ModsTableProps";
import { AddButton } from "@/components/ui/buttons/add-button";
import { DeleteButton } from "@/components/ui/buttons/delete-button";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { SwitchInput } from "../ui/custom-input/switch-input";

export const ModsTable = (props: ModsTableProps) => {
  const [newMod, setNewMod] = useState<Mod>(new Mod());

  return (
    <>
      {props.config.game?.mods.map((mod, index) => {
        return (
          <>
            <EditorInput
              name="ID"
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
              name="Name"
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
              name="Version"
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
              name="Required"
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
              buttons={[
                <DeleteButton
                  key={`game.mod-${mod.modId}-delete`}
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
                />,
                <HelpButton
                  parameterName="mods"
                  key={`game.mod-${mod.modId}-help`}
                />,
              ]}
            />
          </>
        );
      })}
      <EditorInput
        name="ID"
        key="New-ModID"
        parameter={newMod.modId}
        change={(v) => {
          const mod = { ...newMod, modId: v };
          setNewMod(mod);
        }}
      />
      <EditorInput
        name="Name"
        key="New-ModName"
        parameter={newMod.name}
        change={(v) => {
          const mod = newMod;
          mod.name = v;
          setNewMod(mod);
        }}
      />
      <EditorInput
        name="Version"
        key="New-ModVersion"
        parameter={newMod.version}
        placeholder="Latest"
        change={(v) => {
          const mod = newMod;
          mod.version = v;
          setNewMod(mod);
        }}
      />
      <SwitchInput
        name="Required"
        key="New-ModRequired"
        parameter={newMod.required}
        change={(v) => {
          const mod = newMod;
          mod.required = v;
          setNewMod(mod);
        }}
        buttons={[
          <AddButton
            key={`game.mod-add`}
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
          />,
          <HelpButton parameterName="mods" key={`game.mod-help`} />,
        ]}
      />
    </>
  );
};
