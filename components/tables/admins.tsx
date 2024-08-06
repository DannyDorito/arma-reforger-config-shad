"use client";

import { useState } from "react";
import { AdminTableProps } from "../props/AdminTableProps";
import { CustomTableHeader } from "../table-header";
import { EditorInput } from "../ui/custom-input/editor-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { HelpButton } from "../ui/buttons/help-button";
import { AddButton } from "../ui/buttons/add-button";
import { DeleteButton } from "../ui/buttons/delete-button";

export const AdminTable = (props: AdminTableProps) => {
  const [newAdmin, setNewAdmin] = useState<string>("");

  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        {props.config.game?.admins.map((admin, index) => {
          return (
            <TableRow key={`Admin-${index}`}>
              <EditorInput
                key={`Admin-${index.toString()}`}
                parameter={admin}
                name={`Admin ${index + 1}`}
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
              />
              <TableCell>
                <DeleteButton
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
                />
                <HelpButton parameterName="admins" />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow key={`Admin-New`}>
          <EditorInput
            key={`Admin-New`}
            name={`New Admin`}
            parameter={newAdmin}
            change={(v) => setNewAdmin(v)}
          />
          <TableCell>
            <AddButton
              add={() => {
                const admins = [...props.config.game?.admins, newAdmin];
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    admins: admins,
                  },
                });
                setNewAdmin("");
              }}
              name="Admin"
            />
            <HelpButton parameterName="admins" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
