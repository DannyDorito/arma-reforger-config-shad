import { GameProperties } from "@/types/Config";
import { GamePropertiesTableProps } from "../props/GamePropertiesTableProps";
import { ResetButton } from "../ui/buttons/reset-button";
import { HelpButton } from "../ui/buttons/help-button";import { CustomTableHeader } from "../table-header";
import { EditorInput } from "../ui/custom-input/editor-input";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { SwitchInput } from "../ui/custom-input/switch-input";

export const GamePropertiesTable = (props: GamePropertiesTableProps) => {
  return (
    <Table>
      <CustomTableHeader headers={["Name", "Value", "Actions"]} />
      <TableBody>
        <TableRow>
          <EditorInput
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
          <EditorInput
            parameter={props.config.game?.gameProperties.missionHeader.toString()}
            name="Mission Header"
            key="gameProperties.missionHeader"
            disabled={true}
            change={(v) => console.log("TODO:")}
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
