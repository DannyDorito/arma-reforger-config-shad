"use client";

import { GamePropertiesTableProps } from "@/components/props/GamePropertiesTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { SwitchInput } from "@/components/ui/custom-input/switch-input";
import { TextAreaInput } from "@/components/ui/custom-input/textarea-input";
import { Table, TableBody, TableRow } from "@/components/ui/table";
import { GameProperties } from "@/types/Config";

export const GamePropertiesTable = (props: GamePropertiesTableProps) => {
  if (props.isDesktop) {
    return (
      <Table>
        <CustomTableHeader headers={["Name", "Value"]} />
        <TableBody>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
              parameter={
                props.config.game?.gameProperties.serverMaxViewDistance
              }
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
              buttons={[
                <ResetButton
                  key="gameProperties.serverMaxViewDistance-reset"
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
                />,
                <HelpButton
                  parameterName="serverMaxViewDistance"
                  key="gameProperties.serverMaxViewDistance-help"
                />,
              ]}
            />
          </TableRow>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
              parameter={
                props.config.game?.gameProperties.serverMinGrassDistance
              }
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
              buttons={[
                <ResetButton
                  key="gameProperties.serverMinGrassDistance-reset"
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
                />,
                <HelpButton
                  parameterName="serverMinGrassDistance"
                  key="gameProperties.serverMinGrassDistance-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.networkViewDistance-reset"
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
                />,
                <HelpButton
                  parameterName="networkViewDistance"
                  key="gameProperties.networkViewDistance-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.disableThirdPerson-reset"
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
                />,
                <HelpButton
                  parameterName="disableThirdPerson"
                  key="gameProperties.disableThirdPerson-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.fastValidation-reset"
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
                />,
                <HelpButton
                  parameterName="fastValidation"
                  key="gameProperties.fastValidation-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.battlEye-reset"
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
                />,
                <HelpButton
                  parameterName="battlEye"
                  key="gameProperties.battlEye-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.VONDisableUI-reset"
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
                />,
                <HelpButton
                  parameterName="VONDisableUI"
                  key="gameProperties.VONDisableUI-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.VONDisableDirectSpeechUI-reset"
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
                />,
                <HelpButton
                  parameterName="VONDisableDirectSpeechUI"
                  key="gameProperties.VONDisableDirectSpeechUI-help"
                />,
              ]}
            />
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
              buttons={[
                <ResetButton
                  key="gameProperties.VONCanTransmitCrossFaction-reset"
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
                />,
                <HelpButton
                  parameterName="VONCanTransmitCrossFaction"
                  key="gameProperties.VONCanTransmitCrossFaction-help"
                />,
              ]}
            />
          </TableRow>
          <TableRow>
            <TextAreaInput
              isDesktop={props.isDesktop}
              name="Mission Header"
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
              buttons={[
                <ResetButton
                  key="gameProperties.missionHeader-reset"
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
                />,
                <HelpButton
                  parameterName="missionHeader"
                  key="gameProperties.missionHeader-help"
                />,
              ]}
            />
          </TableRow>
        </TableBody>
      </Table>
    );
  } else {
    return (
      <>
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
          buttons={[
            <ResetButton
              key="gameProperties.serverMaxViewDistance-reset"
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
            />,
            <HelpButton
              parameterName="serverMaxViewDistance"
              key="gameProperties.serverMaxViewDistance-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.serverMinGrassDistance-reset"
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
            />,
            <HelpButton
              parameterName="serverMinGrassDistance"
              key="gameProperties.serverMinGrassDistance-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.networkViewDistance-reset"
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
            />,
            <HelpButton
              parameterName="networkViewDistance"
              key="gameProperties.networkViewDistance-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.disableThirdPerson-reset"
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
            />,
            <HelpButton
              parameterName="disableThirdPerson"
              key="gameProperties.disableThirdPerson-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.fastValidation-reset"
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
            />,
            <HelpButton
              parameterName="fastValidation"
              key="gameProperties.fastValidation-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.battlEye-reset"
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
            />,
            <HelpButton
              parameterName="battlEye"
              key="gameProperties.battlEye-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.VONDisableUI-reset"
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
            />,
            <HelpButton
              parameterName="VONDisableUI"
              key="gameProperties.VONDisableUI-help"
            />,
          ]}
        />
        <SwitchInput
          isDesktop={props.isDesktop}
          parameter={props.config.game?.gameProperties.VONDisableDirectSpeechUI}
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
          buttons={[
            <ResetButton
              key="gameProperties.VONDisableDirectSpeechUI-reset"
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
            />,
            <HelpButton
              parameterName="VONDisableDirectSpeechUI"
              key="gameProperties.VONDisableDirectSpeechUI-help"
            />,
          ]}
        />
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
          buttons={[
            <ResetButton
              key="gameProperties.VONCanTransmitCrossFaction-reset"
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
            />,
            <HelpButton
              parameterName="VONCanTransmitCrossFaction"
              key="gameProperties.VONCanTransmitCrossFaction-help"
            />,
          ]}
        />
        <TextAreaInput
          isDesktop={props.isDesktop}
          name="Mission Header"
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
          buttons={[
            <ResetButton
              key="gameProperties.missionHeader-reset"
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
            />,
            <HelpButton
              parameterName="missionHeader"
              key="gameProperties.missionHeader-help"
            />,
          ]}
        />
      </>
    );
  }
};
