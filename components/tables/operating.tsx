"use client";

import { OperatingTableProps } from "@/components/props/OperatingTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { SwitchInput } from "@/components/ui/custom-input/switch-input";
import { TextAreaInput } from "@/components/ui/custom-input/textarea-input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Operating } from "@/types/Config";

export const OperatingTable = (props: OperatingTableProps) => {
  //TODO: Mobile
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
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
            isDesktop={props.isDesktop}
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
            isDesktop={props.isDesktop}
            parameter={props.config.operating?.disableCrashReporter}
            name="Disable Crash Reporter"
            key="operating.disableCrashReporter"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  disableCrashReporter: v,
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
                    disableCrashReporter: new Operating()
                      .disableCrashReporter,
                  },
                })
              }
            />
            <HelpButton parameterName="disableCrashReporter" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
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
            isDesktop={props.isDesktop}
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
            isDesktop={props.isDesktop}
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
            isDesktop={props.isDesktop}
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
        <TableRow>
          <TextAreaInput
            isDesktop={props.isDesktop}
            name="Disable Navmesh Streaming"
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
        <TableRow>
          <EditorInput
            isDesktop={props.isDesktop}
            parameter={props.config.operating?.joinQueue}
            name="Join Queue"
            key="operating.joinQueue"
            min={0}
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  joinQueue: parseInt(v),
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
                    joinQueue: new Operating()
                      .joinQueue,
                  },
                })
              }
            />
            <HelpButton parameterName="joinQueue" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            isDesktop={props.isDesktop}
            parameter={props.config.operating?.maxSize}
            name="Max Size"
            min={0}
            max={50}
            key="operating.maxSize"
            change={(v) =>
              props.setConfig({
                ...props.config,
                operating: {
                  ...props.config.operating,
                  maxSize: parseInt(v),
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
                    maxSize: new Operating()
                      .maxSize,
                  },
                })
              }
            />
            <HelpButton parameterName="maxSize" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
