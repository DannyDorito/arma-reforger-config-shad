"use client";

import { GamePropertiesTableProps } from "@/components/props/GamePropertiesTableProps";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { SwitchInput } from "@/components/ui/custom-input/switch-input";
import { TextAreaInput } from "@/components/ui/custom-input/textarea-input";
import { GameProperties } from "@/types/Config";

export const GamePropertiesTable = (props: GamePropertiesTableProps) => {
  return (
    <>
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
                    disableThirdPerson: new GameProperties().disableThirdPerson,
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
        parameter={props.config.game?.gameProperties.VONCanTransmitCrossFaction}
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
};
