import { Rcon } from "@/types/Config";
import { RconTableProps } from "../props/RconTableProps";
import { ResetButton } from "../ui/buttons/reset-button";
import { HelpButton } from "../ui/buttons/help-button";
import { CustomTableHeader } from "../table-header";
import { EditorInput } from "../ui/custom-input/editor-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { SelectInput } from "../ui/custom-input/select-input";
import { PasswordInput } from "../ui/custom-input/password-input";

export const RconTable = (props: RconTableProps) => {
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
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
