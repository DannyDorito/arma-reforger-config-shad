"use client";

import { Operating } from "@/types/Config";
import { ResetButton } from "../ui/buttons/reset-button";
import { HelpButton } from "../ui/buttons/help-button";
import { CustomTableHeader } from "../table-header";
import { SwitchInput } from "../ui/custom-input/switch-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { EditorInput } from "../ui/custom-input/editor-input";
import { OperatingTableProps } from "../props/OperatingTableProps";
import { TextAreaInput } from "../ui/custom-input/textarea-input";

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
        </TableRow>{" "}
        <TableRow>
          <TableCell>Disable Navmesh Streaming</TableCell>
          <TextAreaInput
            id="operating.disableNavmeshStreaming"
            parameter={
              props.config.operating?.disableNavmeshStreaming === null
                ? "null"
                : JSON.stringify(
                    props.config.operating?.disableNavmeshStreaming,
                    undefined,
                    4
                  )
            }
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  disableNavmeshStreaming: v.split("\r\n"),
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
                    disableNavmeshStreaming: new Operating()
                      .disableNavmeshStreaming,
                  },
                })
              }
            />
            <HelpButton parameterName="disableNavmeshStreaming" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
