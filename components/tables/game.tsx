"use client";

import { GameTableProps } from "@/components/props/GameTableProps";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { MultiSelectInput } from "@/components/ui/custom-input/multiselect-input";
import { PasswordInput } from "@/components/ui/custom-input/password-input";
import { SwitchInput } from "@/components/ui/custom-input/switch-input";
import { Game, Platform } from "@/types/Config";
import { AllScenarios } from "@/types/OfficialScenarios";
import { SupportedPlatforms } from "@/types/SupportedPlatforms";
import { SelectInput } from "../ui/custom-input/select-input";

export const GameTable = (props: GameTableProps) => {
  return (
    <>
      <EditorInput
        parameter={props.config.game?.name}
        min={0}
        max={100}
        name="Name"
        key="game.name"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, name: v },
          })
        }
        required={true}
        buttons={[
          <ResetButton
            key="game.name-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: { ...props.config.game, name: new Game().name },
              })
            }
          />,
          <HelpButton parameterName="name" key="game.name-help" />,
        ]}
      />
      <PasswordInput
        parameter={props.config.game?.password}
        name="Password"
        key="game.password"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, password: v },
          })
        }
        buttons={[
          <ResetButton
            key="game.password-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  password: new Game().password,
                },
              })
            }
          />,
          <HelpButton parameterName="password" key="game.password-help" />,
        ]}
      />
      <PasswordInput
        parameter={props.config.game?.passwordAdmin}
        name="Password Admin"
        key="game.passwordAdmin"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, passwordAdmin: v },
          })
        }
        required={true}
        buttons={[
          <ResetButton
            key="game.passwordAdmin-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  passwordAdmin: new Game().passwordAdmin,
                },
              })
            }
          />,
          <HelpButton
            parameterName="passwordAdmin"
            key="game.passwordAdmin-help"
          />,
        ]}
      />
      <SelectInput
        parameters={AllScenarios.map((as) => as.value)}
        name="Scenario"
        selected={props.config.game?.scenarioId}
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, scenarioId: v },
          })
        }
        buttons={[
          <ResetButton
            key="game.scenarioId-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  scenarioId: new Game().scenarioId,
                },
              })
            }
          />,
          <HelpButton parameterName="scenarioId" key="game.scenarioId-help" />,
        ]}
      />
      <EditorInput
        parameter={props.config.game?.maxPlayers}
        min={1}
        max={128}
        name="Max Players"
        key="game.maxPlayers"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, maxPlayers: parseInt(v) },
          })
        }
        buttons={[
          <ResetButton
            key="game.maxPlayers-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  maxPlayers: new Game().maxPlayers,
                },
              })
            }
          />,
          <HelpButton parameterName="maxPlayers" key="game.maxPlayers-help" />,
        ]}
      />
      <SwitchInput
        parameter={props.config.game?.visible}
        name="Visible"
        key="game.visible"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, visible: v },
          })
        }
        buttons={[
          <ResetButton
            key="game.visible-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  visible: new Game().visible,
                },
              })
            }
          />,
          <HelpButton parameterName="visible" key="game.visible-help" />,
        ]}
      />
      <SwitchInput
        parameter={props.config.game?.crossPlatform}
        name="Cross Platform"
        key="game.crossPlatform"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, crossPlatform: v },
          })
        }
        buttons={[
          <ResetButton
            key="game.crossPlatform-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  crossPlatform: new Game().crossPlatform,
                },
              })
            }
          />,
          <HelpButton
            parameterName="crossPlatform"
            key="game.crossPlatform-help"
          />,
        ]}
      />
      <SwitchInput
        parameter={props.config.game?.modsRequiredByDefault}
        name="Mods Required By Default"
        key="game.modsRequiredByDefault"
        change={(v) =>
          props.setConfig({
            ...props.config,
            game: { ...props.config.game, modsRequiredByDefault: v },
          })
        }
        buttons={[
          <ResetButton
            key="game.modsRequiredByDefault-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  modsRequiredByDefault: new Game().modsRequiredByDefault,
                },
              })
            }
          />,
          <HelpButton
            parameterName="modsRequiredByDefault"
            key="game.modsRequiredByDefault-help"
          />,
        ]}
      />
      <MultiSelectInput
        name="Supported Platforms"
        options={SupportedPlatforms}
        selected={props.config.game?.supportedPlatforms.map((s) => ({
          label: s.toString(),
          value: s.toString(),
        }))}
        change={(v) => {
          props.setConfig({
            ...props.config,
            game: {
              ...props.config.game,
              supportedPlatforms: v.map(
                (p) => Platform[p as keyof typeof Platform]
              ),
            },
          });
        }}
        buttons={[
          <ResetButton
            key="game.supportedPlatforms-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                game: {
                  ...props.config.game,
                  supportedPlatforms: new Game().supportedPlatforms,
                },
              })
            }
          />,
          <HelpButton
            parameterName="supportedPlatforms"
            key="game.supportedPlatforms-help"
          />,
        ]}
      />
    </>
  );
};
