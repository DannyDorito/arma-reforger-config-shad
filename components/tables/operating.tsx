import { Operating } from "@/types/Config";
import { ResetButton } from "../ui/buttons/reset-button";
import { HelpButton } from "../ui/buttons/help-button";
import { CustomTableHeader } from "../table-header";
import { SwitchInput } from "../ui/custom-input/switch-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { EditorInput } from "../ui/custom-input/editor-input";
import { OperatingTableProps } from "../props/OperatingTableProps";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertTitle } from "../ui/alert";
import Link from "next/link";

export const OperatingTable = (props: OperatingTableProps) => {
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <SwitchInput
            parameter={props.config.operating?.lobbyPlayerSynchronise}
            name="Lobby Player Synchronise"
            key="operating.lobbyPlayerSynchronise"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  lobbyPlayerSynchronise: v,
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    lobbyPlayerSynchronise: new Operating()
                      .lobbyPlayerSynchronise,
                  },
                })
              }
            />
            <HelpButton parameterName="lobbyPlayerSynchronise" />
          </TableCell>
        </TableRow>
        <TableRow>
          {/* {typeof props.config.operating?.disableNavmeshStreaming ===
          "boolean" ? (
            <SwitchInput
              parameter={
                props.config.operating?.disableNavmeshStreaming as boolean
              }
              name="Disable Navmesh Streaming"
              key="operating.disableNavmeshStreaming"
              disabled={true}
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    disableNavmeshStreaming: v,
                  },
                })
              }
            />
          ) : (
            <EditorInput
              parameter={
                props.config.operating?.disableNavmeshStreaming as string[]
              }
              name="Disable Navmesh Streaming"
              key="operating.disableNavmeshStreaming"
              change={() => console.log("TODO: Disable Navmesh Streaming")}
              disabled={true}
            />
          )} */}
          <TableCell>Disable Navmesh Streaming</TableCell>
          <TableCell>
            <Alert variant="destructive">
              <ExclamationTriangleIcon className="h-4 w-4" />
              <AlertTitle>
                Currently cannot edit&nbsp;
                <Link
                  href="https://github.com/DannyDorito/arma-reforger-config-shad/issues/5"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Cannot edit Disable Navmesh Streaming issue tracker on GitHub"
                  className="underline"
                >
                  track progress!
                </Link>
              </AlertTitle>
            </Alert>
          </TableCell>
          <TableCell>
            <ResetButton
              disabled={true}
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    disableNavmeshStreaming: new Operating()
                      .disableNavmeshStreaming,
                  },
                })
              }
            />
            <HelpButton parameterName="disableNavmeshStreaming" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            parameter={props.config.operating?.disableServerShutdown}
            name="Disable Server Shutdown"
            key="operating.disableServerShutdown"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  disableServerShutdown: v,
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    disableServerShutdown: new Operating()
                      .disableServerShutdown,
                  },
                })
              }
            />
            <HelpButton parameterName="disableServerShutdown" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            parameter={props.config.operating?.disableAI}
            name="Disable AI"
            key="operating.disableAI"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: { ...props.config.operating, disableAI: v },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    disableAI: new Operating().disableAI,
                  },
                })
              }
            />
            <HelpButton parameterName="disableAI" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.operating?.playerSaveTime}
            name="Player Save Time"
            key="operating.playerSaveTime"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  playerSaveTime: parseInt(v),
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    playerSaveTime: new Operating().playerSaveTime,
                  },
                })
              }
            />
            <HelpButton parameterName="playerSaveTime" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.operating?.aiLimit}
            name="AI Limit"
            key="operating.aiLimit"
            min={-1}
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  aiLimit: parseInt(v),
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    aiLimit: new Operating().aiLimit,
                  },
                })
              }
            />
            <HelpButton parameterName="aiLimit" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            parameter={props.config.operating?.slotReservationTimeout}
            min={5}
            max={300}
            name="Slot Reservation Timeout"
            key="operating.slotReservationTimeout"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  slotReservationTimeout: parseInt(v),
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    slotReservationTimeout: new Operating()
                      .slotReservationTimeout,
                  },
                })
              }
            />
            <HelpButton parameterName="slotReservationTimeout" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
