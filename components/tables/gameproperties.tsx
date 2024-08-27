"use client";

import { GamePropertiesTableProps } from "@/components/props/GamePropertiesTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { SwitchInput } from "@/components/ui/custom-input/switch-input";
import { TextAreaInput } from "@/components/ui/custom-input/textarea-input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { GameProperties } from "@/types/Config";

export const GamePropertiesTable = (props: GamePropertiesTableProps) => {
  //TODO: Mobile
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <EditorInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.serverMaxViewDistance}
            min={500}
            max={10000}
            name="Server Max View Distance"
            key="gameProperties.serverMaxViewDistance"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    serverMaxViewDistance: parseInt(v),
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      serverMaxViewDistance: new GameProperties()
                        .serverMaxViewDistance,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="serverMaxViewDistance" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.serverMinGrassDistance}
            min={0}
            max={150}
            name="Server Min Grass Distance"
            key="gameProperties.serverMinGrassDistance"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    serverMinGrassDistance: parseInt(v),
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      serverMinGrassDistance: new GameProperties()
                        .serverMinGrassDistance,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="serverMinGrassDistance" />
          </TableCell>
        </TableRow>
        <TableRow>
          <EditorInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.networkViewDistance}
            min={500}
            max={5000}
            name="Network View Distance"
            key="gameProperties.networkViewDistance"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    networkViewDistance: parseInt(v),
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      networkViewDistance: new GameProperties()
                        .networkViewDistance,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="networkViewDistance" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.disableThirdPerson}
            name="Disable Third Person"
            key="gameProperties.disableThirdPerson"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    disableThirdPerson: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      disableThirdPerson: new GameProperties()
                        .disableThirdPerson,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="disableThirdPerson" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.fastValidation}
            name="Fast Validation"
            key="gameProperties.fastValidation"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    fastValidation: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      fastValidation: new GameProperties().fastValidation,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="fastValidation" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.battlEye}
            name="BattleEye"
            key="gameProperties.battlEye"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    battlEye: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      battlEye: new GameProperties().battlEye,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="battlEye" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
            parameter={props.config.game?.gameProperties.VONDisableUI}
            name="VON Disable UI"
            key="gameProperties.VONDisableUI"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    VONDisableUI: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      VONDisableUI: new GameProperties().VONDisableUI,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="VONDisableUI" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
            parameter={
              props.config.game?.gameProperties.VONDisableDirectSpeechUI
            }
            name="VON Disable Direct Speech UI"
            key="gameProperties.VONDisableDirectSpeechUI"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    VONDisableDirectSpeechUI: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      VONDisableDirectSpeechUI: new GameProperties()
                        .VONDisableDirectSpeechUI,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="VONDisableDirectSpeechUI" />
          </TableCell>
        </TableRow>
        <TableRow>
          <SwitchInput
            isDesktop={props.isDesktop}
            parameter={
              props.config.game?.gameProperties.VONCanTransmitCrossFaction
            }
            name="VON Can Transmit Cross Faction"
            key="gameProperties.VONCanTransmitCrossFaction"
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game.gameProperties,
                    VONCanTransmitCrossFaction: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      VONCanTransmitCrossFaction: new GameProperties()
                        .VONCanTransmitCrossFaction,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="VONCanTransmitCrossFaction" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mission Header</TableCell>
          <TextAreaInput
            id="gameProperties.missionHeader"
            parameter={JSON.stringify(
              props.config.game?.gameProperties.missionHeader,
              undefined,
              4
            )}
            change={(v) =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  gameProperties: {
                    ...props.config.game?.gameProperties,
                    missionHeader: v,
                  },
                },
              })
            }
          />
          <TableCell>
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game?.gameProperties,
                      missionHeader: new GameProperties().missionHeader,
                    },
                  },
                })
              }
            />
            <HelpButton parameterName="missionHeader" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
