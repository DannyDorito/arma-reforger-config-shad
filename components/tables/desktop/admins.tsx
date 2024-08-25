"use client";

import { AdminTableProps } from "@/components/props/AdminTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { AddButton } from "@/components/ui/buttons/add-button";
import { DeleteButton } from "@/components/ui/buttons/delete-button";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { useState } from "react";

export const AdminTable = (props: AdminTableProps) => {
  const [newAdmin, setNewAdmin] = useState<string>("");

  if (props.isDesktop) {
    return (
      <Table>
        <CustomTableHeader headers={["Name", "Value", "Actions"]} />
        <TableBody>
          {props.config.game?.admins.map((admin, index) => {
            return (
              <TableRow key={`Admin-${index}`}>
                <EditorInput
                  isDesktop={props.isDesktop}
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
              isDesktop={props.isDesktop}
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
  } else {
    return (
      <>
        {props.config.game?.admins.map((admin, index) => {
          return (
            <EditorInput
              isDesktop={props.isDesktop}
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
          );
        })}
        <EditorInput
          isDesktop={props.isDesktop}
          key={`Admin-New`}
          name={`New Admin`}
          parameter={newAdmin}
          change={(v) => setNewAdmin(v)}
        />
      </>
    );
  }
};