"use client";

import { AdminTableProps } from "@/components/props/AdminTableProps";
import { AddButton } from "@/components/ui/buttons/add-button";
import { DeleteButton } from "@/components/ui/buttons/delete-button";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { NamedAdmin } from "@/types/NamedAdmin";
import { useEffect, useState } from "react";

export const AdminTable = (props: AdminTableProps) => {
  const [newAdmin, setNewAdmin] = useState<string>("");
  const [adminNames, setAdminNames] = useState<NamedAdmin[]>([]);
  const useAdminService = process.env.NEXT_PUBLIC_USE_ADMIN_SERVICE === "true";

  const resolveName = async (
    id: string,
    index: number
  ): Promise<NamedAdmin | undefined> => {
    if (adminNames.map((a) => a.Id).includes(id)) return;
    if (id.trim() === "") return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NAME_RESOLVER_URL}nameresolver?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": document.URL,
          "Access-Control-Allow-Methods": "GET",
        },
      }
    );

    if (!response.ok) {
      return { Id: id, Name: `Admin-${index.toString()}` };
    }

    const name = await response.text();
    const newAdmin = { Id: id, Name: name };

    const newAdminNames = adminNames;
    newAdminNames.push(newAdmin);
    setAdminNames(newAdminNames);

    return newAdmin;
  };

  const addAdmin = async () => {
    const admins = [...(props.config.game?.admins ?? []), newAdmin];
    props.setConfig({
      ...props.config,
      game: {
        ...props.config.game,
        admins: admins,
      },
    });
    setNewAdmin("");
    await resolveName(newAdmin, props.config.game?.admins.length + 1);
  };

  const getAdminName = (id: string, index: number) => {
    const admin = adminNames.filter((an) => an.Id === id);

    if (admin.length !== 1) {
      return `Admin ${index.toString()}`;
    } else {
      return admin[0].Name;
    }
  };

  const getCurrentAdminNames = async () => {
    fetch(`${process.env.NEXT_PUBLIC_NAME_RESOLVER_URL}`, {
      method: "POST",
      body: JSON.stringify(props.config?.game.admins),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": document.URL,
        "Access-Control-Allow-Methods": "POST",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const admins = JSON.parse(JSON.stringify(responseJson)) as NamedAdmin[];

        setAdminNames(admins);
      });
  };

  useEffect(() => {
    if (useAdminService) getCurrentAdminNames();
  }, []);

  return (
    <>
      {props.config.game?.admins.map((admin, index) => {
        return (
          <EditorInput
            key={`Admin-${index.toString()}`}
            parameter={admin}
            name={getAdminName(admin, index)}
            change={(v) => {
              const admins = props.config.game?.admins;
              admins[index] = v;
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  admins: admins,
                },
              });
            }}
            buttons={[
              <DeleteButton
                key={`Admin-${index.toString()}-delete`}
                click={() => {
                  const admins = props.config.game?.admins.filter(
                    (_, i) => i !== index
                  );
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      admins: admins,
                    },
                  });
                }}
                name="Admin"
              />,
              <HelpButton
                parameterName="admins"
                key={`Admin-${index.toString()}-help`}
              />,
            ]}
          />
        );
      })}
      <EditorInput
        key={`Admin-New`}
        name={`New Admin`}
        parameter={newAdmin}
        change={(v) => setNewAdmin(v)}
        buttons={[
          <AddButton
            key={`Admin-New-add`}
            add={() => addAdmin()}
            name="Admin"
          />,
          <HelpButton parameterName="admins" key={`Admin-New-help`} />,
        ]}
      />
    </>
  );
};
